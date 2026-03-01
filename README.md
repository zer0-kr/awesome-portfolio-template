<div align="center">

# Awesome Portfolio Template

**시니어 엔지니어와 글로벌 개발자를 위한 모던 포트폴리오 템플릿**

Next.js 16 + Tailwind CSS v4 + Framer Motion 기반 — 다국어(i18n)와 다크 모드를 기본 지원합니다.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[한국어](README.md) | [English](README.en.md)

[**라이브 데모**](https://jihoon-gong.vercel.app) &nbsp;|&nbsp; [**바로 배포하기**](#배포)

<img src=".github/demo.gif" alt="Awesome Portfolio Template 데모 - 다크 모드, 언어 전환, 스크롤 애니메이션" width="720" />

</div>

---

## 주요 기능

- **다국어 지원 (i18n)** — `next-intl` 기반 한국어/영어 기본 제공. 다른 언어도 쉽게 추가 가능.
- **다크 / 라이트 모드** — `next-themes`로 시스템 설정 연동 및 수동 토글 지원.
- **Framer Motion 애니메이션** — 카드 진입 효과, 플로팅 오브, 부드러운 스크롤 인디케이터.
- **경력 상세 페이지** — 단순한 목록이 아닌, `/career` 페이지에서 프로젝트 배경/역할/성과/교훈을 상세히 소개.
- **SEO 최적화** — JSON-LD 구조화 데이터, Open Graph 이미지, sitemap, robots.txt.
- **완전 반응형** — 모바일 우선 설계, 햄버거 메뉴, 모든 화면 크기 최적화.
- **설정 파일 하나** — `src/config/site.ts` + 데이터 파일만 수정. 컴포넌트 코드를 건드릴 필요 없음.
- **접근성** — ARIA 라벨, 키보드 내비게이션, 포커스 관리.
- **성능** — LazyMotion, CSS 키프레임 애니메이션, `next/font` 최적화.

## 섹션 구성

| 섹션 | 설명 |
|---|---|
| **Hero** | 이름, 직함, 애니메이션 그라데이션 오브, CTA 버튼 |
| **About** | 자기소개, 프로필 사진, 스킬 배지 |
| **Experience** | 경력 타임라인 (회사별 상세) |
| **Portfolio** | 핵심 성과 요약 카드 |
| **Career Detail** | 프로젝트별 배경/역할/성과/교훈 상세 페이지 |
| **Speaking** | 발표, 강의, 커뮤니티 활동 |
| **Certified** | 카테고리별 자격증 + 수상 |
| **Projects** | 펼쳐지는 프로젝트 카드 (기술 태그 포함) |
| **Contact** | 소셜 링크 (LinkedIn, GitHub, 블로그, 이메일) |

## 기술 스택

| 기술 | 용도 |
|---|---|
| [Next.js 16](https://nextjs.org/) | App Router 기반 React 프레임워크 |
| [TypeScript](https://www.typescriptlang.org/) | 타입 안전성 |
| [Tailwind CSS v4](https://tailwindcss.com/) | CSS 변수 기반 유틸리티 스타일링 |
| [next-intl](https://next-intl-docs.vercel.app/) | 다국어 지원 |
| [next-themes](https://github.com/pacocoursey/next-themes) | 다크/라이트 모드 |
| [Framer Motion](https://www.framer.com/motion/) | 애니메이션 |
| [Lucide Icons](https://lucide.dev/) | 아이콘 |

---

## 빠른 시작

### 1. 템플릿 사용하기

위의 녹색 **"Use this template"** 버튼을 클릭하거나:

```bash
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

### 2. 사이트 설정

**`src/config/site.ts`** 파일 하나만 수정하면 됩니다:

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
  // ... SEO, 네비게이션, 섹션 토글
};
```

### 3. 콘텐츠 추가

**`src/data/`** 의 샘플 데이터를 본인 데이터로 교체하세요:

| 파일 | 내용 |
|---|---|
| `profile.ts` | 이름, 이메일, 소셜 링크, 학력 |
| `experience.ts` | 경력 사항 |
| `career-summary.ts` | 포트폴리오 개요 & 핵심 성과 |
| `career-detail.ts` | 프로젝트 상세 서술 |
| `credentials.ts` | 자격증 & 수상 |
| `speaking.ts` | 발표 & 커뮤니티 활동 |
| `projects.ts` | 사이드 프로젝트 |

### 4. 번역 수정

**`src/messages/ko.json`** 과 **`src/messages/en.json`** 을 원하는 언어에 맞게 수정하세요.

### 5. 프로필 사진 추가

**`public/profile.png`** 를 본인 사진으로 교체하세요.

---

## 배포

### Vercel (권장)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zer0-kr/awesome-portfolio-template)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zer0-kr/awesome-portfolio-template)

### 환경 변수 (선택)

```env
NEXT_PUBLIC_BASE_URL=https://your-portfolio.vercel.app
```

설정하지 않으면 `src/config/site.ts`의 기본값이 사용됩니다.

---

## 커스터마이징

### 테마 색상

**`src/app/globals.css`** 의 CSS 변수를 수정하세요:

```css
@theme {
  --color-accent: #0ea5e9;           /* 기본 강조색 */
  --color-accent-secondary: #10b981;  /* 보조 강조색 */
  --color-background: #fafafa;        /* 배경색 */
  /* ... */
}
```

### 네비게이션

`src/config/site.ts`에서 섹션 순서와 표시 여부를 제어합니다:

```typescript
nav: ["about", "experience", "career-highlights", "projects", "contact"],
```

### 섹션 표시/숨김

```typescript
sections: {
  speaking: false,    // 발표 섹션 숨김
  certified: false,   // 자격증 섹션 숨김
},
```

---

## 프로젝트 구조

```
src/
├── config/
│   └── site.ts              # 사이트 설정 (이 파일을 수정하세요!)
├── data/
│   ├── profile.ts           # 개인 정보
│   ├── experience.ts        # 경력 사항
│   ├── career-summary.ts    # 포트폴리오 하이라이트
│   ├── career-detail.ts     # 상세 서술
│   ├── credentials.ts       # 자격증 & 수상
│   ├── speaking.ts          # 발표 & 커뮤니티
│   └── projects.ts          # 사이드 프로젝트
├── messages/
│   ├── ko.json              # 한국어 번역
│   └── en.json              # 영어 번역
├── components/
│   ├── sections/            # 페이지 섹션
│   ├── layout/              # Header, Footer
│   ├── ui/                  # 재사용 컴포넌트
│   └── seo/                 # JSON-LD, OG 이미지
└── app/
    ├── globals.css           # 테마 & 글로벌 스타일
    └── [locale]/
        ├── page.tsx          # 메인 페이지
        └── career/page.tsx   # 경력 상세 페이지
```

---

## 기여하기

기여를 환영합니다! [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 라이선스

[MIT](LICENSE) — 개인 및 상업 프로젝트에 자유롭게 사용 가능합니다.

---

<div align="center">

**이 템플릿이 도움이 되었다면 스타를 눌러주세요!**

[![Star on GitHub](https://img.shields.io/github/stars/zer0-kr/awesome-portfolio-template?style=social)](https://github.com/zer0-kr/awesome-portfolio-template)

</div>
