import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Tag } from '@/components/ds';
import { LinkButton } from '@/components/LinkButton';
import { ArrowLeft } from '@/components/icons';
import { mdxComponents } from '@/components/mdx-components';
import { JsonLd } from '@/components/JsonLd';
import { formatDate, getArticle, getArticles, readingTime } from '@/lib/content';
import { site } from '@/lib/site';
import { articleLd, branded, breadcrumbLd, faqLd, safeIsoString, socialMeta } from '@/lib/seo';

// Forge-published articles carry `source: forge`. Their bodies are rendered
// as plain markdown (format: 'md') so arbitrary prose — a stray "<" or "{" —
// can't be parsed as JSX and break the static build. Hand-written .mdx essays
// (no source flag) keep full MDX so their <Figure>/<Video> components work.
const mdxOptionsFor = (article) =>
  article.source === 'forge' ? { mdxOptions: { format: 'md' } } : undefined;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    ...socialMeta({
      title: branded(article.title),
      description: article.summary,
      path: `/thought-leadership/${slug}`,
      type: 'article',
      image: article.hero || undefined,
      publishedTime: safeIsoString(article.date),
    }),
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // FAQs (from Forge frontmatter) → FAQPage schema. The same Q&A is also
  // present in the rendered body, so the schema mirrors visible content.
  const faqs = Array.isArray(article.faqs)
    ? article.faqs.map((f) => ({ q: f.question, a: f.answer })).filter((f) => f.q && f.a)
    : [];

  return (
    <article
      className="container"
      style={{ maxWidth: 'calc(var(--container-narrow) + 64px)', paddingTop: 'var(--space-7)' }}
    >
      <JsonLd
        data={[
          articleLd(article),
          ...(faqs.length ? [faqLd(faqs)] : []),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Thought leadership', path: '/thought-leadership' },
            { name: article.title, path: `/thought-leadership/${article.slug}` },
          ]),
        ]}
      />
      <LinkButton
        href="/thought-leadership"
        variant="ghost"
        size="sm"
        iconLeft={<ArrowLeft size={16} />}
        style={{ marginBottom: 32 }}
      >
        All writing
      </LinkButton>

      <header
        style={{
          borderTop: 'var(--border-rule) solid var(--charcoal-900)',
          paddingTop: 'var(--space-5)',
          marginBottom: 'var(--space-7)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent-primary)',
            marginBottom: 14,
          }}
        >
          {formatDate(article.date)} · {readingTime(article.body)} min read
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.1rem, 5vw, 3rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
            margin: '0 0 16px',
          }}
        >
          {article.title}
        </h1>
        {article.summary && (
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-lg)',
              color: 'var(--text-body)',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '38ch',
            }}
          >
            {article.summary}
          </p>
        )}
      </header>

      {article.hero && (
        // Forge hero image (absolute CDN URL, so no base-path prefixing).
        <img
          src={article.hero}
          alt=""
          style={{
            width: '100%',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            margin: '0 0 var(--space-7)',
            display: 'block',
          }}
        />
      )}

      <div className="prose">
        <MDXRemote source={article.body} components={mdxComponents} options={mdxOptionsFor(article)} />
      </div>

      <footer
        style={{
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-5)',
          borderTop: '1px solid var(--border-default)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {(article.tags || []).map((t) => (
            <Tag key={t} tone="gold">
              {t}
            </Tag>
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
          — {site.name}
        </span>
      </footer>
    </article>
  );
}
