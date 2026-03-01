# Awesome Portfolio Template

See [AGENTS.md](./AGENTS.md) for full project overview, architecture, conventions, and customization guide.

## Claude-Specific Notes

- Use `m` from framer-motion, **never** `motion` — LazyMotion provider is active
- All metadata and SEO are driven by `src/config/site.ts` — never hardcode
- i18n is mandatory: every user-facing string goes through `useTranslations()` or data file `ko`/`en` fields
- Tailwind CSS v4: no `@apply`, no `@tailwind` directives, use `@import "tailwindcss"`
- When editing data files (`src/data/`), always update both `ko` and `en` fields

## Quick Reference

| Task | File(s) to Edit |
|------|----------------|
| Change name/title | `src/config/site.ts` + `src/messages/ko.json` + `src/messages/en.json` |
| Add work experience | `src/data/experience.ts` |
| Add certification | `src/data/credentials.ts` |
| Add project | `src/data/projects.ts` |
| Add talk/lecture | `src/data/speaking.ts` |
| Toggle section | `src/config/site.ts` → `sections` |
| Change social links | `src/config/site.ts` → `social` |
| Add a language | `src/messages/{locale}.json` + `src/i18n/routing.ts` + `src/middleware.ts` |
| Change theme colors | `src/app/globals.css` (CSS custom properties) |

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```
