# Working State

## Just shipped
- Retired all 6 fictional work items and their placeholder SVG covers. Work now carries the 2/2/2 pattern: Development (Forge Intelligence, SYSOI) and Events (Intel Pro Day, Intel House at Computex) are real; Design shows its empty state until its 2 real projects land.
- Fixed the GitHub Pages deploy: robots/sitemap routes now declare force-static (the export-mode build was failing on them), and plain <img>/<video> srcs are base-path aware via lib/asset.js + the workflow passing NEXT_PUBLIC_BASE_PATH.
- Type change: Spectral (serif) replaced by Work Sans everywhere — font tokens, Google Fonts import, design docs/guidelines/manifest, and the placeholder SVG covers. `--font-serif` keeps its name as a legacy alias.
- Next.js 15 site scaffold: About, Work (Development / Events / Design), Thought Leadership, Contact. File-based MDX content in `content/` — no database. All 22 routes statically generated; build verified green and pages screenshot-checked against the design system.
- `design/` — Brian B. Morgan design system (tokens, components, guidelines, UI kit). Consumed by the site via `design/styles.css` + `components/ds.js`.

## In flight
- Nothing.

## Next
- Replace sample content in `content/` and placeholder facts in `lib/site.js` (email, domain, socials, availability, stats) with real ones.
- Real imagery/video to replace the placeholder SVG covers; drop files in `public/`.
- Wire the contact form to a real backend (currently composes a mailto: draft).
- Later: self-host fonts with `next/font`; deploy target (Vercel per .gitignore) + custom domain.
