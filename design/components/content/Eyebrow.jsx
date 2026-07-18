import React from 'react';

/**
 * Eyebrow — the monospaced, uppercase kicker used above headings throughout
 * the brand. Optionally prefixed by a short rule.
 */
export function Eyebrow({ rule = false, color = 'var(--accent-primary)', as = 'div', className = '', style = {}, children, ...rest }) {
  const Tag = as;
  return (
    <Tag className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase', color,
      ...style,
    }} {...rest}>
      {rule && <span style={{ width: 28, height: 2, background: 'currentColor', flex: 'none', opacity: 0.7 }} />}
      {children}
    </Tag>
  );
}
