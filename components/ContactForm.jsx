'use client';
import React from 'react';
import { Button, Card, Input, Select, Textarea } from '@/components/ds';
import { Check, Send } from '@/components/icons';
import { site } from '@/lib/site';

/**
 * Contact form, no backend: submitting composes an email to site.email via a
 * mailto: link with the fields prefilled. Swap `submit` for a form service
 * (Formspree, Resend, a route handler) when one exists.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [kind, setKind] = React.useState('');
  const [brief, setBrief] = React.useState('');
  const [err, setErr] = React.useState(false);

  const submit = () => {
    if (!name || !email) {
      setErr(true);
      return;
    }
    setErr(false);
    const subject = `Project inquiry${kind ? ` — ${kind}` : ''}`;
    const body = [`From: ${name} <${email}>`, kind && `Project type: ${kind}`, '', brief]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Card variant="paper" padding="lg">
      {sent ? (
        <div style={{ textAlign: 'center', padding: '32px 12px' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'var(--sage-100)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 18,
            }}
          >
            <Check size={26} color="var(--sage-700)" />
          </div>
          <h3 style={{ fontSize: 26, margin: '0 0 8px' }}>Over to your email app</h3>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>
            Thanks, {name.split(' ')[0] || 'friend'}. A drafted message just opened. If it
            didn&apos;t, write me directly at {site.email}.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setSent(false);
              setName('');
              setEmail('');
              setBrief('');
            }}
          >
            Start another
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Input
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={err && !name ? 'Please add your name' : ''}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@studio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={err && !email ? 'Please add an email' : ''}
          />
          <Select
            label="Project type"
            placeholder="Select one"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            options={['Development', 'Design', 'Event', 'Advisory']}
          />
          <Textarea
            label="Brief"
            rows={4}
            placeholder="A sentence or two about the work…"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
          <Button variant="primary" size="lg" fullWidth iconRight={<Send size={17} />} onClick={submit}>
            Send message
          </Button>
        </div>
      )}
    </Card>
  );
}
