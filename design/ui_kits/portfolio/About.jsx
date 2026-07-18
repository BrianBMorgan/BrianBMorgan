// About — dark editorial band with portrait, bio and client logos strip.
const { Eyebrow, Stat, Tag, Avatar, Icon } = window.BrianBMorganDesignSystem_219fa3;

function About() {
  const skills = ['Design systems', 'Product design', 'Brand identity', 'Front-end (React)', 'Motion', 'Art direction', 'Typography', 'Prototyping'];
  return (
    <section id="about" style={{ background: 'var(--charcoal-900)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 64, alignItems: 'start' }}>
          <div style={{ aspectRatio: '3/4', borderRadius: 14, background: 'linear-gradient(160deg, var(--gold-500), var(--rust-700))', display: 'flex', alignItems: 'flex-end', padding: 20, boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden' }}>
            <Icon name="user" size={110} color="rgba(0,0,0,0.15)" style={{ position: 'absolute', top: 26, right: 18 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--charcoal-900)' }}>Brian B. Morgan</span>
          </div>
          <div>
            <Eyebrow rule color="var(--gold-400)">About</Eyebrow>
            <h2 style={{ fontSize: 38, margin: '14px 0 20px', color: 'var(--parchment-50)', letterSpacing: '-0.02em' }}>
              A designer who codes, and a maker who cares about the last five percent.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-on-dark-muted)', maxWidth: '62ch' }}>
              I've spent twelve years helping teams turn ambitious ideas into products people trust. My work sits between disciplines — enough design sensibility to set direction, enough engineering to ship it — and I care most about the quiet details that make an interface feel considered.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '24px 0 34px' }}>
              {skills.map((s) => <Tag key={s} tone="sage" filled>{s}</Tag>)}
            </div>
            <div style={{ display: 'flex', gap: 48, borderTop: '1px solid var(--charcoal-700)', paddingTop: 26 }}>
              <Stat value="12" label="Years shipping" accent="var(--gold-400)" />
              <Stat value="40+" label="Projects delivered" accent="var(--parchment-100)" />
              <Stat value="9" label="Industries" accent="var(--sage-300)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
