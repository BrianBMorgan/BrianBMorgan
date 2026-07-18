// Contact — form that validates & shows a thank-you state on submit.
const { Card, Input, Textarea, Select, Button, Eyebrow, Badge, Icon } = window.BrianBMorganDesignSystem_219fa3;

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(false);

  const submit = () => {
    if (!name || !email) { setErr(true); return; }
    setErr(false); setSent(true);
  };

  return (
    <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px 96px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <Eyebrow rule>Contact</Eyebrow>
          <h2 style={{ fontSize: 46, margin: '14px 0 18px', letterSpacing: '-0.025em', lineHeight: 1.05 }}>Let's make something worth keeping.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: '42ch', marginBottom: 28 }}>
            I take on a handful of projects each quarter. Tell me what you're building and I'll get back within two days.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['mail', 'hello@brianmorgan.design'], ['map-pin', 'Portland, Oregon'], ['clock', 'Replies within 48 hours']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-body)' }}>
                <Icon name={ic} size={18} color="var(--gold-600)" />
                <span style={{ fontSize: 16 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <Card variant="paper" padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 12px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--sage-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name="check" size={26} color="var(--sage-700)" />
              </div>
              <h3 style={{ fontSize: 26, margin: '0 0 8px' }}>Message sent</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>Thanks, {name.split(' ')[0] || 'friend'} — I'll be in touch soon.</p>
              <Button variant="secondary" onClick={() => { setSent(false); setName(''); setEmail(''); }}>Send another</Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Input label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} error={err && !name ? 'Please add your name' : ''} />
              <Input label="Email" type="email" placeholder="you@studio.com" value={email} onChange={(e) => setEmail(e.target.value)} leadingIcon={<Icon name="mail" size={15} />} error={err && !email ? 'Please add an email' : ''} />
              <Select label="Project type" placeholder="Select one" options={['Design system', 'Product design', 'Brand & site', 'Advisory']} />
              <Textarea label="Brief" rows={4} placeholder="A sentence or two about the work…" />
              <Button variant="primary" size="lg" fullWidth iconRight={<Icon name="send" size={17} />} onClick={submit}>Send message</Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
window.Contact = Contact;
