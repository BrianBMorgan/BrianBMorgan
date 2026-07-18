# Working State

## Just shipped
- Next.js 15 site scaffold: About, Work (Development / Events / Design), Thought Leadership, Contact. File-based MDX content in `content/` — no database. All 22 routes statically generated; build verified green and pages screenshot-checked against the design system.
- `design/` — Brian B. Morgan design system (tokens, components, guidelines, UI kit). Consumed by the site via `design/styles.css` + `components/ds.js`.

## In flight
- Nothing.

## Next
- Replace sample content in `content/` and placeholder facts in `lib/site.js` (email, domain, socials, availability, stats) with real ones.
- Real imagery/video to replace the placeholder SVG covers; drop files in `public/`.
- Wire the contact form to a real backend (currently composes a mailto: draft).
- Later: self-host fonts with `next/font`; deploy target (Vercel per .gitignore) + custom domain.
