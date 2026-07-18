# Brian B. Morgan — Design System

A warm, masculine, sophisticated design system for **Brian B. Morgan's professional portfolio**. It codifies the palette, typography, spacing, effects, reusable React components, and a full portfolio UI kit so any surface — site, deck, mock, or production build — reads as one confident, editorial voice.

> **The feeling:** tailored and literary. Parchment paper, brass-gold accents, ink-charcoal type, hairline rules, generous measure. Think a well-made field notebook, not a SaaS dashboard.

---

## Sources

This system was built **from scratch** against the brief for the portfolio. The provided GitHub repository was effectively empty (a stub README + working-state notes only), so no existing tokens, components, brand marks, or fonts were inherited.

- **GitHub:** https://github.com/BrianBMorgan/BrianBMorgan — the portfolio's home repo. Explore it for future context; at time of writing it contained only `README.md`, `CLAUDE.md`, and `WORKING-STATE.md` (no design assets). Re-check it as the portfolio grows.

If you have access to additional brand materials (a logo, real fonts, portrait/project photography), share them — see **Caveats** below for the two substitutions made in their absence.

---

## Content Fundamentals

How copy is written in this brand.

- **Voice:** first person, confident, understated. "I design and build things that endure." Brian speaks as himself ("I take on a handful of projects each quarter"), and addresses the reader directly ("Tell me what you're building").
- **Tone:** craft-forward and quietly assured — never salesy, never hype. Value is shown through specificity and restraint, not adjectives. Prefer hard facts ("twelve years", "40+ projects", "replies within 48 hours") over vague claims.
- **Casing:** Sentence case for headlines and body. **UPPERCASE only** for monospaced eyebrows/labels/tags (e.g. `SELECTED WORK`, `CASE STUDY`, `2024`). Never all-caps a full sentence.
- **Punctuation:** em dashes for editorial asides; the occasional italic for emphasis inside a serif headline (*endure*, *Morgan*).
- **Emoji:** none. This is a no-emoji system. Meaning is carried by type, rule lines, and Lucide icons.
- **Numerals:** written as digits when they're data or impact figures ("12 Years", "40+ Projects").
- **Vibe examples:**
  - Eyebrow → headline: `PORTFOLIO · 2024` → "I design and build things that endure."
  - Availability: "Available for select projects — Q3 2024"
  - CTA copy: "View selected work", "Let's make something worth keeping."

---

## Visual Foundations

- **Colors.** A six-family warm palette. **Parchment** (`#FBF7EE`→`#D3BF95`) grounds every surface. **Charcoal** (`#201D19`→`#B0A895`) is a *warm* near-black for ink and deep sections. **Gold** (brass, `#A9832C` — not yellow) is the single primary accent. **Sage** (muted olive), **Rust** (warm terracotta), and **Deep Blue** (cool anchor, also links/focus) are the supporting accents. Max one or two saturated colors per view; let paper and ink carry the rest. Reference **semantic aliases** (`--surface-page`, `--text-body`, `--accent-primary`, `--link`) in code, not raw scales.
- **Type.** Two families do the work. **Spectral** (a warm literary serif) for all display and headings, usually 600 with tight tracking (`-0.02em`); occasional italics for emphasis. **Archivo** (a sturdy grotesque sans) for UI and long-form body at 1.7 line-height. **IBM Plex Mono** for eyebrows, metadata, tags and code — always uppercase with wide tracking (`0.14em`) when used as a label. Serif + sans + mono is the signature contrast.
- **Spacing.** 4px base grid (`--space-1`=4 … `--space-12`=128). Layouts are generous and airy — wide gutters, long measure (prose capped ~42rem), plenty of vertical rhythm.
- **Backgrounds.** Flat parchment or flat charcoal — **no busy gradients or textures** in chrome. The *only* gradients used are subtle two-stop tonal fills inside portrait/project image placeholders (e.g. sage→deep-sage), standing in for real photography. Sections are full-bleed color bands (light parchment ↔ dark charcoal) separated by hairline or 3px editorial rules.
- **Borders & rules.** Hairline `1px` borders (`--border-subtle`/`--border-default`) everywhere; a heavier **3px charcoal rule** (`--border-rule`) tops major sections as an editorial device. Corner radii stay **tight** (2–10px for most UI, 16px for large media, pill only for badges/round icon buttons). This is a tailored system, not a bubbly one.
- **Shadows.** Warm-tinted (charcoal/brown base, never pure black), soft and low. Elevation is used sparingly — the system leans on borders and paper tone more than drop shadows. Scale `--shadow-xs`→`--shadow-xl`.
- **Hover states.** Buttons darken (gold→gold-700); secondary/ghost fill with a faint parchment tint; cards *lift* (translateY -3px + larger shadow + gold border) when `hoverable`; links shift to deep-blue-hover and gain a solid underline.
- **Press states.** Buttons nudge down 1px (`translateY(1px)`) — a small, physical acknowledgement. No scale-bounce.
- **Focus.** 2px deep-blue outline with a soft `--focus-ring-shadow` halo; visible and calm.
- **Motion.** Measured and confident — `120–320ms`, standard/out easing (`cubic-bezier`). Fades and short translations only; **no bounce, no spring, no long theatrical animation.**
- **Transparency & blur.** Reserved for the sticky nav: a translucent parchment bar with `backdrop-filter` blur. Otherwise surfaces are opaque.
- **Imagery vibe.** Warm and earthy. Where real photos aren't available, placeholders use the brand's own tonal color fills with a faint Lucide glyph — never stock imagery or clip-art.
- **Cards.** Paper white, 1px subtle border, small warm shadow, 10px radius. Variants: `paper` (default), `sunken` (parchment), `outline`, `inverse` (charcoal). Hover-lift is opt-in for clickable tiles.

---

## Iconography

- **Icon set:** **[Lucide](https://lucide.dev)** — the *only* icon system in this brand. Clean, consistent stroke icons at `1.75` stroke weight, matching the tailored/editorial feel.
- **Delivery:** loaded from CDN (`https://unpkg.com/lucide@latest`). The `Icon` component (`components/media/Icon.jsx`) is a thin wrapper that renders `<i data-lucide="name">` and lets Lucide hydrate it. Use kebab-case names (`arrow-up-right`, `github`, `map-pin`).
- **No emoji, ever.** No Unicode-glyph icons, no hand-rolled/approximated SVG icons. If a glyph is missing from Lucide, pick the nearest Lucide equivalent rather than drawing one.
- **Usage:** icons pair with mono labels and sit in `IconButton`s for social/toolbar actions. Keep them monochrome (`currentColor`) so they inherit text/accent color.
- **Substitution flag:** Lucide is a *chosen* set for this from-scratch system (no icon set was inherited from source). Swap it only deliberately.

---

## Index / Manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `thumbnail.html` — homepage tile (brand wordmark + swatch strip).
- `README.md` — this guide. · `SKILL.md` — Agent-Skills-compatible wrapper.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — Google Fonts import (Spectral, Archivo, IBM Plex Mono).
- `colors.css` — six color scales + semantic aliases.
- `typography.css` — families, scale, weights, tracking, roles.
- `spacing.css` — spacing grid, radii, borders, layout widths, z-index.
- `effects.css` — shadows, focus rings, motion (easings/durations), scrim/blur.
- `base.css` — light reset + element defaults + `.bbm-eyebrow` utility.

**`components/`** (React primitives — `window.BrianBMorganDesignSystem_219fa3`)
- `forms/` — **Button**, **IconButton**, **Input**, **Textarea**, **Select**
- `content/` — **Card**, **Tag**, **Badge**, **Eyebrow**, **Stat**
- `media/` — **Icon** (Lucide wrapper), **Avatar**

**`ui_kits/portfolio/`** — full interactive portfolio landing page (Nav, Hero, Work + ProjectDetail, About, Contact, Footer) composed from the primitives. See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Effects) shown in the Design System tab.

### Intentional additions
This is a from-scratch, brand-guidelines-driven system (no source component inventory), so a standard portfolio-appropriate set was authored. **Icon** is included as a wrapper for the Lucide glyph set. **Avatar**, **Stat**, and **Eyebrow** are included because the portfolio surfaces (author, impact strips, kickers) require them.

---

## Caveats & substitutions

1. **No logo / brand mark.** The source contained none. Wherever a mark would go, the name is set in Spectral type ("Brian B. Morgan"). **No logo was invented.** Provide one and it will be wired in.
2. **Fonts are Google Fonts substitutions.** No font files were supplied, so Spectral / Archivo / IBM Plex Mono were chosen (deliberately *unlike* Anthropic/Claude branding) and loaded from Google Fonts — there are no local `@font-face` binaries. Share licensed brand fonts to replace them.
3. **No real imagery.** Portrait and project images are tonal color-block placeholders. Swap in real photography when available.
