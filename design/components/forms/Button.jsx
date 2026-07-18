import React from 'react';

const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  letterSpacing: 'var(--tracking-snug)',
  transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
};

const sizes = {
  sm: { fontSize: 'var(--text-sm)', padding: '0 var(--space-3)', height: 34 },
  md: { fontSize: 'var(--text-sm)', padding: '0 var(--space-5)', height: 42 },
  lg: { fontSize: 'var(--text-md)', padding: '0 var(--space-6)', height: 52 },
};

const variants = {
  primary: { background: 'var(--gold-600)', color: 'var(--text-on-gold)', borderColor: 'var(--gold-600)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--charcoal-800)', borderColor: 'var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--charcoal-700)', borderColor: 'transparent' },
  inverse: { background: 'var(--charcoal-900)', color: 'var(--text-on-dark)', borderColor: 'var(--charcoal-900)' },
  link: { background: 'transparent', color: 'var(--link)', borderColor: 'transparent', padding: 0, height: 'auto' },
};

/**
 * Button — the primary call to action. Gold-primary leads; secondary is a
 * hairline-bordered paper button; ghost and link recede; inverse sits on
 * light sections.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as;

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--gold-700)', borderColor: 'var(--gold-700)' },
    secondary: { borderColor: 'var(--charcoal-500)', background: 'var(--parchment-50)' },
    ghost: { background: 'var(--parchment-200)' },
    inverse: { background: 'var(--charcoal-800)' },
    link: { color: 'var(--link-hover)' },
  }[variant] : {};

  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...hoverStyle,
    ...(fullWidth ? { width: '100%' } : {}),
    ...(active && !disabled && variant !== 'link' ? { transform: 'translateY(1px)' } : {}),
    ...(disabled ? { opacity: 0.45, cursor: 'not-allowed' } : {}),
    ...style,
  };

  return (
    <Tag
      className={className}
      style={composed}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
