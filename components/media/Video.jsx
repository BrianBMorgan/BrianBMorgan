import { asset } from '@/lib/asset';

/**
 * Video for MDX bodies and case studies.
 * - Local file: <Video src="/videos/demo.mp4" poster="/images/demo-poster.jpg" />
 * - Hosted embed (YouTube/Vimeo embed URL): <Video embed="https://www.youtube.com/embed/…" />
 */
export function Video({ src, embed, poster, caption, title = 'Embedded video', style }) {
  return (
    <figure style={{ margin: 'var(--space-7) 0', ...style }}>
      {embed ? (
        <div
          style={{
            aspectRatio: '16/9',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--charcoal-900)',
          }}
        >
          <iframe
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>
      ) : (
        <video
          src={asset(src)}
          poster={asset(poster)}
          controls
          playsInline
          style={{
            width: '100%',
            display: 'block',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            background: 'var(--charcoal-900)',
          }}
        />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
