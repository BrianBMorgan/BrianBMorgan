'use client';
import Link from 'next/link';
import { Card, Eyebrow, Tag } from '@/components/ds';
import { getWorkCategory } from '@/lib/categories';

/**
 * Work tile — cover image when the item has one, otherwise a color field in
 * the category's hue with the serif title (the design system's placeholder
 * pattern until real imagery lands).
 */
export function WorkCard({ item }) {
  const category = getWorkCategory(item.category);
  return (
    <Link href={`/work/${item.category}/${item.slug}`} className="plain-link">
      <Card variant="paper" padding="none" hoverable style={{ overflow: 'hidden', height: '100%' }}>
        <div
          style={{
            aspectRatio: '16/10',
            background: item.cover ? 'var(--parchment-200)' : category?.color,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            padding: item.cover ? 0 : 20,
            overflow: 'hidden',
          }}
        >
          {item.cover ? (
            <img
              src={item.cover}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 30,
                fontWeight: 600,
                color: 'var(--parchment-50)',
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </span>
          )}
        </div>
        <div style={{ padding: 22 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Eyebrow>{item.kind || category?.label}</Eyebrow>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)' }}>
              {item.year}
            </span>
          </div>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.55 }}>
            {item.summary}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(item.tags || []).map((t) => (
              <Tag key={t} tone="neutral">
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
