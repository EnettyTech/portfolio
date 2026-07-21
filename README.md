# Portfolio — Nguyễn Hữu Thọ

One-page Vietnamese portfolio (Vite + React + Tailwind + Framer Motion), deployed on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173/portfolio/`).

## Build

```bash
npm run build
npm run preview
```

Default base path is `/portfolio/`. Override when needed:

```bash
VITE_BASE=/ npm run build
```

## Personal photo

Replace `public/avatar.svg` with your portrait as `public/avatar.jpg` (or `.webp`), then update `avatar` in `src/data/profile.ts`:

```ts
avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
```

## GitHub Pages

1. Push this repo to GitHub (repo name `portfolio` matches `VITE_BASE=/portfolio/`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Push to `main` — workflow `.github/workflows/deploy.yml` builds and publishes.

Site URL: `https://<username>.github.io/portfolio/`
