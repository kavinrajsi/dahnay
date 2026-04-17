# DahNAY Website

Corporate website for DahNAY — global logistics solutions with industry-specific freight tools. Next.js frontend backed by a self-hosted Ghost CMS for blog, news, and case study content.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19 and the React Compiler
- **Styling:** Sass (SCSS partials under `src/styles/`)
- **Font:** Avenir (local, via `next/font`)
- **CMS:** Self-hosted Ghost (Content API) for posts across `/newsroom/{blog,case-study,news}`
- **Carousel / transitions:** Swiper, GSAP
- **Analytics:** Google Tag Manager (via `@next/third-parties`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` at the repo root. Minimum for CMS integration:

```env
# Public site URL (used in sitemap + canonical + JSON-LD)
NEXT_PUBLIC_SITE_URL=https://www.dahnay.com

# Ghost CMS — Content API (public, read-only)
GHOST_URL=http://studio.dahnay.com
GHOST_CONTENT_API_KEY=<your-content-api-key>

# Contact form (ZeptoMail)
ZEPTOMAIL_TOKEN=<token>
ZEPTOMAIL_FROM_EMAIL=noreply@dahnay.com
ZEPTOMAIL_TO_EMAIL=info@dahnay.com

# Optional
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Routes

| URL                                  | Purpose                                                   |
| ------------------------------------ | --------------------------------------------------------- |
| `/`                                  | Homepage with hero carousel                               |
| `/about`                             | About us                                                  |
| `/careers`                           | Careers (resume-upload form when no openings listed)      |
| `/contact`                           | Contact form                                              |
| `/industries/[slug]`                 | Industry detail pages (11 verticals)                      |
| `/solutions/{logistics,lines,ports-infra}` | Solution pillars                                    |
| `/service/[slug]`                    | Individual service pages                                  |
| `/newsroom`                          | All posts (blog + case studies + news)                    |
| `/newsroom/blog` + `/newsroom/blog/[slug]`         | Blog listing and detail               |
| `/newsroom/case-study` + `/newsroom/case-study/[slug]` | Case studies                      |
| `/newsroom/news` + `/newsroom/news/[slug]`         | News                                  |
| `/esg-csr`                           | ESG & CSR                                                 |
| `/{privacy,cookie,terms,posh,whistleblower}-policy` | Legal pages                            |
| `/api/contact`                       | Contact form submission (server route → ZeptoMail)        |

Post-type classification is derived from Ghost tags: a `case-study` tag maps to case-studies, `blog` to blog, and anything else falls through to `news`. See `src/lib/ghost.js`.

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── api/contact/           # Contact form endpoint
│   ├── about/
│   ├── careers/
│   ├── industries/[slug]/
│   ├── newsroom/
│   │   ├── blog/[slug]/       # Blog detail
│   │   ├── case-study/[slug]/ # Case study detail
│   │   └── news/[slug]/       # News detail
│   ├── solutions/
│   ├── service/
│   ├── layout.js
│   ├── page.js
│   └── sitemap.js
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/              # Page section building blocks
│   └── icons/
├── data/
│   ├── industries/index.json  # Industry page content (banner, expertise, FAQs, case study link)
│   ├── careers/jobs.js        # Job openings (empty array → careers page shows apply form)
│   └── ...
├── lib/
│   └── ghost.js               # Ghost Content API client + pagination
├── styles/
│   ├── _index.scss            # Component entrypoint
│   └── components/            # Per-component SCSS partials
└── fonts/                     # Avenir font files
```

## Content model

- **Industries** — all 11 industry pages are driven by `src/data/industries/index.json` (banner, overview copy, expertise items, FAQs, why-DahNAY, case-study link).
- **Posts (blog / case-study / news)** — fetched from Ghost via `getBlogPosts` / `getBlogPost` in `src/lib/ghost.js`. Post type is derived from Ghost tags.
- **Case-study links on industry pages** — each industry references one featured post via an internal `/newsroom/blog/<slug>` link in the JSON.
- **Jobs** — `src/data/careers/jobs.js`. Empty array hides the listing section and swaps in `CareerApplyForm` instead.
