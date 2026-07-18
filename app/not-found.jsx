import { Eyebrow } from '@/components/ds';
import { LinkButton } from '@/components/LinkButton';
import { ArrowLeft } from '@/components/icons';

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '120px 32px 80px', maxWidth: 720 }}>
      <Eyebrow rule>404</Eyebrow>
      <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', margin: '14px 0 16px', letterSpacing: '-0.025em' }}>
        This page slipped the binding.
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: '46ch', marginBottom: 28 }}>
        Whatever was here has moved, or never was. The work, the writing, and the way to reach me
        are all still where they should be.
      </p>
      <LinkButton href="/" variant="primary" iconLeft={<ArrowLeft size={16} />}>
        Back to the start
      </LinkButton>
    </section>
  );
}
