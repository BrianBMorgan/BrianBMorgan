// Portfolio nav — sticky top bar with wordmark + links + CTA.
const { Button, IconButton, Icon } = window.BrianBMorganDesignSystem_219fa3;

function Nav({ current, onNav }) {
  const links = [['work', 'Work'], ['about', 'About'], ['writing', 'Writing'], ['contact', 'Contact']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'color-mix(in srgb, var(--parchment-100) 88%, transparent)',
      backdropFilter: 'var(--blur-panel)', WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('work'); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--charcoal-900)', letterSpacing: '-0.02em' }}>Brian B. Morgan</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-primary)' }}>Design Engineer</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => onNav(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
              padding: '8px 14px', borderRadius: 6,
              color: current === id ? 'var(--charcoal-900)' : 'var(--charcoal-500)',
            }}>{label}</button>
          ))}
          <span style={{ width: 1, height: 22, background: 'var(--border-default)', margin: '0 8px' }} />
          <IconButton label="GitHub" variant="ghost"><Icon name="github" size={19} /></IconButton>
          <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={15} />} onClick={() => onNav('contact')}>Hire me</Button>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
