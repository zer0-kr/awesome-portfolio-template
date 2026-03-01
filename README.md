> [English version](README.en.md)

<div align="center">

# Awesome Portfolio Template

**클론. 설정. 배포. 5분이면 끝!**

Next.js 16 · Tailwind CSS v4 · TypeScript · Framer Motion

<br>

[**라이브 데모**](https://jihoon-gong.vercel.app) &nbsp;&nbsp;&middot;&nbsp;&nbsp; [**바로 배포하기**](#배포)

<br>

<img src=".github/demo.gif" alt="Awesome Portfolio Template 데모 - 다크 모드, 언어 전환, 스크롤 애니메이션" width="720" />

<br>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

<br>

---

## 왜 이 템플릿인가?

- **경력 상세 페이지** — 단순 타임라인이 아닌, `/career` 페이지에서 프로젝트별 배경/역할/성과/교훈을 서술합니다. 시니어 포지션에 필수적인 기능입니다.
- **처음부터 설계된 다국어** — 나중에 덧붙인 게 아닙니다. `next-intl` 기반 URL 라우팅(`/ko`, `/en`)까지 완전히 분리되어 있습니다.
- **설정 파일 하나로 완성** — `src/config/site.ts` 하나와 데이터 파일 7개만 수정하면 됩니다. 컴포넌트 코드를 건드릴 필요가 없습니다.
- **직접 만들면 몇 주 걸릴 퀄리티** — Framer Motion 애니메이션, 그라데이션 오브, 부드러운 스크롤 인디케이터. 프리미엄 수준의 디자인입니다.

---

## 주요 기능

<table>
<tr>
<td width="33%" valign="top">

**다국어 (i18n)**

`next-intl` 기반 한국어/영어 기본 제공. URL 라우팅까지 완전 분리. 다른 언어도 쉽게 추가 가능.

</td>
<td width="33%" valign="top">

**다크 / 라이트 모드**

시스템 설정 자동 감지. 수동 토글 지원. 전환 시 깜빡임 제로.

</td>
<td width="33%" valign="top">

**경력 상세 페이지**

`/career`에서 프로젝트별 배경, 역할, 성과, 교훈을 상세히 서술. 시니어 포지션 지원에 필수.

</td>
</tr>
<tr>
<td valign="top">

**Framer Motion**

카드 진입 효과, 플로팅 오브, 스크롤 인디케이터. `LazyMotion`으로 번들 최소화.

</td>
<td valign="top">

**SEO 최적화**

JSON-LD, Open Graph 이미지 자동 생성, sitemap, robots.txt 기본 포함.

</td>
<td valign="top">

**완전 반응형**

모바일 우선 설계. 햄버거 메뉴, 터치 제스처, 모든 화면 크기 최적화.

</td>
</tr>
<tr>
<td valign="top">

**설정 하나로 완성**

`site.ts` + 데이터 파일 7개만 수정. 컴포넌트 코드 수정 불필요.

</td>
<td valign="top">

**접근성**

ARIA 라벨, 키보드 내비게이션, 포커스 관리.

</td>
<td valign="top">

**성능 최적화**

LazyMotion, CSS 키프레임, `next/font` 최적화. Lighthouse 고득점.

</td>
</tr>
</table>

---

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

---

## 🤖 AI 에이전트로 설치하기

**Claude Code**, **Cursor**, **Windsurf**, **ChatGPT** 등 AI 코딩 에이전트를 사용하고 계신가요?

아래 명령어의 결과를 에이전트에게 전달하면, **클론 → 포트폴리오 입력 → 커스터마이징 → 빌드 → 배포**까지 자동으로 수행합니다.
코드를 한 줄도 직접 작성할 필요가 없습니다.

```bash
curl -s https://raw.githubusercontent.com/zer0-kr/awesome-portfolio-template/main/docs/guide/installation.md
```

> [!TIP]
> 에이전트에게 이렇게 말하세요: _"위 명령어 결과를 읽고, 내 포트폴리오를 설치해줘"_
> 
> 설치 가이드에는 필요한 개인정보 체크리스트, 설정 파일 인터페이스, 배포 명령어가 모두 포함되어 있어 에이전트가 자율적으로 작업을 완료할 수 있습니다.

---

## 빠른 시작

```bash
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

> [!TIP]
> 또는 위의 녹색 **"Use this template"** 버튼을 클릭하세요.

http://localhost:3000 에서 샘플 포트폴리오를 확인한 뒤, 아래 파일들을 수정합니다.

### 설정

| 단계 | 파일 | 설명 |
|:---:|---|---|
| 1 | `src/config/site.ts` | 이름, 직함, 소셜 링크, SEO, 섹션 토글 |
| 2 | `src/data/*.ts` | 경력, 프로젝트, 자격증 등 콘텐츠 (7개 파일) |
| 3 | `src/messages/ko.json`, `en.json` | UI 텍스트 (이름, 소개글, 섹션 라벨) |
| 4 | `public/profile.png` | 프로필 사진 (정사각형, 400x400px 이상) |

<details>
<summary><strong>site.ts 예시</strong></summary>

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
    speaking: false,       // 필요 없는 섹션은 false
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

## 배포

### Vercel (권장)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zer0-kr/awesome-portfolio-template)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zer0-kr/awesome-portfolio-template)

### 환경 변수 (선택)

```env
NEXT_PUBLIC_BASE_URL=https://your-portfolio.vercel.app
```

> [!NOTE]
> 설정하지 않으면 `src/config/site.ts`의 기본값이 사용됩니다.

---

## 커스터마이징

<details>
<summary><strong>테마 색상</strong></summary>

`src/app/globals.css`의 CSS 변수를 수정하세요:

```css
@theme {
  --color-accent: #0ea5e9;           /* 기본 강조색 */
  --color-accent-secondary: #10b981;  /* 보조 강조색 */
  --color-background: #fafafa;        /* 배경색 */
}
```

</details>

<details>
<summary><strong>네비게이션 순서</strong></summary>

`src/config/site.ts`에서 원하는 순서로 배열을 수정하세요:

```typescript
nav: ["about", "experience", "career-highlights", "projects", "contact"],
```

</details>

<details>
<summary><strong>섹션 표시/숨김</strong></summary>

```typescript
sections: {
  speaking: false,    // 발표 섹션 숨김
  certified: false,   // 자격증 섹션 숨김
},
```

`nav` 배열에서도 해당 항목을 제거하면 네비게이션에서 사라집니다.

</details>

---

## 프로젝트 구조

```
src/
├── config/
│   └── site.ts              # 사이트 설정 (이 파일을 수정하세요!)
├── data/                     # 콘텐츠 데이터 (7개 파일)
│   ├── profile.ts            # 개인 정보
│   ├── experience.ts         # 경력 사항
│   ├── career-summary.ts     # 포트폴리오 하이라이트
│   ├── career-detail.ts      # 프로젝트 상세 서술
│   ├── credentials.ts        # 자격증 & 수상
│   ├── speaking.ts           # 발표 & 커뮤니티
│   └── projects.ts           # 사이드 프로젝트
├── messages/                 # 다국어 UI 텍스트
│   ├── ko.json
│   └── en.json
├── components/
│   ├── sections/             # 페이지 섹션 컴포넌트
│   ├── layout/               # Header, Footer
│   └── ui/                   # 재사용 UI 컴포넌트
└── app/
    └── [locale]/
        ├── page.tsx           # 메인 페이지
        └── career/page.tsx    # 경력 상세 페이지
```

---

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

## 기여하기

기여를 환영합니다! [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 라이선스

[MIT](LICENSE) — 개인 및 상업 프로젝트에 자유롭게 사용 가능합니다.

---

<div align="center">

**이 템플릿이 도움이 되었다면 스타를 눌러주세요!**

[![Star on GitHub](https://img.shields.io/github/stars/zer0-kr/awesome-portfolio-template?style=social)](https://github.com/zer0-kr/awesome-portfolio-template)

</div>
