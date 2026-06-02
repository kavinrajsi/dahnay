# DahNAY Website

Corporate website for DahNAY — global integrated logistics solutions. Next.js 16 App Router frontend backed by a self-hosted Ghost CMS for newsroom content.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19, React Compiler |
| Language | JavaScript — `@/*` path alias to `src/*` |
| Styling | Sass (SCSS partials) + CSS Modules for scoped components |
| Font | Avenir — local, via `next/font/local` |
| CMS | Self-hosted Ghost (Content API) at `studio.dahnay.com` |
| Email | Nodemailer → Zoho SMTP (`smtppro.zoho.in:465`) |
| Animations | GSAP + ScrollTrigger |
| Phone validation | libphonenumber-js |
| Analytics | Google Tag Manager (conditional load, feature-flagged) |

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Environment Variables

Create `.env.local` at the repo root. All variables marked **required** must be set or the site will not function correctly at runtime.

```env
# ─── Public ───────────────────────────────────────────────────────────────────
# Canonical base URL — used in sitemap, canonical tags, and JSON-LD
NEXT_PUBLIC_SITE_URL=https://www.dahnay.com

# Google Tag Manager — GTM loads only when BOTH vars are set AND ENABLED="true"
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GTM_ENABLED=true

# ─── Ghost CMS ────────────────────────────────────────────────────────────────
GHOST_URL=https://studio.dahnay.com
GHOST_CONTENT_API_KEY=<read-only-content-api-key>

# ─── Zoho SMTP (email delivery via Nodemailer) ────────────────────────────────
ZOHO_SMTP_USER=sam@dahnay.com
ZOHO_SMTP_PASS=<smtp-password>
ZOHO_FROM_NAME=DahNAY Website
ZOHO_TO_NAME=DahNAY Team

# ─── Per-form email recipients ────────────────────────────────────────────────
# Note: env var names retain legacy "ZEPTOMAIL_" prefix; transport is Zoho SMTP
ZEPTOMAIL_TO_EMAIL=info@dahnay.com                  # /api/contact
ZEPTOMAIL_CAREER_TO_EMAIL=careers@dahnay.com        # /api/career
ZEPTOMAIL_CAREER_APPLY_TO_EMAIL=careers@dahnay.com  # /api/career-apply (resume)
ZEPTOMAIL_NEWSLETTER_TO_EMAIL=info@dahnay.com       # /api/newsletter
```

All `ZOHO_SMTP_*` and `ZEPTOMAIL_*_TO_EMAIL` values are required at runtime — API routes return HTTP 500 "Email service not configured." if any are absent.

---

## Routes

### Public Pages

| URL | Description |
|---|---|
| `/` | Homepage — hero carousel, services overview, industries slider, newsroom preview, FAQ |
| `/about` | About DahNAY |
| `/contact` | Contact form + 47 office locations with region filter/search |
| `/careers` | Careers — shows resume-upload form when `JOBS` array is empty, job listing otherwise |
| `/careers/[slug]` | Individual job detail page |
| `/esg-csr` | ESG & CSR page |
| `/privacy-policy` | Privacy policy |
| `/terms-conditions` | Terms & conditions |
| `/cookie-policy` | Cookie policy |
| `/posh-policy` | POSH policy |
| `/whistleblower-policy` | Whistleblower policy |

### Services (10 verticals)

All under `/service/[slug]` driven by `src/data/services/index.json`.

`air-freight` · `sea-freight` · `road-transportation` · `time-critical-delivery` · `project-logistics` · `reverse-logistics` · `customs-clearance` · `domestic-trucking` · `last-mile-delivery` · `ecommerce-fulfilment`

### Industries (11 verticals)

All under `/industries/[slug]` driven by `src/data/industries/index.json`.

`automotive` · `renewables` · `machinery` · `retail-apparel` · `natural-rubber` · `white-goods` · `energy-oil-gas` · `food-agro` · `construction-materials` · `fmcg` · `paper-pulp`

### Solutions

| URL | Description |
|---|---|
| `/solutions/logistics` | Integrated logistics pillar |
| `/solutions/lines` | Shipping lines pillar |
| `/solutions/ports-infra` | Ports & infrastructure pillar |

### Newsroom (Ghost CMS content)

| URL | Description |
|---|---|
| `/newsroom` | All posts — blog + case studies + news |
| `/newsroom/blog` | Blog listing |
| `/newsroom/blog/[slug]` | Blog detail |
| `/newsroom/case-study` | Case studies listing |
| `/newsroom/case-study/[slug]` | Case study detail |
| `/newsroom/news` | News listing |
| `/newsroom/news/[slug]` | News detail |

Post type is derived from Ghost tags: `case-study` → case-study, `blog` → blog, anything else → news.

### Tools

| URL | Description |
|---|---|
| `/tools/load-calculator` | Load calculator |
| `/tools/sea-rates` | Sea rates lookup |
| `/tools/seaport` | Seaport information |
| `/tools/unit-convertor` | Unit converter |
| `/tools/container` | Container specification |

### API Routes

| URL | Method | Description |
|---|---|---|
| `/api/contact` | POST | Contact form → Zoho SMTP email |
| `/api/career` | POST | Career inquiry form → Zoho SMTP email |
| `/api/career-apply` | POST | Resume upload (PDF, max 15 MB) → Zoho SMTP with attachment |
| `/api/newsletter` | POST | Newsletter signup → Zoho SMTP email |

### LLM Context

| URL | Description |
|---|---|
| `/llms.txt` | Plain-text site context for LLMs |
| `/llms-full.txt` | Extended context version |

---

## Project Structure

```
src/
├── app/                            # Next.js App Router
│   ├── layout.js                   # Root layout (font, GTM, consent, schema, header/footer)
│   ├── page.js                     # Homepage
│   ├── robots.js                   # Robots.txt (Next.js Metadata API)
│   ├── sitemap.js                  # Dynamic XML sitemap
│   ├── not-found.js                # 404 page
│   ├── globals.scss
│   ├── api/
│   │   ├── contact/route.js
│   │   ├── career/route.js
│   │   ├── career-apply/route.js
│   │   └── newsletter/route.js
│   ├── about/
│   ├── careers/
│   │   └── [slug]/                 # Individual job pages
│   ├── contact/
│   │   └── layout.js               # Metadata lives here — page.js is "use client"
│   ├── industries/[slug]/
│   ├── service/[slug]/
│   ├── solutions/
│   │   ├── logistics/
│   │   ├── lines/
│   │   └── ports-infra/
│   ├── newsroom/
│   │   ├── blog/[slug]/
│   │   ├── case-study/[slug]/
│   │   └── news/[slug]/
│   ├── tools/
│   ├── esg-csr/
│   ├── llms.txt/route.js
│   └── llms-full.txt/route.js
├── components/
│   ├── layout/                     # Header, Footer, ConsentBanner
│   ├── sections/                   # Page section building blocks
│   ├── ui/                         # Button, PhoneField, Breadcrumb, Slider, FAQ, cards
│   ├── icons/                      # ServiceIcons, WhyDahnayIcons
│   ├── JsonLd.js                   # Schema.org JSON-LD injector
│   └── UtmCapture.js               # Stores UTM params to sessionStorage
├── data/
│   ├── industries/index.json       # All 11 industry pages content
│   ├── services/index.json         # All 10 service pages content
│   ├── careers/jobs.js             # JOBS array — empty → show apply form
│   └── countries.json              # Country data for PhoneField dial codes
├── lib/
│   ├── seo.js                      # buildPageMetadata() helper
│   ├── ghost.js                    # Ghost Content API client + pagination
│   ├── zohomail.js                 # sendZohoMail(), getClientIP(), logEmail()
│   ├── validators.js               # isValidEmail(), isValidMobile()
│   ├── html.js                     # escapeHtml(), sanitizeSubject(), buildTrackingHtml()
│   ├── utm.js                      # captureUTMs(), getUTMParams()
│   ├── consent.js                  # GDPR consent logic, REGULATED_COUNTRIES
│   └── schema/                     # JSON-LD schema builders
│       ├── index.js
│       ├── organization.js
│       ├── website.js
│       ├── breadcrumb.js
│       ├── article.js
│       ├── service.js
│       ├── faq.js
│       ├── jobPosting.js
│       └── webPage.js
├── styles/
│   ├── _index.scss                 # Main entrypoint (imports all partials)
│   └── _*.scss                     # Per-component SCSS partials (60+ files)
└── fonts/                          # Local Avenir font files (300–800 weights)
```

---

## SEO & Metadata

All page metadata uses `buildPageMetadata()` from `src/lib/seo.js`.

```js
export const metadata = buildPageMetadata({
  title: "IATA-Certified Air Freight Import Export Charter - DahNAY",
  description: "Ship faster with DahNAY IATA-certified air freight...",
  canonical: "/service/air-freight",
  image: "/images/banners/banner-desktop-air-freight.png", // optional
});
```

**Title template bypass:** The root layout sets a `"%s | DahNAY"` title template. `buildPageMetadata` returns `{ absolute: title }` to bypass it, so every page title must already include the brand name. Never write bare titles like `"Air Freight"`.

**Contact page:** Metadata lives in `src/app/contact/layout.js`, not `page.js`, because `contact/page.js` is a Client Component (`"use client"`).

**Article pages:** Also pass `type: "article"`, `publishedTime`, `modifiedTime`, and `authors`.

---

## Email System

All form routes share `sendZohoMail()` from `src/lib/zohomail.js`:

- Transport: `smtppro.zoho.in:465` (SSL/TLS)
- Every submission is CC'd to the submitter's own email
- Emails include a tracking footer with client IP, page URL, referrer, and UTM parameters
- Resume uploads (`/api/career-apply`) attach the PDF as base64 via nodemailer `attachments`; limit 15 MB, PDF only

The honeypot field on the contact form (`website`, hidden via absolute positioning) silently discards bot submissions without revealing rejection to the sender.

---

## Schema / JSON-LD

`<JsonLd data={[...]} />` (`src/components/JsonLd.js`) injects structured data. All builders live in `src/lib/schema/` and are exported from `src/lib/schema/index.js`.

### Company constants

`src/lib/schema/company.js` exports `COMPANY` — the single source of truth for brand identity (name, legal name, address, social URLs, founder, email). All schema builders import from it. Update this file when any company detail changes; never hard-code identity data in a schema builder directly.

### Helpers (`src/lib/schema/helpers.js`)

| Function | Purpose |
|---|---|
| `siteUrl()` | `NEXT_PUBLIC_SITE_URL` with trailing slash stripped |
| `absoluteUrl(path)` | Prepends `siteUrl()` to relative paths; passes through absolute URLs |
| `serializeJsonLd(data)` | `JSON.stringify` + escapes `<` to prevent `</script>` injection (called internally by `<JsonLd>`) |

### Builders

| Export | Schema type | Key parameters |
|---|---|---|
| `organizationSchema({ offices? })` | Organization | Pass `offices[]` on contact/homepage to emit `location[]` |
| `localBusinessSchema()` | LocalBusiness | HQ only — distinct `@id` (`/#hq`) from Organization (`/#organization`) |
| `websiteSchema()` | WebSite | Emit once on the homepage alongside Organization |
| `breadcrumbList(trail)` | BreadcrumbList | `[{ name, path }]` — returns `null` if empty; use on every page except homepage |
| `articleSchema(post, { path, type })` | BlogPosting / NewsArticle / Article | `type`: `"blog"` → BlogPosting, `"news"` → NewsArticle, `"case-study"` → Article |
| `serviceSchema({ name, description, image?, path, serviceType?, areaServed? })` | Service | `areaServed` defaults to `"Worldwide"`; used on service, industry, and solutions pages |
| `faqSchema(items)` | FAQPage | `[{ question, answer }]` — returns `null` if empty; includes speakable selectors |
| `webPageSchema({ name, description?, path, type?, dateModified? })` | WebPage | `type` defaults to `"WebPage"`; can be `"AboutPage"`, `"ContactPage"`, etc. |
| `jobPostingSchema(job)` | JobPosting | `{ title, description, postedAt, employmentType, location, country, slug }` — returns `null` if `job.title` missing |

### Usage example

```js
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList, serviceSchema, faqSchema } from "@/lib/schema";

const schemas = [
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Air Freight", path: "/service/air-freight" },
  ]),
  serviceSchema({
    name: "Air Freight",
    description: "IATA-certified global air freight forwarding from India.",
    path: "/service/air-freight",
  }),
  faqSchema(pageData.faqs),
].filter(Boolean); // builders return null on empty input — always filter

return (
  <>
    <JsonLd data={schemas} />
    {/* page content */}
  </>
);
```

`<JsonLd data={schemas}>` renders one `<script type="application/ld+json">` block per schema object. The `speakable` CSS selectors in `faqSchema` (`.faq__question`, `.faq__answer`) must match the class names used on FAQ DOM elements.

---

## GDPR / Consent

`src/lib/consent.js` manages a 31-country consent gate (EU/GDPR, UK PECR, India DPDP, Brazil LGPD). The `<ConsentBanner>` (`src/components/layout/ConsentBanner.js`) shows only for regulated regions. GTM consent defaults are set inline in `src/app/layout.js` before GTM loads; `applyConsent()` updates them when the user chooses.

---

## Robots & Crawlers

Generated by `src/app/robots.js` (Next.js Metadata API — not a static `public/robots.txt`).

The following paths are disallowed for **all crawlers** and the full **AI bot list**:

| Path | Reason |
|---|---|
| `/api/` | Internal API routes — not indexable |
| `/wp-admin/` | WordPress scanner honeypot |
| `/wp-content/` | WordPress scanner honeypot |
| `/wp-includes/` | WordPress scanner honeypot |

To add a new blocked path, append it to the `disallow` array in **both** rule entries in `robots()` (the `"*"` wildcard rule and the `aiCrawlers` array rule).

---

## Content Model

- **Industries** — 11 pages, all data in `src/data/industries/index.json`: banner, overview, expertise (6 items), FAQs, WhyDahnay (4 items), case-study link.
- **Services** — 10 pages, data in `src/data/services/index.json`.
- **Posts** — fetched from Ghost via `getBlogPosts` / `getBlogPost` (`src/lib/ghost.js`). Type derived from Ghost tags.
- **Jobs** — `src/data/careers/jobs.js` exports `JOBS`. Empty array → careers page shows resume-upload form. Populate with job objects to show the listing.

---

## Redirects

157 permanent (301) redirects in `next.config.mjs` cover:
- Legacy slug remapping (`/services/*` → `/service/*`, `/industry/*` → `/industries/*`)
- Old marketing URLs (e.g. `/renewable-energy-logistics/` → `/industries/renewables`)
- WordPress scanner paths (silently redirected to homepage)

Add new redirects to the `redirects()` async function in `next.config.mjs`.
