import '@/design/styles.css';
import './globals.css';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import { abs, personLd, websiteLd } from '@/lib/seo';

const defaultTitle = `${site.name} — ${site.role}`;
const ogImage = { url: abs('/images/og-default.png'), width: 1200, height: 630, alt: defaultTitle };

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    site.name,
    'experience design',
    'event production',
    'brand systems',
    'design systems',
    'content strategy',
    'creative direction',
    'Sandbox-XM',
    'Portland experience designer',
  ],
  // Sitewide social defaults; pages override title/description/canonical.
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    url: site.url,
    title: defaultTitle,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: site.description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[websiteLd(), personLd()]} />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
