import { Badge, Eyebrow, Stat } from '@/components/ds';
import { LinkButton } from '@/components/LinkButton';
import { ArrowRight } from '@/components/icons';
import { Section, SectionHeader } from '@/components/Section';
import { WorkCard } from '@/components/WorkCard';
import { ArticleCard } from '@/components/ArticleCard';
import { getArticles, getFeaturedWork, readingTime } from '@/lib/content';
import { site } from '@/lib/site';
import { socialMeta } from '@/lib/seo';

export const metadata = socialMeta({
  title: `${site.name} — ${site.role}`,
  description: site.description,
  path: '/',
});

export default function HomePage() {
  const featured = getFeaturedWork(6);
  const articles = getArticles()
    .slice(0, 3)
    .map((a) => ({ ...a, minutes: readingTime(a.body) }));

  return (
    <>
      {/* Hero */}
      <section
        className="container"
        style={{ paddingTop: 'clamp(48px, 9vw, 96px)', paddingBottom: 72 }}
      >
        <div className="hero-grid">
          <div>
            <Eyebrow rule>Portfolio · {new Date().getFullYear()}</Eyebrow>
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.25rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '18px 0 22px',
                color: 'var(--charcoal-900)',
              }}
            >
              I design and build
              <br />
              things that <em style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>endure</em>.
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.65,
                color: 'var(--text-body)',
                maxWidth: '48ch',
                margin: '0 0 28px',
              }}
            >
              {site.description}
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 34 }}>
              <LinkButton href="/work" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
                View selected work
              </LinkButton>
              <LinkButton href="/about" variant="secondary" size="lg">
                About me
              </LinkButton>
            </div>
            <Badge tone="success">{site.availability}</Badge>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              className="hero-card"
              style={{
                background: 'linear-gradient(160deg, var(--sage-500), var(--sage-700))',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ color: 'var(--parchment-50)' }}>
                <div className="bbm-eyebrow" style={{ color: 'inherit', opacity: 0.85 }}>
                  Based in
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600 }}>
                  {site.location}
                </div>
              </div>
            </div>
            <div className="hero-stats">
              {site.stats.map((s, i) => (
                <Stat
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  accent={[undefined, 'var(--gold-600)', 'var(--rust-600)'][i % 3]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <Section style={{ paddingTop: 'var(--space-8)' }}>
        <SectionHeader
          eyebrow="Selected work"
          title="Things I&rsquo;ve built"
          action={
            <LinkButton href="/work" variant="link" iconRight={<ArrowRight size={16} />}>
              All work
            </LinkButton>
          }
        />
        <div className="grid-2">
          {featured.map((item) => (
            <WorkCard key={`${item.category}/${item.slug}`} item={item} />
          ))}
        </div>
      </Section>

      {/* Latest writing */}
      <Section>
        <SectionHeader
          eyebrow="Thought leadership"
          title="Recent writing"
          action={
            <LinkButton href="/thought-leadership" variant="link" iconRight={<ArrowRight size={16} />}>
              All writing
            </LinkButton>
          }
        />
        <div className="grid-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      {/* Contact band */}
      <Section>
        <div
          style={{
            background: 'var(--charcoal-900)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 6vw, 4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div style={{ maxWidth: '46ch' }}>
            <Eyebrow color="var(--gold-400)">Contact</Eyebrow>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--parchment-50)',
                margin: '12px 0 10px',
                letterSpacing: '-0.02em',
              }}
            >
              Let&rsquo;s make something worth keeping.
            </h2>
            <p style={{ color: 'var(--text-on-dark-muted)', margin: 0, fontSize: 16, lineHeight: 1.6 }}>
              I take on a handful of projects each quarter. Tell me what you&rsquo;re building.
            </p>
          </div>
          <LinkButton href="/contact" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
            Start a conversation
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
