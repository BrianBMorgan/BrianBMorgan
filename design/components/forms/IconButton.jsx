import React from 'react';

const sizes = { sm: 34, md: 42, lg: 52 };

const variants = {
  primary: { background: 'var(--gold-600)', color: 'var(--text-on-gold)', borderColor: 'var(--gold-600)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--charcoal-800)', borderColor: 'var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--charcoal-600)', borderColor: 'transparent' },
  inverse: { background: 'var(--charcoal-900)', color: 'var(--text-on-dark)', borderColor: 'var(--charcoal-900)' },
};

/**
 * IconButton — a square, icon-only control for toolbars, cards and nav.
 * Pass a single Icon as children.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--gold-700)', borderColor: 'var(--gold-700)' },
    secondary: { borderColor: 'var(--charcoal-500)', background: 'var(--parchment-50)' },
    ghost: { background: 'var(--parchment-200)', color: 'var(--charcoal-800)' },
    inverse: { background: 'var(--charcoal-800)' },
  }[variant] : {};

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid transparent',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...variants[variant],
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
