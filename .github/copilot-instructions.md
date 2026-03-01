# Awesome Portfolio Template

Modern portfolio website template built with Next.js 16, Tailwind CSS v4, Framer Motion, next-intl (i18n), and next-themes (dark mode).

Users customize this template by editing configuration and data files. No need to touch component code for basic personalization.

## Architecture

```
src/
├── config/site.ts          # Central config: URL, author, social, nav, sections, SEO
├── data/                   # Content data (TypeScript, fully typed)
│   ├── profile.ts          # Bio, skills, tagline
│   ├── experience.ts       # Work history
│   ├── career-summary.ts   # Portfolio overview, key achievements
│   ├── career-detail.ts    # Deep-dive project narratives
│   ├── credentials.ts      # Certifications and awards
│   ├── speaking.ts         # Talks, lectures, community
│   └── projects.ts         # Side projects / OSS
├── messages/               # i18n translation files (ko.json, en.json)
├── components/
│   ├── sections/           # Page sections (hero, about, experience, etc.)
│   ├── layout/             # Header, Footer, MobileDrawer
│   ├── ui/                 # Reusable components
│   ├── seo/                # JSON-LD structured data
│   └── providers/          # Theme, i18n, LazyMotion providers
├── app/
│   ├── layout.tsx          # Root layout (metadata from siteConfig)
│   ├── [locale]/           # i18n routing (page.tsx, career/, opengraph-image.tsx)
│   ├── robots.ts           # Uses siteConfig.url
│   ├── sitemap.ts          # Uses siteConfig.url
│   └── globals.css         # Tailwind v4 + CSS custom properties
├── i18n/                   # Locale config (routing.ts, request.ts)
├── lib/                    # utils.ts (cn), date-utils.ts
└── middleware.ts            # next-intl middleware
```

## Customization

1. **Site config**: Edit `src/config/site.ts` (URL, author, social, nav, sections, SEO)
2. **Content**: Edit `src/data/*.ts` files — all text fields have `ko` and `en` variants
3. **UI strings**: Edit `src/messages/ko.json` and `en.json`
4. **Profile image**: Replace `public/profile.png`

## Conventions

- **Tailwind CSS v4**: `@import "tailwindcss"` (NOT `@tailwind`), NO `@apply`, use utility classes in JSX
- **Framer Motion**: ALWAYS use `m` import, NEVER `motion` — LazyMotion provider is active
- **i18n**: All user-facing text through `useTranslations()` or data file `ko`/`en` fields
- **Dark mode**: `dark:` Tailwind variants, system preference detection + manual toggle
- **TypeScript**: Strict mode, no `as any` / `@ts-ignore`
- **NavKey type**: Derived from `siteConfig.nav` for type-safe navigation

## Common Tasks

- **Add section**: Component in `src/components/sections/` → add to `page.tsx` → update `siteConfig.nav` + `siteConfig.sections` → add i18n keys
- **Add language**: Create `src/messages/{locale}.json` → update `routing.ts` + `middleware.ts` → add locale fields to data files
- **Remove section**: Set `false` in `siteConfig.sections`, remove from `siteConfig.nav`

## Anti-Patterns

- NEVER use `motion` — always `m` (LazyMotion)
- NEVER hardcode site URL or author info — use `siteConfig`
- NEVER use `@apply` in Tailwind v4
- NEVER suppress TypeScript errors with `as any`, `@ts-ignore`, `@ts-expect-error`
- NEVER skip i18n — all user-facing text must have ko/en variants
- NEVER put content directly in components — use `src/data/` files

## Commands

```bash
npm run dev      # Dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```
