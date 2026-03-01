# Awesome Portfolio Template

Modern portfolio website template built with Next.js 16, Tailwind CSS v4, Framer Motion, next-intl (i18n), and next-themes (dark mode).

Users customize this template by editing configuration and data files. No need to touch component code for basic personalization.

## Architecture

```
src/
├── config/site.ts          # Central config: URL, author, social, nav, sections, SEO
├── data/                   # Content data (TypeScript, fully typed)
│   ├── profile.ts          # Bio, skills, tagline
│   ├── experience.ts       # Work history (company, role, period, highlights, tags)
│   ├── career-summary.ts   # Portfolio overview, key achievements, competencies
│   ├── career-detail.ts    # Deep-dive project narratives (background, role, results, lessons)
│   ├── credentials.ts      # Certifications and awards
│   ├── speaking.ts         # Talks, lectures, community involvement
│   └── projects.ts         # Side projects / OSS
├── messages/               # i18n translation files
│   ├── ko.json             # Korean UI strings
│   └── en.json             # English UI strings
├── components/
│   ├── sections/           # Page sections (hero, about, experience, career-highlights, etc.)
│   ├── layout/             # Header, Footer, MobileDrawer
│   ├── ui/                 # Reusable UI components (section-heading, badge, scroll-to-top)
│   ├── seo/                # JSON-LD structured data
│   ├── providers/          # Theme, i18n, LazyMotion providers
│   └── error-boundary.tsx
├── app/
│   ├── layout.tsx          # Root layout (metadata from siteConfig)
│   ├── [locale]/           # i18n routing
│   │   ├── page.tsx        # Main portfolio page
│   │   ├── layout.tsx      # Locale layout with providers
│   │   ├── career/         # Career detail page (/career)
│   │   └── opengraph-image.tsx
│   ├── robots.ts           # Uses siteConfig.url
│   ├── sitemap.ts          # Uses siteConfig.url
│   └── globals.css         # Tailwind v4 + CSS custom properties
├── i18n/
│   ├── routing.ts          # Locale config (ko, en) with defaultLocale: "ko"
│   └── request.ts
├── lib/
│   ├── utils.ts            # cn() utility (clsx + tailwind-merge)
│   └── date-utils.ts
└── middleware.ts            # next-intl middleware
```

## How to Customize

### Step 1: Site Configuration

Edit `src/config/site.ts`:
- `url` — Production URL (also set via `NEXT_PUBLIC_BASE_URL` env var)
- `author` — Name (ko/en), title (ko/en), email
- `social` — GitHub, LinkedIn, blog URLs
- `nav` — Navigation items (controls header + mobile drawer)
- `sections` — Toggle sections on/off (set to `false` to hide)
- `seo` — Title template, default title, description, keywords
- `googleVerification` — Google Search Console verification code

### Step 2: Content Data

Edit files in `src/data/`:
- Each file exports typed arrays/objects
- All text fields have `ko` and `en` variants for i18n
- Dates use `"YYYY.MM."` format
- Tags are string arrays rendered as badges

### Step 3: UI Strings

Edit `src/messages/ko.json` and `src/messages/en.json`:
- `hero.name` — Display name on hero section
- `footer.copyright` — Copyright text
- Section headings, button labels, etc.

### Step 4: Profile Image

Replace `public/profile.png` with your own photo (used in About section and OG images).

## Tech Stack Conventions

### Tailwind CSS v4
- Uses `@import "tailwindcss"` in globals.css (NOT `@tailwind` directives)
- NO `@apply` — use utility classes directly in JSX
- Dark mode via CSS custom properties and `dark:` variants
- Use `cn()` from `src/lib/utils.ts` for conditional class merging

### Framer Motion (LazyMotion)
- **ALWAYS use `m` import, NEVER `motion`** — LazyMotion provider loads `domAnimation` features
- Provider is in `src/components/providers/lazy-motion-provider.tsx`
- Card entrance animations use `whileInView` with `viewport={{ once: true }}`
- Prefer CSS transitions for simple hover/focus effects (`transition-colors`, `transition-shadow`)
- Reserve Framer Motion for scroll-triggered entrance animations only

### next-intl (i18n)
- Default locale: `ko` (Korean), supported: `ko`, `en`
- Use `useTranslations("namespace")` in components
- Message keys are dot-notation: `hero.name`, `nav.about`, etc.
- Locale routing: `/ko/...` and `/en/...` with auto-redirect

### next-themes (Dark Mode)
- System preference detection + manual toggle
- Theme stored in cookie for SSR consistency
- Use `dark:` Tailwind variants for dark mode styles

### TypeScript
- Strict mode enabled
- All data files are fully typed with explicit interfaces
- `NavKey` type derived from `siteConfig.nav` for type-safe navigation

## Common Tasks

### Add a New Section
1. Create component in `src/components/sections/my-section.tsx`
2. Add data file `src/data/my-section.ts` if needed
3. Import and add to `src/app/[locale]/page.tsx`
4. Add `"my-section"` to `siteConfig.nav` array
5. Add `mySection: true` to `siteConfig.sections`
6. Add i18n keys to both `ko.json` and `en.json`

### Add a New Language
1. Create `src/messages/{locale}.json` (copy from `en.json`)
2. Update `src/i18n/routing.ts` — add locale to `locales` array
3. Update `src/middleware.ts` — add locale to matcher pattern
4. Add `{locale}` variant to all data file text fields
5. Update `siteConfig.author.name` and `siteConfig.author.title`

### Remove a Section
1. Set the section to `false` in `siteConfig.sections`
2. Remove its nav entry from `siteConfig.nav`
3. Optionally remove the component file and data file

### Modify Styling
- Global styles: `src/app/globals.css` (CSS custom properties for theming)
- Component styles: Tailwind utility classes directly in JSX
- Animations: Framer Motion variants in section components
- Fonts: Configured in `src/app/[locale]/layout.tsx` (Inter, JetBrains Mono via next/font, Pretendard via CDN)

## Anti-Patterns

- **NEVER** use `motion` — always `m` (LazyMotion)
- **NEVER** hardcode site URL or author info — use `siteConfig`
- **NEVER** use `@apply` in Tailwind v4
- **NEVER** suppress TypeScript errors with `as any`, `@ts-ignore`, `@ts-expect-error`
- **NEVER** use `transition-all` — be specific: `transition-colors`, `transition-shadow`, etc.
- **NEVER** skip i18n — all user-facing text must go through `useTranslations()` or data file `ko`/`en` fields
- **NEVER** put content directly in components — use `src/data/` files

## Build & Dev Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Deployment

- **Vercel** (recommended): Connect GitHub repo, auto-deploys on push
- **Netlify**: Deploy button available in README
- Set `NEXT_PUBLIC_BASE_URL` environment variable to your production URL
