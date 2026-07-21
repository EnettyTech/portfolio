# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vietnamese one-page portfolio for Nguyễn Hữu Thọ (Vite + React + Tailwind + Framer Motion) deployable to GitHub Pages.

**Architecture:** Static SPA. All CV content lives in `src/data/profile.ts`. Section components compose into `App.tsx`. GitHub Actions publishes `dist/` with configurable `base`.

**Tech Stack:** Vite 6, React 19, TypeScript, Tailwind CSS 4, Framer Motion, GitHub Pages Actions.

## Global Constraints

- Language: Vietnamese copy only
- Visual: light editorial; display serif + body sans; single ink-blue accent; subtle grain; no purple gradients, no dark mode, no cards in hero
- Contact: display links only (`mailto:`, `tel:`, GitHub)
- No Docker
- Base path default: `/portfolio/` (override via `VITE_BASE`)
- Photo: `public/avatar.jpg` (placeholder SVG acceptable until real photo)

## File map

| Path | Responsibility |
| --- | --- |
| `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html` | Scaffold & GH Pages base |
| `src/index.css` | Tailwind + design tokens + grain |
| `src/data/profile.ts` | Typed CV content |
| `src/hooks/useActiveSection.ts` | Scroll spy for nav |
| `src/components/SectionReveal.tsx` | Shared enter animation |
| `src/components/Nav.tsx` | Sticky nav + mobile menu |
| `src/components/Hero.tsx` | Name, photo, role, CTAs |
| `src/components/About.tsx` | Career goal + education |
| `src/components/Skills.tsx` | Skill groups |
| `src/components/Experience.tsx` | Work timeline |
| `src/components/Projects.tsx` | Company + personal projects |
| `src/components/Contact.tsx` | Contact links |
| `src/components/Footer.tsx` | Footer |
| `src/App.tsx` | Compose sections |
| `src/main.tsx` | Entry |
| `public/avatar.svg` | Portrait placeholder |
| `.github/workflows/deploy.yml` | Pages deploy |
| `README.md` | Run & deploy notes |

---

### Task 1: Scaffold Vite + Tailwind + base config

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`, `.gitignore`

- [ ] **Step 1: Scaffold project with Vite React-TS**

Run:
```bash
npm create vite@latest . -- --template react-ts
npm install
npm install framer-motion
npm install -D @tailwindcss/vite tailwindcss
```

Expected: dependencies install; `npm run build` works after later steps.

- [ ] **Step 2: Configure Vite base + Tailwind plugin**

`vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE || '/portfolio/',
})
```

`src/index.css`:
```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap");

@theme {
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Source Sans 3", system-ui, sans-serif;
  --color-ink: #16324f;
  --color-accent: #1f6b5a;
  --color-paper: #f3f5f2;
  --color-muted: #5c6b73;
  --color-line: #d5ddd8;
}
```

- [ ] **Step 3: Verify dev server starts**

Run: `npm run dev`  
Expected: Vite ready on localhost.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite React Tailwind portfolio"
```

---

### Task 2: Profile data from CV

**Files:**
- Create: `src/data/profile.ts`

**Produces:**
- `export const profile` with `name`, `role`, `tagline`, `about`, `education`, `skills`, `experience`, `projects`, `contact`, `nav`

- [ ] **Step 1: Create typed profile object** with all CV fields (Vietnamese). Skills as `{ title, items }[]`. Experience as `{ company, role, period, bullets }[]`. Projects as `{ group, items: { name, tech, description }[] }[]`. Contact: email, phone, address, github.

- [ ] **Step 2: Commit**

```bash
git commit -m "feat: add CV profile data"
```

---

### Task 3: Shared motion + scroll spy + shell

**Files:**
- Create: `src/hooks/useActiveSection.ts`, `src/components/SectionReveal.tsx`, `src/components/Nav.tsx`, `src/components/Footer.tsx`

- [ ] **Step 1: Implement `useActiveSection(ids: string[])`** — IntersectionObserver, returns active id.
- [ ] **Step 2: Implement `SectionReveal`** — Framer Motion fade/slide up once in view.
- [ ] **Step 3: Implement sticky `Nav`** with active underline + mobile menu; links from `profile.nav`.
- [ ] **Step 4: Implement `Footer`**.
- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add nav, scroll spy, and section reveal"
```

---

### Task 4: Hero with photo

**Files:**
- Create: `src/components/Hero.tsx`, `public/avatar.svg`
- Modify: `src/App.tsx`

- [ ] **Step 1: Add SVG avatar placeholder** (initials “NHT”) until real photo.
- [ ] **Step 2: Build Hero** — full-bleed paper/grain plane; photo + name (display font, dominant); role; one sentence; CTAs to `#projects` and `#contact`. Desktop side-by-side; mobile stacked. No cards.
- [ ] **Step 3: Commit**

```bash
git commit -m "feat: add hero with portrait"
```

---

### Task 5: Content sections

**Files:**
- Create: `src/components/About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`
- Modify: `src/App.tsx`, `src/index.css`

- [ ] **Step 1: Build About** (goal + education).
- [ ] **Step 2: Build Skills** (grouped lists, not pill clusters as hero clutter — quiet typography rows).
- [ ] **Step 3: Build Experience** timeline (vertical on mobile).
- [ ] **Step 4: Build Projects** (company then personal; hover motion).
- [ ] **Step 5: Build Contact** (mailto, tel, github).
- [ ] **Step 6: Wire all in `App.tsx` with grain background.
- [ ] **Step 7: Commit**

```bash
git commit -m "feat: add about, skills, experience, projects, contact"
```

---

### Task 6: GitHub Pages deploy + README + verify

**Files:**
- Create: `.github/workflows/deploy.yml`, `README.md`
- Modify: `package.json` scripts if needed

- [ ] **Step 1: Add workflow** — checkout, setup-node, `npm ci`, `npm run build`, upload `dist`, deploy-pages. Set `VITE_BASE: /portfolio/`.
- [ ] **Step 2: README** — local run, base path, replace `avatar.svg` with photo, enable Pages (Actions).
- [ ] **Step 3: Run `npm run build`** — expect success, assets under `/portfolio/`.
- [ ] **Step 4: Commit**

```bash
git commit -m "ci: add GitHub Pages deploy workflow"
```

---

## Spec coverage check

- Vietnamese one-page ✓  
- Light editorial + photo in hero ✓  
- Sections order ✓  
- Contact display only ✓  
- GH Pages + no Docker ✓  
- Motion ✓  
- Responsive ✓
