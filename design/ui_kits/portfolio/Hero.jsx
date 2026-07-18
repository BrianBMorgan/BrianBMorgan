// Hero — editorial intro with eyebrow, serif headline, availability badge, stats.
const { Button, Badge, Eyebrow, Stat, Tag, Icon } = window.BrianBMorganDesignSystem_219fa3;

function Hero({ onNav }) {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow rule>Portfolio · 2024</Eyebrow>
          <h1 style={{ fontSize: 68, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '18px 0 22px', color: 'var(--charcoal-900)' }}>
            I design and build<br />things that <em style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>endure</em>.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: '48ch', margin: '0 0 28px' }}>
            Design engineer with a decade of shipping considered products — from brand systems to the interfaces that carry them. Currently building at the seam of craft and code.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 34 }}>
            <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav('work')}>View selected work</Button>
            <Button variant="secondary" size="lg" iconLeft={<Icon name="download" size={17} />}>Résumé</Button>
          </div>
          <Badge tone="success">Available for select projects — Q3 2024</Badge>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 14, background: 'linear-gradient(160deg, var(--sage-500), var(--sage-700))', display: 'flex', alignItems: 'flex-end', padding: 22, boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
            <Icon name="user" size={120} color="rgba(255,255,255,0.16)" style={{ position: 'absolute', top: 24, right: 20 }} />
            <div style={{ color: 'var(--parchment-50)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.85 }}>Based in</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600 }}>Portland, OR</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px' }}>
            <Stat value="12" label="Years" />
            <Stat value="40+" label="Projects" accent="var(--gold-600)" />
            <Stat value="6" label="Awards" accent="var(--rust-600)" />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
