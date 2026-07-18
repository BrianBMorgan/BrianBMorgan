import React from 'react';

const tones = {
  neutral: { background: 'var(--parchment-200)', color: 'var(--charcoal-700)', border: 'var(--border-subtle)' },
  gold: { background: 'var(--gold-200)', color: 'var(--gold-700)', border: 'var(--gold-400)' },
  sage: { background: 'var(--sage-100)', color: 'var(--sage-700)', border: 'var(--sage-300)' },
  rust: { background: 'var(--rust-100)', color: 'var(--rust-700)', border: 'var(--rust-300)' },
  blue: { background: 'var(--blue-100)', color: 'var(--blue-700)', border: 'var(--blue-300)' },
};

/**
 * Tag — a small pill for skills, tech stack, categories. Outline by default,
 * solid-tint when filled.
 */
export function Tag({ tone = 'neutral', filled = false, size = 'md', className = '', style = {}, children, ...rest }) {
  const t = tones[tone];
  const s = size === 'sm'
    ? { fontSize: 'var(--text-2xs)', padding: '2px var(--space-2)' }
    : { fontSize: 'var(--text-xs)', padding: '4px var(--space-3)' };
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
        fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${filled ? 'transparent' : t.border}`,
        background: filled ? t.background : 'transparent',
        color: t.color,
        ...s,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
