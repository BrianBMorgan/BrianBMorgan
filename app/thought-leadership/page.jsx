import { PageHeader, Section } from '@/components/Section';
import { ArticleCard } from '@/components/ArticleCard';
import { getArticles, readingTime } from '@/lib/content';

export const metadata = {
  title: 'Thought leadership',
  description: 'Essays on craft, systems, and building things that endure.',
};

export default function ThoughtLeadershipPage() {
  const articles = getArticles().map((a) => ({ ...a, minutes: readingTime(a.body) }));

  return (
    <>
      <div style={{ paddingTop: 'var(--space-9)' }}>
        <PageHeader
          eyebrow="Thought leadership"
          title="Notes from the practice"
          lede="Essays on craft, systems, and the quiet decisions that make work endure. Written slowly, published when ready."
        />
      </div>
      <Section style={{ paddingTop: 'var(--space-7)' }}>
        {articles.length ? (
          <div className="grid-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>
            Nothing published yet. Drop a file into <code>content/thought-leadership/</code> to
            add the first essay.
          </p>
        )}
      </Section>
    </>
  );
}
