import React from 'react';

const tones = {
  neutral: { dot: 'var(--charcoal-400)', text: 'var(--charcoal-600)' },
  success: { dot: 'var(--success)', text: 'var(--success)' },
  warning: { dot: 'var(--warning)', text: 'var(--warning)' },
  danger: { dot: 'var(--danger)', text: 'var(--danger)' },
  info: { dot: 'var(--info)', text: 'var(--info)' },
};

/**
 * Badge — a status marker with an optional leading dot. Use for availability,
 * project state ("Live", "Archived"), etc.
 */
export function Badge({ tone = 'neutral', dot = true, solid = false, className = '', style = {}, children, ...rest }) {
  const t = tones[tone];
  if (solid) {
    return (
      <span className={className} style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
        padding: '3px var(--space-3)', borderRadius: 'var(--radius-pill)',
        background: t.dot, color: 'var(--white)', ...style,
      }} {...rest}>{children}</span>
    );
  }
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
      color: t.text, ...style,
    }} {...rest}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot, flex: 'none' }} />}
      {children}
    </span>
  );
}
