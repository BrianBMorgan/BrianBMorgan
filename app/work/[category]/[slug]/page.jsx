import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Badge, Button, Eyebrow, Tag } from '@/components/ds';
import { LinkButton } from '@/components/LinkButton';
import { ArrowLeft, ExternalLink } from '@/components/icons';
import { Video } from '@/components/media/Video';
import { mdxComponents } from '@/components/mdx-components';
import { WORK_CATEGORIES, getWorkCategory, getWorkItem, getWorkItems } from '@/lib/content';
import { asset } from '@/lib/asset';
import { JsonLd } from '@/components/JsonLd';
import { branded, breadcrumbLd, socialMeta, workLd } from '@/lib/seo';

export function generateStaticParams() {
  return WORK_CATEGORIES.flatMap((c) =>
    getWorkItems(c.slug).map((i) => ({ category: c.slug, slug: i.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const item = getWorkItem(category, slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    ...socialMeta({
      title: branded(item.title),
      description: item.summary,
      path: `/work/${category}/${slug}`,
      type: 'article',
      image: item.cover,
      publishedTime: item.date ? new Date(item.date).toISOString() : undefined,
    }),
  };
}

function MetaBlock({ label, children }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export default async function WorkItemPage({ params }) {
  const { category, slug } = await params;
  const cat = getWorkCategory(category);
  const item = cat && getWorkItem(category, slug);
  if (!item) notFound();

  return (
    <article className="container" style={{ maxWidth: 960, paddingTop: 'var(--space-7)' }}>
      <JsonLd
        data={[
          workLd({ ...item, category: cat.slug }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: cat.label, path: `/work/${cat.slug}` },
            { name: item.title, path: `/work/${cat.slug}/${item.slug}` },
          ]),
        ]}
      />
      <LinkButton
        href={`/work/${cat.slug}`}
        variant="ghost"
        size="sm"
        iconLeft={<ArrowLeft size={16} />}
        style={{ marginBottom: 24 }}
      >
        Back to {cat.label.toLowerCase()}
      </LinkButton>

      {/* Cover — image, video, or color field */}
      {item.video ? (
        <Video src={item.video} poster={item.cover} style={{ margin: '0 0 32px' }} />
      ) : (
        <div
          style={{
            aspectRatio: '16/7',
            background: item.cover ? 'var(--parchment-200)' : cat.color,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'flex-end',
            padding: item.cover ? 0 : 34,
            marginBottom: 32,
            overflow: 'hidden',
          }}
        >
          {item.cover ? (
            <img
              src={asset(item.cover)}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 600,
                color: 'var(--parchment-50)',
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </span>
          )}
        </div>
      )}

      <div className="detail-grid">
        <div>
          <Eyebrow rule>{item.kind || cat.label}</Eyebrow>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.5rem)', margin: '12px 0 18px' }}>
            {item.title}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-strong)', marginBottom: 24 }}>
            {item.summary}
          </p>
          <div className="prose">
            <MDXRemote source={item.body} components={mdxComponents} />
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {item.client && (
            <MetaBlock label="Client">
              <div style={{ fontSize: 16, color: 'var(--text-strong)' }}>{item.client}</div>
            </MetaBlock>
          )}
          {item.year && (
            <MetaBlock label="Year">
              <div style={{ fontSize: 16, color: 'var(--text-strong)' }}>{item.year}</div>
            </MetaBlock>
          )}
          {item.role && (
            <MetaBlock label="Role">
              <div style={{ fontSize: 16, color: 'var(--text-strong)' }}>{item.role}</div>
            </MetaBlock>
          )}
          {item.status && (
            <MetaBlock label="Status">
              <Badge tone={item.status === 'Live' ? 'success' : 'neutral'}>{item.status}</Badge>
            </MetaBlock>
          )}
          {item.tags?.length > 0 && (
            <MetaBlock label="Stack">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {item.tags.map((t) => (
                  <Tag key={t} tone="gold">
                    {t}
                  </Tag>
                ))}
              </div>
            </MetaBlock>
          )}
          {item.link && (
            <Button
              as="a"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              iconRight={<ExternalLink size={16} />}
            >
              Visit
            </Button>
          )}
        </aside>
      </div>
    </article>
  );
}
