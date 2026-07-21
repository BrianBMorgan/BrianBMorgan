import { Badge, Eyebrow } from '@/components/ds';
import { Clock, Mail, MapPin } from '@/components/icons';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/site';
import { branded, socialMeta } from '@/lib/seo';

const description = `Start a project with ${site.name}. Available for select projects, replies within 48 hours.`;
export const metadata = {
  title: 'Contact',
  description,
  ...socialMeta({ title: branded('Contact'), description, path: '/contact' }),
};

const rows = [
  [Mail, site.email],
  [MapPin, site.location],
  [Clock, 'Replies within 48 hours'],
];

export default function ContactPage() {
  return (
    <section className="container" style={{ padding: '80px 32px 40px' }}>
      <div className="split-grid" style={{ alignItems: 'center' }}>
        <div>
          <Eyebrow rule>Contact</Eyebrow>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 2.9rem)',
              margin: '14px 0 18px',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
            }}
          >
            Let&rsquo;s make something worth keeping.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: 'var(--text-body)',
              maxWidth: '42ch',
              marginBottom: 28,
            }}
          >
            I take on a handful of projects each quarter. Tell me what you&rsquo;re building and
            I&rsquo;ll get back within two days.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
            {rows.map(([IconCmp, text]) => (
              <div
                key={text}
                style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-body)' }}
              >
                <IconCmp size={18} color="var(--gold-600)" />
                <span style={{ fontSize: 16 }}>{text}</span>
              </div>
            ))}
          </div>
          <Badge tone="success">{site.availability}</Badge>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
