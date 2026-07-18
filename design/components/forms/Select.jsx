import React from 'react';

/**
 * Select — labelled native dropdown styled to match the form family.
 * Pass options as [{value,label}] or plain strings.
 */
export function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)';
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={inputId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%',
            background: disabled ? 'var(--parchment-200)' : 'var(--surface-card)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-3) var(--space-7) var(--space-3) var(--space-4)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
            outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
            boxShadow: focus ? 'var(--focus-ring-shadow)' : 'none',
            transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span aria-hidden style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-subtle)', fontSize: 12 }}>▾</span>
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
