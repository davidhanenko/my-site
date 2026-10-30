@AGENTS.md

# Portfolio site (davidhanenko.com)

Personal portfolio, rebuilt as a single Next.js app — no separate backend, no CMS.
Replaces the old stack in sibling folders (reference only, do not modify):
- `../frontend/` — old Next 12 + Apollo + styled-components UI (source for porting markup/animations)
- `../backend/` — old Strapi CMS, DB is dead; `.tmp/data.db` (SQLite) holds dev-era content
- `../placeholder/` — abandoned earlier attempt, ignore

## Status
Phase 1 (current): **placeholder** — static hero only (animated name, greeting, tech-logo bg, header links, footer).
Phase 2 (next): full rebuild in this same app — About, Projects (+ single project pages), Contact with a real
form (Server Action + email provider). Project content as MDX/TS in the repo.

## Commands
- `pnpm dev` — dev server
- `pnpm build` / `pnpm start` — production build/serve (page should stay `○ Static`)
- `pnpm lint`, `pnpm exec tsc --noEmit`

## Stack & layout
Next 16 App Router, React 19, TypeScript, Tailwind v4, pnpm. Path alias `@/*` → repo root.
- `content/` — all site copy and media URLs (`site.ts`). Edit content here, not in components.
- `components/<area>/` — UI; client components only where they need state/effects/browser APIs.
- `lib/animation.tsx` — context for "intro name animation finished"; header, greeting and bg wait on it.
- `app/globals.css` — Tailwind entry + `@theme` design tokens (colors, fonts, simple keyframes/animations).

## Conventions
- Code style follows the scaffold: double quotes, semicolons, named function components.
- Styling: Tailwind utilities by default. Choreographed multi-step keyframes go in a co-located
  `*.module.css` (see `components/home/name/Name.module.css`) rather than being forced into utilities.
- Media: images stay on the old Cloudinary account (`res.cloudinary.com/ddqehibx0`, allowed in
  `next.config.ts`). If URLs start failing, download into `public/` and update `content/`.

## Porting from ../frontend — gotchas
- Old root font-size was 62.5%; Tailwind assumes 16px. Convert old `rem` × 0.625.
- Old media queries are desktop-first (`max-width`). Port with `max-[600px]:` or mobile-first
  `min-[601px]:` — mind off-by-one vs Tailwind's `md` (768px inclusive).
- Tailwind v4 `scale-*`/`rotate-*`/`translate-*` set the standalone CSS properties, not `transform`;
  they stack with keyframes that animate `transform` (e.g. `scale-0` kept bg logos invisible).
- The Turbopack Tailwind loader rule in `next.config.ts` must target `globals.css` only; a `*.css`
  glob strips CSS-module class exports (styles become `{}`).
- The old site's Montserrat/Nunito never actually loaded (broken `@font-face`); here they're real via `next/font`.

## Verifying UI changes
The old live site (https://davidhanenko.com) is the visual reference while it's up. Compare with screenshots, e.g.
`npx playwright screenshot --channel chrome --viewport-size 1440,900 --wait-for-timeout 7000 <url> out.png`
at 1440, 768, 390 and 360 widths. The intro takes ~4s, background logos start ~2s after it.
