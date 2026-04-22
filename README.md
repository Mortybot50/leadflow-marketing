# LeadFlow Marketing Site

Marketing site for LeadFlow — an AI sales agent for B2B teams.

- **Live:** https://leadflow-marketing.vercel.app
- **Target domain:** `getleadflow.com` (not yet purchased)
- **Stack:** Vite + React 19 + TypeScript (strict) + Tailwind CSS 4 + Framer Motion + react-router-dom v6

## Phase status

- [x] Phase 0 — Foundation (scaffold, tokens, brand, Vercel wiring, OG)
- [x] Phase 1 — Home page (hero through waitlist band, stub routes)
- [ ] Phase 2 — Content pages (how-it-works, pricing, about, contact real content)
- [ ] Phase 3 — Waitlist backend (Supabase + Resend)
- [ ] Phase 4 — SEO + SSG

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run lint       # eslint
npm run preview    # preview dist/
```

## Deploy

Auto-deploys to Vercel on push to `main` (framework: Vite, output: `dist`).

```bash
vercel --prod      # manual prod deploy
```

## Domain swap procedure (when `getleadflow.com` is purchased)

1. In Vercel dashboard → Project → Settings → Domains → add `getleadflow.com` and `www.getleadflow.com`.
2. Vercel will print DNS records (A `76.76.21.21` for apex + CNAME for www). Add them at the registrar.
3. Wait for SSL to provision (~1–5 min).
4. Set `getleadflow.com` as the primary domain in Vercel; `www` → 301 to apex.
5. Update these hardcoded references:
   - `index.html` — `og:url`, `og:image`, `twitter:image`
   - `public/robots.txt` — sitemap URL
   - `README.md` — live URL
6. Set up the `hello@` mailbox (Resend / Google Workspace) **before** shipping Phase 3.

## Repo conventions

- Commit author email must be `mortybot50@gmail.com` (Vercel team seat-block — see MEMORY.md Jordan lessons).
  ```bash
  git config user.email mortybot50@gmail.com
  ```
- Auto-deploys are scoped to `main`. Feature work belongs on branches.

## File layout

```
api/
  og.tsx                 — Vercel edge OG image generator
public/
  icon.svg, *.png        — brand icons + PNG fallbacks
  manifest.json          — PWA manifest
src/
  components/
    brand/Wordmark.tsx
    home/*.tsx           — Phase 1 home sections
    layout/{Header,Footer}.tsx
    ui/Button.tsx
    ErrorBoundary.tsx
  pages/
    Home.tsx, StubPage.tsx, NotFound.tsx
  styles/globals.css     — Tailwind 4 @theme tokens + fonts
  lib/utils.ts           — cn() helper
  main.tsx               — entry w/ Router + ErrorBoundary
  App.tsx                — routes
index.html               — OG/Twitter meta
vercel.json              — rewrites + cache headers
```

## Open decisions / gates before Phase 2

- Domain purchase (`getleadflow.com`) — Morty handles.
- Mailbox provisioning for `hello@getleadflow.com`.
- Real testimonial copy (current ones are placeholders marked in code comments).
- Hero demo Loom URL (placeholder modal in place).
