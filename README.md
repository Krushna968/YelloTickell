# YelloTickell Official Website

[![Next.js][next-badge]][next-url] [![React][react-badge]][react-url] [![TypeScript][ts-badge]][ts-url] [![Tailwind CSS][tw-badge]][tw-url] [![Vercel][vercel-badge]][vercel-url]

Live: https://yellow-tickell-official.vercel.app/

## Overview
YelloTickell Pvt Ltd’s marketing site built with Next.js App Router. It features a cinematic entry loader, modular homepage sections, a CSR page embedded via a secure proxy, and a reusable design system based on Tailwind + shadcn/ui.

## Tech Stack
- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS v4, PostCSS, CSS variables and theme tokens
- UI: shadcn/ui-style primitives (class-variance-authority), Radix UI, Lucide icons
- Animation: Framer Motion / motion, Embla Carousel (with autoplay)
- Images: next/image with permissive remote patterns
- Quality: ESLint (flat config)
- Hosting: Vercel

## Key Features
- Entry loader with brand logo and smooth slide transition
- Sectioned homepage (hero video, businesses carousel, sustainability stats, testimonials, CSR highlights, footer)
- Visual editing messenger for in-iframe authoring (postMessage-driven)
- CSR proxy route that safely embeds remote HTML and normalizes relative URLs
- Responsive, accessible UI primitives and themeable design tokens

## Architecture
- App shell: `src/app/layout.tsx` wraps pages with `ClientLayout`, sets SEO/OG/Twitter metadata, and loads GTM.
- Pages: `src/app` (e.g., `page.tsx`, `about-us/`, `csr/`, `careers/`, `contact-us/`).
- Sections: `src/components/sections/` (hero, carousel, stats, footer, etc.).
- UI primitives: `src/components/ui/` (e.g., `button.tsx`, `carousel.tsx`) using `cn` from `src/lib/utils.ts`.
- Visual edits: `src/visual-edits/VisualEditsMessenger.tsx` enables hover targeting, inline style previews, image swaps, and content edits via `postMessage`.
- Error telemetry: `src/components/ErrorReporter.tsx` + `src/app/global-error.tsx` to surface runtime and overlay errors.
- API proxy: `src/app/api/proxy/csr/route.ts` injects a `<base>` and CSP upgrade header to frame remote CSR content.

## Getting Started
- Install: `npm ci`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start (production): `npm start`
- Lint: `npm run lint`

Open http://localhost:3000 after starting the dev server.

## Conventions
- Path alias: `@/*` → `src/*` (see `tsconfig.json`).
- Tailwind tokens and CSS variables live in `src/app/globals.css`.
- next.config.ts allows remote images and ignores TS/ESLint errors during build (dev convenience).

## Deployment
Deployed on Vercel. Push to the default branch triggers a new build.

---

[next-badge]: https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org
[react-badge]: https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB
[react-url]: https://react.dev
[ts-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org
[tw-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white
[tw-url]: https://tailwindcss.com
[vercel-badge]: https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white
[vercel-url]: https://vercel.com

<!-- deploy: trigger 2025-10-30T15:48:15Z -->
