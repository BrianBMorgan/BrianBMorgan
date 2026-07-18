# Working State

## Just shipped
- Docs refresh: WORKING-STATE.md, README.md, and CLAUDE.md brought back in line with the repo (real content everywhere, Design & Content rename, removed references to a docs/ directory that doesn't exist).
- All site content is now real — zero fictional items or placeholder SVG covers remain. Work carries 2/2/1: Development (Forge Intelligence, SYSOI) and Events (Intel Pro Day, Intel House at Computex) are complete; Design & Content has Pitch Box (with embedded explainer video) and one more project to land. Thought Leadership has two real essays: "The Last Five Percent" and the SYSOI B2B event pipeline benchmarks.
- "Design" category renamed to "Design & Content"; nav and footer work links now derive from WORK_CATEGORIES.
- Mobile home-hero fixes (`.container` owns the hero's horizontal padding).
- Automerge workflow fix: the invalid thread-event trigger replaced with workflow_dispatch + a 15-minute cron sweep.
- GitHub Pages deploy is live and green: robots/sitemap declare force-static, plain `<img>`/`<video>` srcs are base-path aware via `lib/asset.js` + `NEXT_PUBLIC_BASE_PATH`. Build statically generates 20/20 pages.

## In flight
- Nothing.

## Next
- Second Design & Content project, completing the 2/2/2 pattern.
- Replace the placeholder facts in `lib/site.js` with real ones — email, url, socials, availability, stats. The header comment in that file marks what's still sample content.
- Wire the contact form to a real backend (currently composes a mailto: draft).
- Later: self-host fonts with `next/font`; settle the long-term deploy target (GitHub Pages today; Vercel + custom domain an option) and make `site.url` match whichever wins.
- Housekeeping candidates: prune ~32MB of unreferenced HiRes JPGs in `public/images/work/` (the web-sized derivatives are the ones the site uses); add a PR-time build check so automerge can't land a red build; delete the merged remote branches (`BrianBMorgan-patch-1`, `claude/brianbmorgan-design-folder-m8kg7w`).
