// File-based content layer — no database. Server-only (uses fs); client
// components import the pure helpers from lib/categories.js and lib/format.js.
// Work items live in content/work/<category>/<slug>.mdx, articles in
// content/thought-leadership/<slug>.mdx, standalone pages in content/pages/.
// Frontmatter carries the structured fields; the MDX body carries the story.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { WORK_CATEGORIES, getWorkCategory } from './categories';
import { formatDate, readingTime } from './format';

export { WORK_CATEGORIES, getWorkCategory, formatDate, readingTime };

const CONTENT_DIR = path.join(process.cwd(), 'content');

function readCollection(relDir) {
  const abs = path.join(CONTENT_DIR, relDir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const raw = fs.readFileSync(path.join(abs, f), 'utf8');
      const { data, content } = matter(raw);
      return { slug: f.replace(/\.mdx?$/, ''), ...data, body: content };
    })
    .filter((item) => !item.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getWorkItems(category) {
  if (category) {
    return readCollection(path.join('work', category)).map((i) => ({ ...i, category }));
  }
  return WORK_CATEGORIES.flatMap((c) => getWorkItems(c.slug)).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

export function getWorkItem(category, slug) {
  return getWorkItems(category).find((i) => i.slug === slug) || null;
}

export function getFeaturedWork(limit = 4) {
  const all = getWorkItems();
  const featured = all.filter((i) => i.featured);
  const pool = featured.length ? featured : all;
  // Category order (not date order), so the home grid reads as pairs per
  // category: Development, Events, Design & Content. Newest first within each.
  return WORK_CATEGORIES.flatMap((c) => pool.filter((i) => i.category === c.slug)).slice(0, limit);
}

export function getArticles() {
  return readCollection('thought-leadership');
}

export function getArticle(slug) {
  return getArticles().find((a) => a.slug === slug) || null;
}

export function getPage(name) {
  const abs = path.join(CONTENT_DIR, 'pages', `${name}.mdx`);
  if (!fs.existsSync(abs)) return null;
  const { data, content } = matter(fs.readFileSync(abs, 'utf8'));
  return { ...data, body: content };
}
