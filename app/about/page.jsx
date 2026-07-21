import fs from 'node:fs';
import path from 'node:path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Eyebrow, Stat, Tag } from '@/components/ds';
import { LinkButton } from '@/components/LinkButton';
import { ArrowRight } from '@/components/icons';
import { Section } from '@/components/Section';
import { mdxComponents } from '@/components/mdx-components';
import { getPage } from '@/lib/content';
import { asset } from '@/lib/asset';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { PERSON_ID, abs, branded, breadcrumbLd, socialMeta } from '@/lib/seo';

const description = `Who ${site.name} is and how the work gets done.`;
export const metadata = {
  title: 'About',
  description,
  ...socialMeta({ title: branded('About'), description, path: '/about' }),
};

const aboutLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: abs('/about'),
    mainEntity: { '@id': PERSON_ID },
  },
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
];

// The headshot slots into the gradient card when a portrait file exists in
// public/images/ (checked at build time); until then the card stays as the
// plain gradient. Drop in portrait.jpg (or .png/.webp) to activate it.
function findPortrait() {
  for (const name of ['portrait.jpg', 'portrait.jpeg', 'portrait.png', 'portrait.webp']) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'images', name))) {
      return `/images/${name}`;
    }
  }
  return null;
}

export default function AboutPage() {
  const page = getPage('about');
  const portrait = findPortrait();

  return (
    <>
      <JsonLd data={aboutLd} />
      {/* Dark editorial band — portrait, bio, skills, stats */}
      <section style={{ background: 'var(--charcoal-900)', color: 'var(--text-on-dark)' }}>
        <div className="container" style={{ padding: '80px 32px' }}>
          <div className="about-grid">
            <div
              style={{
                aspectRatio: '3/4',
                borderRadius: 14,
                background: 'linear-gradient(160deg, var(--gold-500), var(--rust-700))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: 16,
                padding: 20,
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {portrait && (
                <img
                  src={asset(portrait)}
                  alt={`Portrait of ${site.name}`}
                  style={{
                    width: '100%',
                    flex: 1,
                    minHeight: 0,
                    objectFit: 'cover',
                    borderRadius: 8,
                    display: 'block',
                    boxShadow: 'var(--shadow-md)',
                  }}
                />
              )}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 600,
                  color: 'var(--charcoal-900)',
                }}
              >
                {site.name}
              </span>
            </div>
            <div>
              <Eyebrow rule color="var(--gold-400)">
                About
              </Eyebrow>
              <h1
                style={{
                  fontSize: 'clamp(1.9rem, 4vw, 2.4rem)',
                  margin: '14px 0 20px',
                  color: 'var(--parchment-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                {page.headline}
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-on-dark-muted)', maxWidth: '62ch' }}>
                {page.intro}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '24px 0 34px' }}>
                {(page.skills || []).map((s) => (
                  <Tag key={s} tone="sage" filled>
                    {s}
                  </Tag>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: 48,
                  flexWrap: 'wrap',
                  borderTop: '1px solid var(--charcoal-700)',
                  paddingTop: 26,
                }}
              >
                {site.stats.map((s, i) => (
                  <Stat
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    accent={['var(--gold-400)', 'var(--parchment-100)', 'var(--sage-300)'][i % 3]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The longer story — MDX body */}
      <Section>
        <Eyebrow rule>The longer story</Eyebrow>
        <div className="prose" style={{ marginTop: 'var(--space-5)' }}>
          <MDXRemote source={page.body} components={mdxComponents} />
        </div>
        <div style={{ marginTop: 'var(--space-7)', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <LinkButton href="/work" variant="primary" iconRight={<ArrowRight size={16} />}>
            See the work
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Get in touch
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
