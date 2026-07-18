import Link from 'next/link';
import { Card, Eyebrow } from '@/components/ds';
import { ArrowRight } from '@/components/icons';
import { PageHeader, Section, SectionHeader } from '@/components/Section';
import { WorkCard } from '@/components/WorkCard';
import { WORK_CATEGORIES, getWorkItems } from '@/lib/content';

export const metadata = {
  title: 'Work',
  description: 'Selected work across development, events, and design.',
};

export default function WorkIndexPage() {
  const byCategory = WORK_CATEGORIES.map((c) => ({
    ...c,
    items: getWorkItems(c.slug),
  }));

  return (
    <>
      <div style={{ paddingTop: 'var(--space-9)' }}>
        <PageHeader
          eyebrow="Selected work"
          title="Things I&rsquo;ve built, staged, and drawn"
          lede="The practice runs across three lanes — products shipped to production, rooms and gatherings produced end to end, and the identities and systems that hold it all together."
        />
      </div>

      {/* Category cards */}
      <Section style={{ paddingTop: 'var(--space-7)' }}>
        <div className="grid-3">
          {byCategory.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="plain-link">
              <Card variant="paper" padding="none" hoverable style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: 8, background: c.color }} />
                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}
                  >
                    <h2 style={{ fontSize: 'var(--text-lg)', margin: 0 }}>{c.label}</h2>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)' }}>
                      {c.items.length} {c.items.length === 1 ? 'project' : 'projects'}
                    </span>
                  </div>
                  <p style={{ margin: '0 0 14px', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.55 }}>
                    {c.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--link)',
                    }}
                  >
                    Browse {c.label.toLowerCase()} <ArrowRight size={15} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Everything, grouped */}
      {byCategory.map(
        (c) =>
          c.items.length > 0 && (
            <Section key={c.slug}>
              <SectionHeader
                eyebrow={c.label}
                title={c.label}
                action={
                  <Link
                    href={`/work/${c.slug}`}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600 }}
                  >
                    All {c.label.toLowerCase()}
                  </Link>
                }
              />
              <div className="grid-2">
                {c.items.map((item) => (
                  <WorkCard key={item.slug} item={item} />
                ))}
              </div>
            </Section>
          )
      )}
    </>
  );
}
