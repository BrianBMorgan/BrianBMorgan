# Brian B. Morgan — Portfolio

Professional portfolio for Brian B. Morgan: About, Work (Development · Events · Design & Content), Thought Leadership, and Contact. Content-heavy by design, with no database — everything is files in the repo.

## Stack

- **Next.js 15** (App Router, plain JSX) + **React 19**
- **File-based content**: MDX files with frontmatter, read at build time (`gray-matter` + `next-mdx-remote`). Every page is statically generated.
- **Design system**: `design/` is the source of truth — tokens, primitives, and guidelines. The site imports `design/styles.css` (single CSS entry) and the React primitives via `components/ds.js`.
- **Icons**: `lucide-react` (the system's icon set). GitHub/LinkedIn marks live in `components/brand-icons.jsx` since Lucide 1.0 dropped brand icons.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also the pre-commit check)
npm run start   # serve the production build
```

## Editing content

No CMS, no database — add or edit files and commit.

| What | Where |
| --- | --- |
| Work project | `content/work/<development\|events\|design>/<slug>.mdx` |
| Essay | `content/thought-leadership/<slug>.mdx` |
| About page | `content/pages/about.mdx` |
| Name, email, socials, availability, KPI stats | `lib/site.js` |
| Work categories (labels, colors) | `lib/categories.js` |
| Images / videos | `public/images/…`, `public/videos/…` |

A work item's frontmatter:

```yaml
---
title: Forge Intelligence
kind: AI Platform             # eyebrow label; falls back to the category name
summary: One-sentence description used on cards and as the case-study lede.
date: 2026-07-18              # controls sort order (year is the display label)
year: '2025'
client: Intel                 # optional
role: 'Founder: product, design, and engineering'   # optional; quote if it contains a colon
status: Live                  # Live | Delivered | Archived …
featured: true                # surfaces it on the home page
tags: [AI, SaaS]
cover: /images/work/FI-landing.png   # optional; color field fallback without it
video: /videos/demo.mp4       # optional; replaces the cover with a player
link: https://forgeintelligence.ai   # optional "Visit" button
draft: true                   # optional; hides the file from every list
---
```

Inside any MDX body you can use `<Figure src caption />` and `<Video src poster caption />` (or `<Video embed="https://www.youtube.com/embed/…" />`) alongside regular Markdown.

## Structure

```
app/                  Routes (App Router)
  work/[category]/[slug]/   Case studies
  thought-leadership/[slug]/ Essays
components/           Site components built on the design system
lib/                  Content loader (fs) + pure helpers + site config
content/              All copy — work items, essays, pages
design/               Design system (tokens, primitives, guidelines) — source of truth
public/               Static assets (images, videos)
```

## Notes

- All work items, essays, and imagery are real. The remaining sample content is the contact facts in `lib/site.js` (email, url, socials, availability, stats) — its header comment marks what still needs real values.
- The contact form composes a `mailto:` draft (no backend). Swap `components/ContactForm.jsx` to a form service or route handler when one exists.
- Fonts load from Google Fonts via the design system's `tokens/fonts.css`; self-hosting via `next/font` is a sensible later optimization.
