'use client';
import React from 'react';
import { Button, Card, Input, Select, Textarea } from '@/components/ds';
import { Check, Send } from '@/components/icons';
import { site } from '@/lib/site';

/**
 * Contact form. Submits to site.contactEndpoint (a public handler on the
 * ForgeOS mailforge service that relays via Resend). If the endpoint is
 * unreachable, falls back to composing a mailto: draft to site.email, so
 * the page keeps working without the backend.
 */
export function ContactForm() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | fallback
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [kind, setKind] = React.useState('');
  const [brief, setBrief] = React.useState('');
  const [company, setCompany] = React.useState(''); // honeypot — hidden from humans
  const [err, setErr] = React.useState(false);

  const reset = () => {
    setStatus('idle');
    setName('');
    setEmail('');
    setKind('');
    setBrief('');
    setCompany('');
    setErr(false);
  };

  // Used by the fallback screen as a real link: browsers block programmatic
  // mailto: navigation once the click's user-activation window has expired.
  const mailtoHref = () => {
    const subject = `Project inquiry${kind ? ` — ${kind}` : ''}`;
    const body = [`From: ${name} <${email}>`, kind && `Project type: ${kind}`, '', brief]
      .filter(Boolean)
      .join('\n');
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
  };

  const submit = async () => {
    if (!name || !email) {
      setErr(true);
      return;
    }
    setErr(false);
    setStatus('sending');
    try {
      const res = await fetch(site.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, kind, brief, company }),
        signal: typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(8000) : undefined,
      });
      if (!res.ok) throw new Error(`contact endpoint ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('fallback');
    }
  };

  const done = status === 'sent' || status === 'fallback';

  return (
    <Card variant="paper" padding="lg">
      {done ? (
        <div style={{ textAlign: 'center', padding: '32px 12px' }}>
          {status === 'sent' ? (
            <>
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
              <h3 style={{ fontSize: 26, margin: '0 0 8px' }}>Message sent</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>
                Thanks, {name.split(' ')[0] || 'friend'}. It&apos;s in my inbox and I&apos;ll
                reply to {email}.
              </p>
              <Button variant="secondary" onClick={reset}>
                Start another
              </Button>
            </>
          ) : (
            <>
              <h3 style={{ fontSize: 26, margin: '0 0 8px' }}>That didn&apos;t send</h3>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>
                The relay didn&apos;t respond, so nothing went out yet. Open a drafted email
                instead, or write me directly at {site.email}.
              </p>
              <div
                style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <Button as="a" href={mailtoHref()} variant="primary" iconRight={<Send size={16} />}>
                  Open email draft
                </Button>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                  Try again
                </Button>
              </div>
            </>
          )}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
        >
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
          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}
          >
            {/* Non-semantic name: Chrome ignores autocomplete="off" for address
                fields and would autofill an input named "company". */}
            <input
              type="text"
              name="pb_extra_field"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={status === 'sending'}
            iconRight={<Send size={17} />}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </Button>
        </form>
      )}
    </Card>
  );
}
