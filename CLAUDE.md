# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js, statically exported and deployed to GitHub Pages.

## Commands

```bash
yarn dev          # Start development server
yarn build        # Create static export (outputs to /out)
yarn lint         # Run ESLint
yarn deploy       # Build, create .nojekyll, and push to gh-pages branch
```

## Tech Stack

- **Next.js 16** with static export (`output: 'export'`)
- **React 19** with TypeScript 5
- **Tailwind CSS 4** with DaisyUI 5 component library
- **Sass** for additional styling
- **FontAwesome 7** for icons
- Node 21.7.3 / Yarn 1.22.22 (pinned via Volta)

## Architecture

```
/pages                    # Next.js pages with per-page layout pattern
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

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to `gh-pages` branch on push to main.
