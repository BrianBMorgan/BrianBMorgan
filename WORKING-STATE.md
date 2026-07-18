# Working State

## Just shipped
- Contact form sends real email via Resend, verified end to end. The form POSTs to `/public/portfolio-contact` on the ForgeOS mailforge service (ForgeOS commit 4deac866); the relay sends from portfolio@sandbox-xm.com to brian@sandbox-xm.com with the visitor as reply-to, abuse-limited per submitted email + global caps, CORS pinned to the portfolio origins. A test submission returned {ok:true} and shows `delivered` in Resend. The form keeps a click-through mailto fallback if the relay is ever down.
- Intel Oasis case study is live (`content/work/design/intel-oasis.mdx`): the co-branded Intel × Lenovo identity for Tech World 2026, with both LED tile loops in `public/videos/` and a cover cut from the wall feed. Design & Content now has its 2 projects — the 2/2/2 pattern is complete.
- `lib/site.js` facts are now real: contact email brian@sandbox-xm.com; canonical url is the GitHub Pages address https://brianbmorgan.github.io/BrianBMorgan (drives sitemap/robots/metadata — swap when a custom domain lands). Stats, availability, LinkedIn, and location confirmed accurate as-is.
- Docs refresh: WORKING-STATE.md, README.md, and CLAUDE.md brought back in line with the repo (real content everywhere, Design & Content rename, removed references to a docs/ directory that doesn't exist).
- All site content is now real — zero fictional items or placeholder SVG covers remain. Work carries 2/2/1: Development (Forge Intelligence, SYSOI) and Events (Intel Pro Day, Intel House at Computex) are complete; Design & Content has Pitch Box (with embedded explainer video) and one more project to land. Thought Leadership has two real essays: "The Last Five Percent" and the SYSOI B2B event pipeline benchmarks.
- "Design" category renamed to "Design & Content"; nav and footer work links now derive from WORK_CATEGORIES.
- Mobile home-hero fixes (`.container` owns the hero's horizontal padding).
- Automerge workflow fix: the invalid thread-event trigger replaced with workflow_dispatch + a 15-minute cron sweep.
- GitHub Pages deploy is live and green: robots/sitemap declare force-static, plain `<img>`/`<video>` srcs are base-path aware via `lib/asset.js` + `NEXT_PUBLIC_BASE_PATH`. Build statically generates 20/20 pages.

## In flight
- Nothing.
- Wire the contact form to a real backend (currently composes a mailto: draft).
- Later: self-host fonts with `next/font`; settle the long-term deploy target (GitHub Pages today; Vercel + custom domain an option) and make `site.url` match whichever wins.
- Housekeeping candidates: prune ~32MB of unreferenced HiRes JPGs in `public/images/work/` (the web-sized derivatives are the ones the site uses); add a PR-time build check so automerge can't land a red build; delete the merged remote branches (`BrianBMorgan-patch-1`, `claude/brianbmorgan-design-folder-m8kg7w`).
