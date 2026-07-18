import { Eyebrow } from '@/components/ds';

/** Editorial page header — top rule, mono eyebrow, serif display title, lede. */
export function PageHeader({ eyebrow, title, lede, children }) {
  return (
    <div
      className="container"
      style={{
        paddingTop: 'var(--space-9)',
        borderTop: 'var(--border-rule) solid var(--charcoal-900)',
      }}
    >
      {eyebrow && <Eyebrow rule>{eyebrow}</Eyebrow>}
      <h1
        style={{
          fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)',
          letterSpacing: '-0.025em',
          margin: '14px 0 18px',
          maxWidth: '22ch',
        }}
      >
        {title}
      </h1>
      {lede && (
        <p
          style={{
            fontSize: 'var(--text-md)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--text-body)',
            maxWidth: '52ch',
            margin: 0,
          }}
        >
          {lede}
        </p>
      )}
      {children}
    </div>
  );
}

/** In-page section header — rule on top, eyebrow + title left, optional action right. */
export function SectionHeader({ eyebrow, title, action }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        marginBottom: 34,
        borderTop: 'var(--border-rule) solid var(--charcoal-900)',
        paddingTop: 20,
      }}
    >
      <div>
        {eyebrow && <Eyebrow rule>{eyebrow}</Eyebrow>}
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', margin: '10px 0 0', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({ children, style }) {
  return (
    <section className="container" style={{ paddingTop: 'var(--space-10)', ...style }}>
      {children}
    </section>
  );
}
