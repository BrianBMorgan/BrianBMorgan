'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ds';
import { ArrowRight, ChevronDown, Menu, X } from '@/components/icons';
import { site } from '@/lib/site';

const WORK_LINKS = [
  ['/work', 'All work'],
  ['/work/development', 'Development'],
  ['/work/events', 'Events'],
  ['/work/design', 'Design & Content'],
];

const linkStyle = (active) => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 500,
  padding: '8px 14px',
  borderRadius: 'var(--radius-md)',
  textDecoration: 'none',
  color: active ? 'var(--charcoal-900)' : 'var(--charcoal-500)',
  background: active ? 'var(--parchment-200)' : 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  border: 'none',
  cursor: 'pointer',
  lineHeight: 1.4,
});

function WorkDropdown({ active }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        style={linkStyle(active)}
      >
        Work
        <ChevronDown
          size={14}
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform var(--dur-fast) var(--ease-standard)',
          }}
        />
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            paddingTop: 8,
            zIndex: 'var(--z-overlay)',
          }}
        >
          <div
            style={{
              minWidth: 180,
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              padding: 6,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {WORK_LINKS.map(([href, label], i) => (
              <React.Fragment key={href}>
                {i === 1 && (
                  <span
                    style={{
                      height: 1,
                      background: 'var(--border-subtle)',
                      margin: '4px 8px',
                    }}
                  />
                )}
                <Link href={href} onClick={() => setOpen(false)} style={linkStyle(false)}>
                  {label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        background: 'color-mix(in srgb, var(--parchment-100) 88%, transparent)',
        backdropFilter: 'var(--blur-panel)',
        WebkitBackdropFilter: 'var(--blur-panel)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container"
        style={{
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          className="plain-link"
          style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 22,
              color: 'var(--charcoal-900)',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            {site.name}
          </span>
          <span className="bbm-eyebrow" style={{ fontSize: 11, whiteSpace: 'nowrap' }}>
            {site.role}
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <Link href="/about" style={linkStyle(isActive('/about'))}>
            About
          </Link>
          <WorkDropdown active={isActive('/work')} />
          <Link href="/thought-leadership" style={linkStyle(isActive('/thought-leadership'))}>
            Thought leadership
          </Link>
          <Link href="/contact" style={linkStyle(isActive('/contact'))}>
            Contact
          </Link>
          <span
            style={{
              width: 1,
              height: 22,
              background: 'var(--border-default)',
              margin: '0 8px',
            }}
          />
          <Button
            as={Link}
            href="/contact"
            variant="primary"
            size="sm"
            iconRight={<ArrowRight size={15} />}
          >
            Let&apos;s talk
          </Button>
        </nav>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            background: 'none',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--charcoal-800)',
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Primary mobile"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--parchment-50)',
            padding: '12px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Link href="/about" style={linkStyle(isActive('/about'))}>
            About
          </Link>
          <span className="bbm-eyebrow" style={{ fontSize: 10, padding: '12px 14px 4px' }}>
            Work
          </span>
          {WORK_LINKS.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{ ...linkStyle(pathname === href), marginLeft: 10 }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/thought-leadership"
            style={linkStyle(isActive('/thought-leadership'))}
          >
            Thought leadership
          </Link>
          <Link href="/contact" style={linkStyle(isActive('/contact'))}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
