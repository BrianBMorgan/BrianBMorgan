import React from 'react';

const sizes = { sm: 32, md: 44, lg: 64, xl: 96 };

/**
 * Avatar — a circular portrait or monogram fallback. Warm parchment ring by
 * default; used for the author and testimonial faces.
 */
export function Avatar({ src, alt = '', name = '', size = 'md', ring = true, className = '', style = {}, ...rest }) {
  const d = sizes[size] || size;
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      className={className}
      style={{
        width: d, height: d, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', overflow: 'hidden',
        background: 'var(--sage-100)', color: 'var(--sage-700)',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
        fontSize: d * 0.4,
        border: ring ? '2px solid var(--parchment-50)' : 'none',
        boxShadow: ring ? 'var(--shadow-sm)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
