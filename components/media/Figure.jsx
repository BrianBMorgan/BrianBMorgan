import { asset } from '@/lib/asset';

/** Image with an optional mono caption — for MDX bodies and case studies. */
export function Figure({ src, alt = '', caption, style }) {
  return (
    <figure style={{ margin: 'var(--space-7) 0', ...style }}>
      <img
        src={asset(src)}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
        }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
