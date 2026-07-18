import React from 'react';

/**
 * Stat — a large serif figure over a monospaced label. Used in about/impact
 * sections ("12 yrs", "40+ projects").
 */
export function Stat({ value, label, sub, align = 'left', accent = 'var(--text-strong)', className = '', style = {}, ...rest }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', textAlign: align, ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-3xl)', lineHeight: 1, color: accent, letterSpacing: 'var(--tracking-tight)' }}>
        {value}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}
      </span>
      {sub && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{sub}</span>}
    </div>
  );
}
