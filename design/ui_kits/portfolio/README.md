# Portfolio — UI Kit

A high-fidelity, interactive recreation of Brian B. Morgan's professional portfolio landing page, composed entirely from the design system's primitives.

## Screens / sections
- **Nav.jsx** — sticky, blurred top bar: wordmark, section links, social `IconButton`s, gold "Hire me" CTA.
- **Hero.jsx** — editorial intro: mono eyebrow, serif headline with gold emphasis, availability `Badge`, `Stat` row.
- **Work.jsx** — `Work` (selected-work grid of `Card` tiles) + `ProjectDetail` (inline case-study view). Click a tile to open.
- **About.jsx** — dark charcoal band: portrait block, bio, skill `Tag`s, impact `Stat`s.
- **Contact.jsx** — validating contact form (`Input`/`Textarea`/`Select`/`Button`) with a success state.
- **Footer.jsx** — wordmark, nav echo, social icons, mono colophon.

## Interactions
Nav links smooth-scroll to sections; project tiles open a detail view and scroll to top; the contact form validates name/email and swaps to a thank-you panel on submit.

## Run
Open `index.html`. It loads React + Babel + Lucide + the compiled `_ds_bundle.js`, then mounts the sections (each registers itself on `window`). No real portrait/logo assets exist yet — placeholder colour blocks stand in; swap them for real imagery when available.

## Notes
- All icons are Lucide via CDN; no hand-rolled SVGs.
- Components come from `window.BrianBMorganDesignSystem_219fa3` — nothing is re-implemented here.
