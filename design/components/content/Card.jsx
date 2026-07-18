import React from 'react';

const variants = {
  paper: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' },
  sunken: { background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', boxShadow: 'none' },
  outline: { background: 'transparent', border: '1px solid var(--border-default)', boxShadow: 'none' },
  inverse: { background: 'var(--charcoal-900)', border: '1px solid var(--charcoal-700)', boxShadow: 'var(--shadow-md)', color: 'var(--text-on-dark)' },
};

const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-7)' };

/**
 * Card — the primary content container. Paper by default; hoverable lifts on
 * hover for clickable project tiles.
 */
export function Card({
  variant = 'paper',
  padding = 'md',
  hoverable = false,
  as = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      className={className}
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: pads[padding],
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...variants[variant],
        ...(hoverable && hover ? { boxShadow: 'var(--shadow-lg)', transform: 'translateY(-3px)', borderColor: 'var(--gold-400)' } : {}),
        ...(hoverable ? { cursor: 'pointer' } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
