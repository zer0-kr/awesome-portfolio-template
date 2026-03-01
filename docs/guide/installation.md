# Awesome Portfolio Template — Installation & Setup Guide

This guide walks you through setting up your own portfolio from this template.
Follow each step in order. By the end, you'll have a fully personalized portfolio deployed to production.

## Prerequisites

- Node.js 18+ and npm
- Git
- A GitHub account
- (Optional) A Vercel or Netlify account for deployment

## Step 1: Create Your Repository

Clone the template and set up your own repo:

```bash
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio
rm -rf .git
git init
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
```

Or use the GitHub "Use this template" button to create a new repo directly.

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Your Site

Edit `src/config/site.ts` — this is the central configuration file:

```typescript
export const siteConfig = {
  url: "https://your-name.vercel.app",      // Your production URL
  author: {
    name: { ko: "홍길동", en: "John Doe" }, // Your name (Korean, English)
    title: { ko: "소프트웨어 엔지니어", en: "Software Engineer" }, // Your job title
    email: "hello@example.com",
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    blog: "https://blog.example.com",
  },
  nav: [
    "about", "experience", "career-highlights",
    "speaking", "certified", "projects", "contact",
  ] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: true,        // Set to false to hide sections you don't need
    certified: true,
    projects: true,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | John Doe",
    defaultTitle: "John Doe | Software Engineer",
    description: "Personal portfolio showcasing my professional experience.",
    keywords: ["portfolio", "software engineer", "developer"],
  },
  googleVerification: "",  // Google Search Console verification code (optional)
};
```

## Step 4: Add Your Content

Replace the sample data in `src/data/` with your own information:

| File | What to Edit |
|------|-------------|
| `profile.ts` | Your bio, education, skills, tagline |
| `experience.ts` | Work history — company, role, period, highlights, tags |
| `career-summary.ts` | Portfolio overview, key achievements, core competencies |
| `career-detail.ts` | Detailed project narratives (background, role, results, lessons) |
| `credentials.ts` | Certifications and awards |
| `speaking.ts` | Talks, lectures, community involvement |
| `projects.ts` | Side projects and open-source contributions |

All text fields support internationalization with `ko` (Korean) and `en` (English) variants:

```typescript
// Example from experience.ts
{
  company: { ko: "회사이름", en: "Company Name" },
  role: { ko: "시니어 엔지니어", en: "Senior Engineer" },
  // ...
}
```

## Step 5: Update Translations

Edit the UI string files for each language:

- `src/messages/ko.json` — Korean UI strings
- `src/messages/en.json` — English UI strings

Key fields to update:
- `hero.name` — Your display name on the hero section
- `footer.copyright` — Copyright text

## Step 6: Add Your Profile Photo

Replace `public/profile.png` with your own photo. This image is used in:
- The About section
- Open Graph (social sharing) images

Recommended: square image, at least 400x400px.

## Step 7: Set Up Environment Variables

Copy the example env file:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://your-name.vercel.app
```

## Step 8: Verify Locally

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- [ ] Your name and title appear correctly
- [ ] All sections display your content
- [ ] Language switching works (Korean ↔ English)
- [ ] Dark/light mode toggle works
- [ ] Navigation links scroll to the correct sections
- [ ] Profile photo appears in the About section

## Step 9: Build for Production

```bash
npm run build
```

Ensure the build completes without errors.

## Step 10: Deploy

### Option A: Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Set the environment variable: `NEXT_PUBLIC_BASE_URL` = your production URL
5. Click Deploy

Or use the one-click deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zer0-kr/awesome-portfolio-template)

### Option B: Netlify

1. Push your code to GitHub
2. Go to https://app.netlify.com/start
3. Connect your repository
4. Set environment variable: `NEXT_PUBLIC_BASE_URL`
5. Deploy

### Option C: Self-Hosted

```bash
npm run build
npm run start
```

The app runs on port 3000 by default.

## Step 11: Post-Deployment

After deployment, update `src/config/site.ts`:

```typescript
url: "https://your-actual-domain.com",
```

Rebuild and redeploy. Then optionally:
- Set up Google Search Console and add the verification code to `siteConfig.googleVerification`
- Submit your sitemap: `https://your-domain.com/sitemap.xml`

## Adding a New Language

To add a language beyond Korean and English:

1. Create `src/messages/{locale}.json` (copy from `en.json` and translate)
2. Edit `src/i18n/routing.ts` — add the new locale to the `locales` array
3. Edit `src/middleware.ts` — add the locale to the matcher pattern
4. Add the new locale variant to all text fields in `src/data/*.ts` files

## Removing a Section

To hide a section you don't need:

1. Set it to `false` in `siteConfig.sections`
2. Remove its entry from `siteConfig.nav`

No need to delete component files — they simply won't render.

## Tech Stack Reference

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16 | React framework (App Router) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| next-intl | 4.x | Internationalization |
| next-themes | 0.4.x | Dark/light mode |
| Framer Motion | 12.x | Animations |
| Lucide React | — | Icons |
