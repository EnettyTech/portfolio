# Portfolio Design — Nguyễn Hữu Thọ

**Date:** 2026-07-21  
**Status:** Approved  
**Source:** CV `Nguyen-Huu-Tho.pdf`

## Goal

Single-page Vietnamese portfolio for a Frontend & Mobile Developer (~8 years). Professional, smooth motion, strong responsive behavior. Deployed on GitHub Pages.

## Decisions

| Topic | Choice |
| --- | --- |
| Language | Vietnamese |
| Visual | Light editorial |
| Structure | One-page scroll |
| Contact | Display only (no form) |
| Stack | Vite + React + TypeScript + Tailwind CSS + Framer Motion |
| Deploy | GitHub Pages + GitHub Actions |
| Docker | Not used — local `npm`/`pnpm` only |
| Photo | Personal portrait in Hero (`public/avatar.jpg` or `.webp`) |

## Architecture

- Static SPA built with Vite; no backend, no API.
- Content as typed data in `src/data/profile.ts` (mapped from CV).
- GitHub Pages base path configurable (default `/portfolio/` for project pages; `/` for user site).
- Workflow: push `main` → build → publish `dist/`.

### Suggested structure

```
src/
  components/   # Nav, Hero, About, Skills, Experience, Projects, Contact, Footer
  data/         # profile.ts
  hooks/        # scroll spy for active nav
  App.tsx
  index.css
public/
  avatar.jpg    # personal photo
.github/workflows/deploy.yml
```

## Visual & layout

- Light background with subtle texture/grain; expressive display serif + clean body sans; single accent (ink blue or forest). Avoid purple gradients, default cream+terracotta tropes, and dark mode.
- **Hero (first viewport):** personal photo + brand name **NGUYỄN HỮU THỌ** as primary signal → short role → one supporting sentence → CTA group (Xem dự án / Liên hệ). No cards, no stats, no overlays on the photo.
- Photo: portrait beside name/role on desktop; stacked or compact beside on mobile. Not framed as a floating card.
- Sections in order: About → Skills → Experience (timeline) → Projects → Contact.
- Sticky nav with active section highlight; compact mobile menu.
- Motion (2–3 intentional): section enter fade/slide; nav underline; light project hover.
- Mobile-first responsive typography and stacked timeline on small screens.

## Content (from CV)

- **About:** career goal — Frontend & Mobile, zero-to-one, React Native / Flutter / Next.js, Gen Z to Web3.
- **Skills:** Frontend & Mobile · Backend (Node/Nest) · DevOps (Docker, GitHub Actions) · AI tooling · Integrations (Stripe, IAP, Firebase) · Domain (Blockchain, Fintech).
- **Experience:** Becen (12/2023–04/2026) → LaunchZone (05/2018–12/2023) → 3I internship (02/2017–04/2018).
- **Projects — company:** LZ Wallet, Sui Tracker, Ton Sale, Chipa.
- **Projects — personal:** Cook Note, Hydration Tracker & Smart Alarm.
- **Education:** HUCT (Hanoi University of Business and Technology), IT Bachelor, 2017.
- **Contact:** email `huu.tho.ns@gmail.com`, phone `09839384581`, address An Khánh, Hà Nội, GitHub `https://github.com/EnettyTech`. Links use `mailto:`, `tel:`, and external GitHub.

## Out of scope

- Contact form / email service
- Blog
- Multi-page project detail routes
- Docker / docker compose
- Dark mode / i18n switcher

## Success criteria

- Reads as one polished composition on first viewport (name + photo + role + one line + CTAs).
- Smooth scroll and section reveals without jank on mid-range devices.
- Usable and readable on mobile and desktop.
- Deploys cleanly to GitHub Pages with correct asset base path.
