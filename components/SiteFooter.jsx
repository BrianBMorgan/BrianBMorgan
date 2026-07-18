'use client';
import Link from 'next/link';
import { Eyebrow, IconButton } from '@/components/ds';
import { Mail } from '@/components/icons';
import { GitHubMark, LinkedInMark } from '@/components/brand-icons';
import { WORK_CATEGORIES } from '@/lib/categories';
import { site } from '@/lib/site';

const colLink = {
  color: 'var(--text-on-dark-muted)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  textDecoration: 'none',
};

function FooterCol({ title, links }) {
  return (
    <div>
      <Eyebrow color="var(--gold-400)">{title}</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} style={colLink}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        background: 'var(--charcoal-900)',
        color: 'var(--text-on-dark-muted)',
        borderTop: '1px solid var(--charcoal-700)',
        marginTop: 'var(--space-11)',
      }}
    >
      <div className="container" style={{ padding: '56px 32px 40px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 40,
            paddingBottom: 36,
            borderBottom: '1px solid var(--charcoal-700)',
          }}
        >
          <div style={{ maxWidth: 360 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 24,
                color: 'var(--parchment-50)',
                letterSpacing: '-0.02em',
                marginBottom: 10,
              }}
            >
              {site.name}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>{site.description}</p>
          </div>
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            <FooterCol
              title="Explore"
              links={[
                ['/about', 'About'],
                ['/work', 'Work'],
                ['/thought-leadership', 'Thought leadership'],
                ['/contact', 'Contact'],
              ]}
            />
            <FooterCol
              title="Work"
              links={WORK_CATEGORIES.map((c) => [`/work/${c.slug}`, c.label])}
            />
            <div>
              <Eyebrow color="var(--gold-400)">Elsewhere</Eyebrow>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <a href={site.social.github} aria-label="GitHub">
                  <IconButton label="GitHub" variant="inverse">
                    <GitHubMark size={18} />
                  </IconButton>
                </a>
                <a href={site.social.linkedin} aria-label="LinkedIn">
                  <IconButton label="LinkedIn" variant="inverse">
                    <LinkedInMark size={18} />
                  </IconButton>
                </a>
                <a href={`mailto:${site.email}`} aria-label="Email">
                  <IconButton label="Email" variant="inverse">
                    <Mail size={18} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            paddingTop: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.04em',
          }}
        >
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.location} · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
