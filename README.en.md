<div align="center">

# Awesome Portfolio Template

**The modern, production-ready portfolio template for senior engineers and global developers.**

Built with Next.js 16 + Tailwind CSS v4 + Framer Motion — with i18n and dark mode out of the box.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[한국어](README.md) | [English](README.en.md)

[**Live Demo**](https://jihoon-gong.vercel.app) &nbsp;|&nbsp; [**Deploy Your Own**](#deploy)

<img src=".github/demo.gif" alt="Awesome Portfolio Template Demo - Dark mode, language switch, scroll animations" width="720" />

</div>

---

## Features

- **Internationalization (i18n)** — Built-in Korean/English support via `next-intl`. Add any language easily.
- **Dark / Light Mode** — System-preference-aware with smooth transitions via `next-themes`.
- **Framer Motion Animations** — Polished entrance animations, floating orbs, smooth scroll indicators.
- **Career Detail Pages** — Not just a flat list. Dedicated `/career` page with rich project narratives.
- **SEO Optimized** — JSON-LD structured data, Open Graph images, sitemap, robots.txt.
- **Fully Responsive** — Mobile-first with hamburger menu, optimized for all screen sizes.
- **One Config File** — Edit `src/config/site.ts` + data files. No need to touch component code.
- **Accessibility** — ARIA labels, keyboard navigation, focus management.
- **Performance** — LazyMotion, CSS keyframe animations, optimized fonts via `next/font`.

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, animated gradient orbs, CTA buttons |
| **About** | Bio, profile photo, skill badges |
| **Experience** | Work history timeline with company details |
| **Portfolio** | Career highlights with key achievements overview |
| **Career Detail** | Dedicated page with background, role, results, lessons per project |
| **Speaking** | Talks, lectures, community involvement |
| **Certified** | Certifications grouped by category + awards |
| **Projects** | Expandable project cards with tech tags |
| **Contact** | Social links (LinkedIn, GitHub, Blog, Email) |

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with CSS-variable theming |
| [next-intl](https://next-intl-docs.vercel.app/) | Internationalization |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/Light mode |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide Icons](https://lucide.dev/) | Icons |

---

## For LLM Agents

Fetch the installation guide and follow it:

```
curl -s https://raw.githubusercontent.com/zer0-kr/awesome-portfolio-template/main/docs/guide/installation.md
```

---

## Quick Start

### 1. Use This Template

Click the green **"Use this template"** button above, or:

```bash
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

### 2. Configure Your Site

Edit **`src/config/site.ts`** — this is the only config file you need:

```typescript
export const siteConfig = {
  url: "https://your-name.vercel.app",
  author: {
    name: { ko: "홍길동", en: "John Doe" },
    title: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },
  // ... SEO, navigation, section toggles
};
```

### 3. Add Your Content

Replace the sample data in **`src/data/`**:

| File | Content |
|---|---|
| `profile.ts` | Name, email, social links, education |
| `experience.ts` | Work history |
| `career-summary.ts` | Portfolio overview & key achievements |
| `career-detail.ts` | Detailed project narratives |
| `credentials.ts` | Certifications & awards |
| `speaking.ts` | Talks & community involvement |
| `projects.ts` | Side projects |

### 4. Update Translations

Edit **`src/messages/ko.json`** and **`src/messages/en.json`** for your preferred languages.

### 5. Add Your Photo

Replace **`public/profile.png`** with your profile photo.

---

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zer0-kr/awesome-portfolio-template)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zer0-kr/awesome-portfolio-template)

### Environment Variables (Optional)

```env
NEXT_PUBLIC_BASE_URL=https://your-portfolio.vercel.app
```

If not set, falls back to the value in `src/config/site.ts`.

---

## Customization

### Theme Colors

Edit the CSS variables in **`src/app/globals.css`**:

```css
@theme {
  --color-accent: #0ea5e9;           /* Primary accent */
  --color-accent-secondary: #10b981;  /* Secondary accent */
  --color-background: #fafafa;        /* Background */
  /* ... */
}
```

### Navigation

Control which sections appear and their order in `src/config/site.ts`:

```typescript
nav: ["about", "experience", "career-highlights", "projects", "contact"],
```

### Section Visibility

Toggle sections on/off:

```typescript
sections: {
  speaking: false,    // Hide speaking section
  certified: false,   // Hide certifications
},
```

---

## Project Structure

```
src/
├── config/
│   └── site.ts              # Site configuration (edit this!)
├── data/
│   ├── profile.ts           # Personal info
│   ├── experience.ts        # Work history
│   ├── career-summary.ts    # Portfolio highlights
│   ├── career-detail.ts     # Detailed narratives
│   ├── credentials.ts       # Certifications & awards
│   ├── speaking.ts          # Talks & community
│   └── projects.ts          # Side projects
├── messages/
│   ├── ko.json              # Korean translations
│   └── en.json              # English translations
├── components/
│   ├── sections/            # Page sections
│   ├── layout/              # Header, Footer
│   ├── ui/                  # Reusable components
│   └── seo/                 # JSON-LD, OG images
└── app/
    ├── globals.css           # Theme & global styles
    └── [locale]/
        ├── page.tsx          # Home page
        └── career/page.tsx   # Career detail page
```

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) — use it freely for personal and commercial projects.

---

<div align="center">

**If this template helped you, consider giving it a star!**

[![Star on GitHub](https://img.shields.io/github/stars/zer0-kr/awesome-portfolio-template?style=social)](https://github.com/zer0-kr/awesome-portfolio-template)

</div>
