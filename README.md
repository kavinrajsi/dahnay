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

Create a `.env.local` at the repo root.

```env
# Public site URL (used in sitemap + canonical + JSON-LD)
NEXT_PUBLIC_SITE_URL=https://www.dahnay.com

# Ghost CMS — Content API (public, read-only)
GHOST_URL=http://studio.dahnay.com
GHOST_CONTENT_API_KEY=<your-content-api-key>

# ZeptoMail — shared
ZEPTOMAIL_URL=https://api.zeptomail.in/v1.1/email
ZEPTOMAIL_TOKEN=<zoho-zeptomail-send-token>
ZEPTOMAIL_FROM_EMAIL=noreply@dahnay.com
ZEPTOMAIL_FROM_NAME=DahNAY Website
ZEPTOMAIL_TO_NAME=DahNAY Team

# ZeptoMail — per-form recipients
ZEPTOMAIL_TO_EMAIL=info@dahnay.com                 # /api/contact
ZEPTOMAIL_CAREER_TO_EMAIL=careers@dahnay.com       # /api/career (inquiry)
ZEPTOMAIL_CAREER_APPLY_TO_EMAIL=careers@dahnay.com # /api/career-apply (resume upload)
ZEPTOMAIL_NEWSLETTER_TO_EMAIL=info@dahnay.com      # /api/newsletter

# Optional — Google Tag Manager
# GTM only loads when both vars are set (ID present AND enabled flag is the string "true").
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GTM_ENABLED=true
```

All `ZEPTOMAIL_*` values above are required at runtime — API routes return a 500 "Email service not configured." if any are missing.

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

## SEO & Metadata

All page metadata uses the `buildPageMetadata()` helper from `src/lib/seo.js`.

```js
export const metadata = buildPageMetadata({
  title: "IATA-Certified Air Freight Import Export Charter - DahNAY",
  description: "Ship faster with DahNAY IATA-certified air freight...",
  canonical: "/service/air-freight",
  image: "/images/banners/banner-desktop-air-freight.png", // optional
});
```

**Title template bypass:** The root layout sets a `"%s | DahNAY"` title template. `buildPageMetadata` returns `{ absolute: title }` to bypass it, so every page title must already include the brand name. Do not write bare titles like `"Air Freight"`.

**OG / Twitter:** Both default to the same title and description. Pass `ogTitle` explicitly only when the social card copy must differ.

**Contact page:** Metadata lives in `src/app/contact/layout.js`, not `page.js`, because `contact/page.js` is a Client Component.

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── api/contact/           # Contact form endpoint
│   ├── about/
│   ├── careers/
│   ├── contact/
│   │   └── layout.js          # Metadata for the contact page (page.js is "use client")
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
│   ├── ghost.js               # Ghost Content API client + pagination
│   └── seo.js                 # buildPageMetadata() helper
├── styles/
│   ├── _index.scss            # Component entrypoint
│   └── components/            # Per-component SCSS partials
└── fonts/                     # Avenir font files
```

## Robots & Crawlers

Crawler rules are generated by `src/app/robots.js` using the Next.js Metadata API (not a static `public/robots.txt`).

The following paths are disallowed for **all crawlers** and the full **AI bot list** (`aiCrawlers` array):

| Path | Reason |
|------|--------|
| `/api/` | Internal API routes |
| `/wp-admin/` | WordPress scanner honeypot |
| `/wp-content/` | WordPress scanner honeypot |
| `/wp-includes/` | WordPress scanner honeypot |

To add a new blocked path, append it to the `disallow` array in **both** rules entries inside `robots()`.

## Content model

- **Industries** — all 11 industry pages are driven by `src/data/industries/index.json` (banner, overview copy, expertise items, FAQs, why-DahNAY, case-study link).
- **Posts (blog / case-study / news)** — fetched from Ghost via `getBlogPosts` / `getBlogPost` in `src/lib/ghost.js`. Post type is derived from Ghost tags.
- **Case-study links on industry pages** — each industry references one featured post via an internal `/newsroom/blog/<slug>` link in the JSON.
- **Jobs** — `src/data/careers/jobs.js`. Empty array hides the listing section and swaps in `CareerApplyForm` instead.
