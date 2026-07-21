// SEO/GEO helpers — Open Graph/Twitter metadata and JSON-LD structured data.
// Structured data uses stable @id references so the Person and WebSite defined
// sitewide (in the root layout) are the single canonical entities that every
// work item and article points back to as author/publisher.
import { site } from '@/lib/site';

export const PERSON_ID = `${site.url}/#person`;
export const WEBSITE_ID = `${site.url}/#website`;
const DEFAULT_OG = '/images/og-default.png';

// Absolute URL from a root-relative path. Pass-through for anything already
// absolute. OG images and canonicals must be absolute for crawlers.
export function abs(path) {
  if (!path) return undefined;
  return /^https?:\/\//.test(path) ? path : `${site.url}${path}`;
}

export const branded = (title) => `${title} — ${site.name}`;

// Social + canonical block to spread into a page's metadata. `title` is the
// full branded title (og:title does not inherit the <title> template).
export function socialMeta({ title, description, path = '/', type = 'website', image, publishedTime } = {}) {
  // The default OG card is a known 1200x630; custom covers vary, so we omit
  // dimension hints for them and let scrapers read the real size.
  const img = abs(image || DEFAULT_OG);
  const imageEntry = image
    ? { url: img, alt: title || site.name }
    : { url: img, width: 1200, height: 630, alt: `${site.name} — ${site.role}` };
  return {
    alternates: { canonical: path },
    openGraph: {
      type,
      url: abs(path),
      siteName: site.name,
      title,
      description,
      images: [imageEntry],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}

export function personLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    image: abs(DEFAULT_OG),
    email: `mailto:${site.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Portland',
      addressRegion: 'OR',
      addressCountry: 'US',
    },
    sameAs: [site.social.github, site.social.linkedin],
    knowsAbout: [
      'Experience design',
      'Event production',
      'Brand and design systems',
      'Content strategy',
      'Product design',
      'AI products',
    ],
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: branded(site.role),
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': PERSON_ID },
  };
}

// items: [{ name, path }] in order, root first.
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

const isoDate = (d) => new Date(d).toISOString().slice(0, 10);

export function workLd(item) {
  const url = abs(`/work/${item.category}/${item.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#work`,
    name: item.title,
    headline: item.title,
    description: item.summary,
    url,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    ...(item.cover ? { image: abs(item.cover) } : {}),
    ...(item.date ? { dateCreated: isoDate(item.date) } : {}),
    ...(item.client ? { sourceOrganization: { '@type': 'Organization', name: item.client } } : {}),
    ...(item.tags?.length ? { keywords: item.tags.join(', ') } : {}),
    ...(item.link ? { sameAs: item.link } : {}),
  };
}

export function articleLd(article) {
  const url = abs(`/thought-leadership/${article.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.summary,
    url,
    mainEntityOfPage: url,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    ...(article.date ? { datePublished: isoDate(article.date) } : {}),
    ...(article.tags?.length ? { keywords: article.tags.join(', ') } : {}),
    inLanguage: 'en-US',
  };
}
