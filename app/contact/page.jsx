import { Badge, Eyebrow } from '@/components/ds';
import { Clock, Mail, MapPin } from '@/components/icons';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import { branded, breadcrumbLd, faqLd, socialMeta } from '@/lib/seo';

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

// Grounded in the About page, the work taxonomy, and the real engagements.
// The answers below are rendered visibly AND emitted as FAQPage schema.
const faqs = [
  {
    q: 'What kind of work do you take on?',
    a: 'Three lanes: products and platforms built and shipped to production, events produced end to end, and brand and design systems with the content voice that carries them. Most engagements pull from more than one.',
  },
  {
    q: 'Are you taking on new projects?',
    a: `A handful each quarter, so the work gets full attention. Current status: ${site.availability}. Send a note and I'll tell you honestly where things stand.`,
  },
  {
    q: 'How soon will I hear back?',
    a: "Within 48 hours. If the fit is there, we'll set up a call to talk through scope and timing.",
  },
  {
    q: 'Where are you based, and do you work remotely?',
    a: 'The studio is in Portland, Oregon. I work embedded with small teams wherever the work is; recent events have run in New York, Las Vegas, and Taipei.',
  },
  {
    q: 'How do you work?',
    a: 'Small teams and direct lines, strategy before execution, and documentation as part of the deliverable. The details nobody budgets for, the last five percent, are the ones people remember.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          faqLd(faqs),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
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

      {/* FAQ — visible Q&A that mirrors the FAQPage structured data */}
      <section className="container" style={{ padding: '8px 32px 88px' }}>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow rule>Questions</Eyebrow>
          <dl style={{ margin: 'var(--space-6) 0 0' }}>
            {faqs.map((item, i) => (
              <div
                key={item.q}
                style={{
                  padding: 'var(--space-5) 0',
                  borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)',
                }}
              >
                <dt
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 19,
                    fontWeight: 600,
                    color: 'var(--charcoal-900)',
                    margin: '0 0 8px',
                  }}
                >
                  {item.q}
                </dt>
                <dd style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)' }}>
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
