'use client';
import Link from 'next/link';
import { Card, Tag } from '@/components/ds';
import { formatDate } from '@/lib/format';

/** Thought-leadership tile — mono dateline, serif title, summary, tags. */
export function ArticleCard({ article }) {
  return (
    <Link href={`/thought-leadership/${article.slug}`} className="plain-link" style={{ height: '100%' }}>
      <Card variant="paper" padding="lg" hoverable style={{ height: '100%' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 12,
          }}
        >
          {formatDate(article.date)}
          {article.minutes ? ` · ${article.minutes} min read` : ''}
        </div>
        <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 10px', letterSpacing: '-0.015em' }}>
          {article.title}
        </h3>
        <p style={{ margin: '0 0 16px', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.6 }}>
          {article.summary}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {(article.tags || []).map((t) => (
            <Tag key={t} tone="gold" size="sm">
              {t}
            </Tag>
          ))}
        </div>
      </Card>
    </Link>
  );
}
