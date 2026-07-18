// Footer — wordmark, nav echo, social icons, colophon.
const { IconButton, Icon, Eyebrow } = window.BrianBMorganDesignSystem_219fa3;

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--charcoal-900)', color: 'var(--text-on-dark-muted)', borderTop: '1px solid var(--charcoal-700)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, paddingBottom: 36, borderBottom: '1px solid var(--charcoal-700)' }}>
          <div style={{ maxWidth: 360 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--parchment-50)', letterSpacing: '-0.02em', marginBottom: 10 }}>Brian B. Morgan</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>Design engineer building considered products at the seam of craft and code.</p>
          </div>
          <div style={{ display: 'flex', gap: 64 }}>
            <div>
              <Eyebrow color="var(--gold-400)">Explore</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                {[['work', 'Work'], ['about', 'About'], ['contact', 'Contact']].map(([id, l]) => (
                  <button key={id} onClick={() => onNav(id)} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-sans)', fontSize: 15, padding: 0 }}>{l}</button>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow color="var(--gold-400)">Elsewhere</Eyebrow>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <IconButton label="GitHub" variant="inverse"><Icon name="github" size={18} /></IconButton>
                <IconButton label="LinkedIn" variant="inverse"><Icon name="linkedin" size={18} /></IconButton>
                <IconButton label="Email" variant="inverse"><Icon name="mail" size={18} /></IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>
          <span>© 2024 Brian B. Morgan</span>
          <span>Portland, OR · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
