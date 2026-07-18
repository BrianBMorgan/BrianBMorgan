import React from 'react';

/**
 * Textarea — labelled multi-line text field, matching Input's chrome.
 */
export function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)';

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          resize: 'vertical',
          background: disabled ? 'var(--parchment-200)' : 'var(--surface-card)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-3) var(--space-4)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
          lineHeight: 'var(--leading-normal)',
          outline: 'none',
          boxShadow: focus ? 'var(--focus-ring-shadow)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
