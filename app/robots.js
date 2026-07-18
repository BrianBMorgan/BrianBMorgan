import { site } from '@/lib/site';

// Required for `output: 'export'` (the GitHub Pages workflow builds in export mode).
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
