# Plastic Planet SA PWA

A Vue 3 + Vite + Tailwind + daisyUI + PWA starter app, organized in a Vitesse-style lightweight structure for a public-facing plastic value and citizen-science concept.

## What this app already includes

- Vue 3 app structure
- Tailwind CSS + daisyUI theme
- PWA support via `vite-plugin-pwa`
- GitHub Actions workflow for GitHub Pages deployment
- Starter content focused on:
  - plastic value and sorting
  - citizen science for plastic pollution
  - South Africa relevant cleanup links
  - free documentaries and videos

## Recommended naming

- Suggested GitHub org/account: `plastic-planet-africa`
- Suggested repository: `plastic-planet-sa-pwa`

These are clarity-based suggestions only. Check availability on GitHub before creating them.

## Why this direction fits your notes

This prototype is designed around the meeting idea of making plastics feel useful and visible rather than disposable. It combines:

- accessibility for the public and schools
- practical value framing
- citizen science / research potential
- South Africa and Global South relevance
- a free, GitHub-hosted starting point

## What I found about Refilwe Mofokeng

From public sources, Dr Refilwe Mofokeng is listed as a postdoctoral fellow at Stellenbosch University, with work connected to climate and environmental contamination, and she has public-facing activity around plastics, recycling, and the Plastic Planet podcast. Relevant public pages include Stellenbosch researcher profile and publications on microplastics / heavy metals.

## Free resources included in the app

The starter app links to public resources such as:

- The Ocean Cleanup
- World Oceans Day
- Ocean Conservancy
- Parley South Africa
- The Beach Co-op
- Clean-Up & Recycle SA Week
- Save a Fishie Coast 2 Coast
- PBS / YouTube free videos on ocean plastic pollution

## Deploy on GitHub Pages

### One-time GitHub setup

1. Create a GitHub repository.
2. Upload the contents of this zip to the repository root.
3. Push to the `main` branch.
4. In GitHub:
   - go to **Settings → Pages**
   - ensure **Build and deployment** is set to **GitHub Actions**
5. Push again if needed.

After that, the included workflow will:

- run `npm install`
- build the app
- deploy the generated `dist` folder to GitHub Pages

## Run locally in Codespaces or your own machine

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Commands you may need in Codespaces

```bash
npm install
npm run dev -- --host
```

If Codespaces prompts for a forwarded port, open the Vite port in the browser preview.

## Next features I would add

- image upload and classification placeholder
- map of local plastic hotspots
- CSV export for community cleanup events
- local recycler / buy-back lookup
- school mode with simple quizzes and badges
- multilingual support (English, isiXhosa, Afrikaans, isiZulu)

## Tech stack

- Vue 3
- Vite
- Tailwind CSS
- daisyUI
- Pinia
- VueUse
- vite-plugin-pwa
