# BIP: Bergel Institute Philosophy

A Vue 3 + Vite + Tailwind + daisyUI + PWA interview-demo app for the Bergel Institute follow-up interview.

## What this app already contains

- A practical claim-evaluation checklist
- Two flagship claim pages
- A 10-question scenario quiz
- A pilot-readiness / research participation flow
- Sensory training and weekly progression pages
- Science literacy, alternative modalities, health inquiry, AI literacy, community, references, and settings pages
- A reference-aware navigation model with return-path behavior

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes

- `base: './'` is set in `vite.config.ts` to reduce path issues in static hosting contexts.
- Font Awesome is loaded from a CDN in `index.html`.
- Journal entries and settings are stored locally in the browser for the demo.
- The GitHub Pages workflow is included in `.github/workflows/deploy.yml`.
