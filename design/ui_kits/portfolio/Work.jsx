// Work — selected-work grid; clicking a project opens an inline detail view.
const { Card, Tag, Eyebrow, Button, Badge, Icon } = window.BrianBMorganDesignSystem_219fa3;

const PROJECTS = [
  { id: 'rivet', name: 'Rivet', kind: 'Brand & Design System', year: '2024', color: 'var(--blue-700)', accent: 'var(--blue-500)', tags: ['Design systems', 'Brand', 'React'], desc: 'Identity, tokens and a component library for a fintech infrastructure studio.', status: 'Live' },
  { id: 'foundry', name: 'Foundry OS', kind: 'Product Design', year: '2023', color: 'var(--charcoal-800)', accent: 'var(--gold-500)', tags: ['Product', 'Figma', 'Motion'], desc: 'End-to-end design for a developer operations platform used by 20k teams.', status: 'Live' },
  { id: 'meridian', name: 'Meridian', kind: 'Marketing Site', year: '2023', color: 'var(--sage-700)', accent: 'var(--sage-500)', tags: ['Web', 'Art direction'], desc: 'A restrained, typographic marketing site for a climate analytics firm.', status: 'Live' },
  { id: 'atlas', name: 'Atlas Field Guide', kind: 'Editorial / Print', year: '2022', color: 'var(--rust-700)', accent: 'var(--rust-500)', tags: ['Editorial', 'Print'], desc: 'A 120-page field guide pairing photography with a bespoke serif system.', status: 'Archived' },
];

function ProjectTile({ p, onOpen }) {
  return (
    <Card variant="paper" padding="none" hoverable onClick={() => onOpen(p)} style={{ overflow: 'hidden' }}>
      <div style={{ aspectRatio: '16/10', background: p.color, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
        <Icon name="square-dashed" size={90} color="rgba(255,255,255,0.12)" style={{ position: 'absolute', top: 18, right: 18 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--parchment-50)', letterSpacing: '-0.02em' }}>{p.name}</span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Eyebrow>{p.kind}</Eyebrow>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)' }}>{p.year}</span>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.55 }}>{p.desc}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {p.tags.map((t) => <Tag key={t} tone="neutral">{t}</Tag>)}
        </div>
      </div>
    </Card>
  );
}

function Work({ onOpen }) {
  return (
    <section id="work" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px 72px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 34, borderTop: '3px solid var(--charcoal-900)', paddingTop: 20 }}>
        <div>
          <Eyebrow rule>Selected Work</Eyebrow>
          <h2 style={{ fontSize: 40, margin: '10px 0 0', letterSpacing: '-0.02em' }}>Things I've built</h2>
        </div>
        <Button variant="link" iconRight={<Icon name="arrow-right" size={16} />}>All projects</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {PROJECTS.map((p) => <ProjectTile key={p.id} p={p} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function ProjectDetail({ p, onBack }) {
  return (
    <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 32px 80px' }}>
      <Button variant="ghost" size="sm" iconLeft={<Icon name="arrow-left" size={16} />} onClick={onBack} style={{ marginBottom: 24 }}>Back to work</Button>
      <div style={{ aspectRatio: '16/7', background: p.color, borderRadius: 14, display: 'flex', alignItems: 'flex-end', padding: 34, marginBottom: 32, position: 'relative', overflow: 'hidden' }}>
        <Icon name="square-dashed" size={160} color="rgba(255,255,255,0.10)" style={{ position: 'absolute', top: 24, right: 30 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600, color: 'var(--parchment-50)', letterSpacing: '-0.02em' }}>{p.name}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48 }}>
        <div>
          <Eyebrow rule>{p.kind}</Eyebrow>
          <h1 style={{ fontSize: 40, margin: '12px 0 18px' }}>{p.desc}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)' }}>
            The engagement spanned strategy, identity and a production-ready component library. We defined a token architecture, drew the type system, and shipped the first surfaces in eight weeks — then handed off documentation the team still uses today.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)' }}>
            The result reads as calm and deliberate: hairline rules, generous measure, and a restrained palette that lets the work carry the page.
          </p>
        </div>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Year</div><div style={{ fontSize: 16, color: 'var(--text-strong)' }}>{p.year}</div></div>
          <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Status</div><Badge tone={p.status === 'Live' ? 'success' : 'neutral'}>{p.status}</Badge></div>
          <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>Stack</div><div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{p.tags.map((t) => <Tag key={t} tone="gold">{t}</Tag>)}</div></div>
          <Button variant="secondary" iconRight={<Icon name="external-link" size={16} />}>Visit site</Button>
        </aside>
      </div>
    </section>
  );
}

window.Work = Work;
window.ProjectDetail = ProjectDetail;
window.PROJECTS = PROJECTS;
