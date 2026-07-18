import { WORK_CATEGORIES, getArticles, getWorkItems } from '@/lib/content';
import { site } from '@/lib/site';

// Required for `output: 'export'` (the GitHub Pages workflow builds in export mode).
export const dynamic = 'force-static';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/work', '/thought-leadership', '/contact'].map((p) => ({
    url: `${site.url}${p}`,
  }));
  const categoryRoutes = WORK_CATEGORIES.map((c) => ({ url: `${site.url}/work/${c.slug}` }));
  const workRoutes = getWorkItems().map((i) => ({
    url: `${site.url}/work/${i.category}/${i.slug}`,
    lastModified: new Date(i.date),
  }));
  const articleRoutes = getArticles().map((a) => ({
    url: `${site.url}/thought-leadership/${a.slug}`,
    lastModified: new Date(a.date),
  }));
  return [...staticRoutes, ...categoryRoutes, ...workRoutes, ...articleRoutes];
}
