import { Eyebrow, Stat, Tag } from '@/components/ds';
import { Section } from '@/components/Section';
import { ResumeDownloadButton } from '@/components/ResumeActions';
import { Mail, MapPin, ArrowUpRight } from '@/components/icons';
import { site } from '@/lib/site';
import { resume } from '@/lib/resume';
import { JsonLd } from '@/components/JsonLd';
import { abs, branded, breadcrumbLd, socialMeta } from '@/lib/seo';

const description = `The résumé of ${site.name} — ${resume.headline}. 15+ years across experiential strategy, event technology, and integrated marketing.`;

export const metadata = {
  title: 'Résumé',
  description,
  ...socialMeta({ title: branded('Résumé'), description, path: '/resume' }),
};

const resumeLd = [
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Résumé', path: '/resume' },
  ]),
];

const metaLink = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tracking-wide)',
  color: 'var(--text-muted)',
  textDecoration: 'none',
};

/** One role in the experience timeline. */
function ExperienceEntry({ entry }) {
  return (
    <article
      className="resume-entry"
      style={{
        paddingTop: 'var(--space-5)',
        marginTop: 'var(--space-5)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h3 style={{ fontSize: 'var(--text-lg)', margin: 0, letterSpacing: '-0.01em' }}>
            {entry.role}
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--weight-semibold)',
              color: 'var(--accent-primary)',
              marginTop: 2,
            }}
          >
            {entry.company}
            {entry.location && (
              <span style={{ color: 'var(--text-subtle)', fontWeight: 'var(--weight-regular)' }}>
                {'  ·  '}
                {entry.location}
              </span>
            )}
          </div>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-wide)',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.period}
        </span>
      </div>

      {entry.note && (
        <p
          style={{
            margin: '10px 0 0',
            fontSize: 'var(--text-sm)',
            fontStyle: 'italic',
            color: 'var(--text-muted)',
          }}
        >
          {entry.note}
        </p>
      )}

      {entry.bullets.length > 0 && (
        <ul
          style={{
            margin: '12px 0 0',
            paddingLeft: '1.15em',
            color: 'var(--text-body)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {entry.bullets.map((b) => (
            <li key={b} style={{ marginBottom: 'var(--space-2)' }}>
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

/** A titled block in the right rail. */
function RailBlock({ title, children }) {
  return (
    <div className="resume-rail-block" style={{ marginBottom: 'var(--space-7)' }}>
      <Eyebrow rule>{title}</Eyebrow>
      <div style={{ marginTop: 'var(--space-4)' }}>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <JsonLd data={resumeLd} />

      {/* Identity header — editorial rule, name, positioning, contact, download */}
      <Section style={{ paddingTop: 'var(--space-9)' }}>
        <div
          style={{
            borderTop: 'var(--border-rule) solid var(--charcoal-900)',
            paddingTop: 'var(--space-6)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <Eyebrow rule>Résumé</Eyebrow>
              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 3.25rem)',
                  letterSpacing: '-0.025em',
                  margin: '14px 0 10px',
                }}
              >
                {site.name}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--text-strong)',
                  margin: '0 0 4px',
                }}
              >
                {resume.headline}
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0 }}>
                {resume.subhead}
              </p>
            </div>
            <div className="no-print" style={{ flex: 'none' }}>
              <ResumeDownloadButton />
            </div>
          </div>

          {/* Contact meta row */}
          <div
            style={{
              display: 'flex',
              gap: 22,
              flexWrap: 'wrap',
              marginTop: 'var(--space-6)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <span style={metaLink}>
              <MapPin size={13} style={{ color: 'var(--accent-primary)' }} />
              {site.location}
            </span>
            <a href={`mailto:${site.email}`} style={metaLink} className="resume-metalink">
              <Mail size={13} style={{ color: 'var(--accent-primary)' }} />
              {site.email}
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={metaLink}
              className="resume-metalink"
            >
              <ArrowUpRight size={13} style={{ color: 'var(--accent-primary)' }} />
              LinkedIn
            </a>
            <a href={site.url} style={metaLink} className="resume-metalink">
              <ArrowUpRight size={13} style={{ color: 'var(--accent-primary)' }} />
              brianbmorgan.com
            </a>
          </div>
        </div>

        {/* Summary */}
        <p
          style={{
            marginTop: 'var(--space-6)',
            fontSize: 'var(--text-md)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--text-body)',
            maxWidth: '70ch',
          }}
        >
          {resume.summary}
        </p>

        {/* Stat strip */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            marginTop: 'var(--space-6)',
            paddingTop: 'var(--space-5)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {site.stats.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              label={s.label}
              accent={['var(--gold-600)', 'var(--charcoal-900)', 'var(--sage-700)'][i % 3]}
            />
          ))}
        </div>
      </Section>

      {/* Body — experience + rail */}
      <Section style={{ paddingTop: 'var(--space-9)' }}>
        <div className="detail-grid resume-body">
          <div>
            <Eyebrow rule>Experience</Eyebrow>
            <div style={{ marginTop: 'var(--space-3)' }}>
              {resume.experience.map((entry) => (
                <ExperienceEntry key={`${entry.company}-${entry.period}`} entry={entry} />
              ))}
            </div>
          </div>

          <aside className="resume-rail">
            <RailBlock title="Skills">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {resume.skills.map((s) => (
                  <Tag key={s} tone="sage" filled>
                    {s}
                  </Tag>
                ))}
              </div>
            </RailBlock>

            <RailBlock title="Education">
              {resume.education.map((e) => (
                <div key={e.school} style={{ marginBottom: 'var(--space-4)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 'var(--weight-semibold)',
                      color: 'var(--text-strong)',
                      fontSize: 'var(--text-base)',
                    }}
                  >
                    {e.school}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
                    {e.credential}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-2xs)',
                      letterSpacing: 'var(--tracking-wide)',
                      color: 'var(--text-muted)',
                      marginTop: 2,
                    }}
                  >
                    {e.period}
                  </div>
                </div>
              ))}
            </RailBlock>

            <RailBlock title="Languages">
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {resume.languages.map((l) => (
                  <Tag key={l} tone="neutral">
                    {l}
                  </Tag>
                ))}
              </div>
            </RailBlock>

            <RailBlock title="Certifications">
              {resume.certifications.map((c) => (
                <div key={c.name} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
                  {c.name}
                  <span style={{ color: 'var(--text-muted)' }}>{`  ·  ${c.year}`}</span>
                </div>
              ))}
            </RailBlock>
          </aside>
        </div>
      </Section>
    </>
  );
}
