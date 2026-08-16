# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js, statically exported and deployed to GitHub Pages.

## Commands

```bash
yarn dev          # Start development server
yarn build        # Create static export (outputs to /out)
yarn lint         # Run ESLint
yarn format       # Format with Prettier
yarn deploy       # Manual path: build, create .nojekyll, git-subtree push to gh-pages branch
```

CI (`.github/workflows/deploy.yml`) deploys on push to `main`/`master` via the official
GitHub Pages Actions (`upload-pages-artifact` + `deploy-pages`) — it does NOT push to a
`gh-pages` branch. `yarn deploy` is a separate, manual legacy path.

## Tech Stack

- **Next.js 16** with static export (`output: 'export'`)
- **React 19** with TypeScript 6
- **Tailwind CSS 4** with DaisyUI 5 component library
- **Sass** for additional styling
- Hand-rolled inline-SVG icon components (`components/icons/`), no icon library
- Node 24.16.0 / Yarn 4.16.0 (Berry, via Corepack) — pinned via Volta

## Architecture

```
/pages                   # Next.js pages with per-page layout pattern
  ├── _app.tsx           # App wrapper implementing getLayout pattern
  └── index.tsx          # Homepage

/components
  ├── /layout            # Header, Footer, Main layout wrapper
  ├── /sections          # Hero, About, Experience, Skills, Contact
  ├── /icons             # Social icon link components
  ├── ScrollToTop.tsx    # Floating scroll button
  └── ThemeToggle.tsx    # Light/dark theme toggle

/styles/globals.css      # Tailwind config, DaisyUI themes, custom animations
```

## Key Patterns

**Per-page Layout**: Pages export a `getLayout` function consumed by `_app.tsx` (see `custom-types.d.ts` for type definition).

**Theming**: DaisyUI themes configured in `globals.css` - "portfolio" (light) and "business" (dark).

**Static Export**: Images use `unoptimized: true` in `next.config.js` for GitHub Pages compatibility.

**Pre-commit hooks**: Husky runs `lint-staged` (ESLint + Prettier on staged files) and
`tsc --noEmit` before every commit; commit messages must follow Conventional Commits
(enforced by commitlint).

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on push to `main`/`master`
and deploys via GitHub's native Pages deployment (Pages artifact upload, not a branch push).
