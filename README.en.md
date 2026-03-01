> [한국어로 보기](README.md)

<div align="center">

# Awesome Portfolio Template

**Clone. Configure. Deploy. Done in 5 minutes.**

Next.js 16 · Tailwind CSS v4 · TypeScript · Framer Motion

<br>

[**Live Demo**](https://jihoon-gong.vercel.app) &nbsp;&nbsp;&middot;&nbsp;&nbsp; [**Deploy Your Own**](#deploy)

<br>

<img src=".github/demo.gif" alt="Awesome Portfolio Template Demo - Dark mode, language switch, scroll animations" width="720" />

<br>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

<br>

<div align="center">
<strong>9 Sections</strong> &nbsp;&middot;&nbsp; <strong>2 Languages</strong> &nbsp;&middot;&nbsp; <strong>1 Config File</strong> &nbsp;&middot;&nbsp; <strong>0 Component Edits</strong>
</div>

<br>

---

## Why This Template?

There are hundreds of portfolio templates on GitHub, but almost none combine **Next.js + i18n + dark mode + a career detail page** in a single, polished package.

- **Career detail page** — Not just a timeline. A dedicated `/career` page where you walk through each project's background, role, results, and lessons. Senior engineers need this. Most templates don't have it.
- **i18n built in from the start** — Not bolted on afterward. Full URL routing (`/ko`, `/en`) via `next-intl` with Korean and English ready to go.
- **One config file to rule them all** — Edit `src/config/site.ts` and seven data files. You never need to touch component code.
- **Weeks of polish, ready in minutes** — Framer Motion animations, gradient orbs, smooth scroll indicators. The kind of quality that takes weeks to build from scratch.

---

## Features

<table>
<tr>
<td width="33%" valign="top">

**Internationalization (i18n)**

Built-in Korean/English via `next-intl`. Full URL routing with clean locale separation. Add any language easily.

</td>
<td width="33%" valign="top">

**Dark / Light Mode**

System-preference-aware. Manual toggle. Zero flash on load.

</td>
<td width="33%" valign="top">

**Career Detail Pages**

Dedicated `/career` page for rich project narratives: background, role, results, lessons. Essential for senior-level applications.

</td>
</tr>
<tr>
<td valign="top">

**Framer Motion**

Polished entrance animations, floating orbs, scroll indicators. Bundle stays lean with `LazyMotion`.

</td>
<td valign="top">

**SEO Optimized**

JSON-LD, auto-generated Open Graph images, sitemap, robots.txt included out of the box.

</td>
<td valign="top">

**Fully Responsive**

Mobile-first. Hamburger menu, touch-friendly, sharp on every screen size.

</td>
</tr>
<tr>
<td valign="top">

**One Config File**

Edit `site.ts` + 7 data files. No component code changes needed.

</td>
<td valign="top">

**Accessibility**

ARIA labels, keyboard navigation, focus management throughout.

</td>
<td valign="top">

**Performance**

LazyMotion, CSS keyframes, `next/font` optimization. High Lighthouse scores.

</td>
</tr>
</table>

---

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

---

## 🤖 Install with AI Agents

Using **Claude Code**, **Cursor**, **Windsurf**, **ChatGPT**, or another AI coding agent?

Feed the output of the command below to your agent — it will handle **cloning → collecting your info → customization → build → deployment** automatically.
You won't need to write a single line of code.

```bash
curl -s https://raw.githubusercontent.com/zer0-kr/awesome-portfolio-template/main/docs/guide/installation.md
```

> [!TIP]
> Tell your agent: _"Read the output of the command above and set up my portfolio"_
> 
> The guide includes a personal-info checklist, config file interfaces, and deploy commands — everything the agent needs to complete the job autonomously.

---

## Quick Start

```bash
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

> [!TIP]
> Or click the green **"Use this template"** button above.

Visit http://localhost:3000 to see the sample portfolio, then edit the following files.

### Configuration

| Step | File | Description |
|:---:|---|---|
| 1 | `src/config/site.ts` | Name, title, social links, SEO, section toggles |
| 2 | `src/data/*.ts` | Experience, projects, certifications, etc. (7 files) |
| 3 | `src/messages/ko.json`, `en.json` | UI text (name, bio, section labels) |
| 4 | `public/profile.png` | Profile photo (square, 400x400px minimum) |

<details>
<summary><strong>site.ts example</strong></summary>

```typescript
export const siteConfig = {
  url: "https://your-name.vercel.app",
  author: {
    name: { ko: "홍길동", en: "John Doe" },
    title: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
    email: "hello@example.com",
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    blog: "https://blog.example.com",
  },
  nav: ["about", "experience", "career-highlights", "projects", "contact"] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: false,       // Set to false to hide
    certified: true,
    projects: true,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | John Doe",
    defaultTitle: "John Doe | Software Engineer",
    description: "...",
    keywords: ["portfolio", "engineer"],
  },
  googleVerification: "",
};
```

</details>

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

> [!NOTE]
> If not set, falls back to the value in `src/config/site.ts`.

---

## Customization

<details>
<summary><strong>Theme Colors</strong></summary>

Edit the CSS variables in `src/app/globals.css`:

```css
@theme {
  --color-accent: #0ea5e9;           /* Primary accent */
  --color-accent-secondary: #10b981;  /* Secondary accent */
  --color-background: #fafafa;        /* Background */
}
```

</details>

<details>
<summary><strong>Navigation Order</strong></summary>

Reorder the array in `src/config/site.ts`:

```typescript
nav: ["about", "experience", "career-highlights", "projects", "contact"],
```

</details>

<details>
<summary><strong>Section Visibility</strong></summary>

```typescript
sections: {
  speaking: false,    // Hide speaking section
  certified: false,   // Hide certifications
},
```

Also remove the entry from the `nav` array to hide it from navigation.

</details>

---

## Project Structure

```
src/
├── config/
│   └── site.ts              # Site configuration (edit this!)
├── data/                     # Content data (7 files)
│   ├── profile.ts            # Personal info
│   ├── experience.ts         # Work history
│   ├── career-summary.ts     # Portfolio highlights
│   ├── career-detail.ts      # Detailed project narratives
│   ├── credentials.ts        # Certifications & awards
│   ├── speaking.ts           # Talks & community
│   └── projects.ts           # Side projects
├── messages/                 # i18n UI text
│   ├── ko.json
│   └── en.json
├── components/
│   ├── sections/             # Page section components
│   ├── layout/               # Header, Footer
│   └── ui/                   # Reusable UI components
└── app/
    └── [locale]/
        ├── page.tsx           # Home page
        └── career/page.tsx    # Career detail page
```

---

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

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) — use it freely for personal and commercial projects.

---

<div align="center">

**If this template helped you, consider giving it a star!**

[![Star on GitHub](https://img.shields.io/github/stars/zer0-kr/awesome-portfolio-template?style=social)](https://github.com/zer0-kr/awesome-portfolio-template)

</div>
