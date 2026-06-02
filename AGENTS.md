<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack at a Glance

- **Framework:** Next.js 16 (App Router), React 19, React Compiler (`reactCompiler: true`)
- **Language:** JavaScript (not TypeScript) — `strict: false`, path alias `@/*` → `src/*`
- **Styling:** SCSS partials under `src/styles/`, some CSS Modules (`.module.scss`) on individual components
- **Font:** Avenir loaded locally via `next/font/local` in `src/app/layout.js`
- **CMS:** Self-hosted Ghost (Content API) at `studio.dahnay.com` — blog, case-study, news
- **Email:** Nodemailer → Zoho SMTP (`smtppro.zoho.in:465`) via `src/lib/zohomail.js`
- **Animations:** GSAP (ScrollTrigger used on contact page stats counters)
- **Phone validation:** libphonenumber-js (E.164 format, per-country rules)
- **Analytics:** Google Tag Manager — conditional load, feature-flagged by `NEXT_PUBLIC_GTM_ENABLED`

---

## SEO & Metadata

All page metadata is built with `buildPageMetadata()` from `src/lib/seo.js`.

**Title handling:** The layout (`src/app/layout.js`) defines a `"%s | DahNAY"` template. `buildPageMetadata` bypasses this by returning `{ absolute: title }` — so every page title must already include the brand name (e.g. `"Air Freight - DahNAY"`, not `"Air Freight"`). Do not omit the brand suffix when writing page titles.

**OG title:** Defaults to the same string as `title`. Pass `ogTitle` explicitly only if the social share title must differ.

**Contact page:** Uses `src/app/contact/layout.js` for metadata because `contact/page.js` is a Client Component (`"use client"`).

**Canonical URLs:** Every static page passes a `canonical` field. Keep it set to the page's URL path without trailing slash.

**Article metadata:** For newsroom/blog posts, pass `type: "article"`, `publishedTime`, `modifiedTime`, and `authors` to `buildPageMetadata()`.

---

## Robots & Crawlers

Crawler rules live in `src/app/robots.js` (Next.js Metadata API — not a static file).

**Disallowed for all crawlers and AI bots:**
- `/api/`
- `/wp-admin/`
- `/wp-content/`
- `/wp-includes/`

When adding new private or non-indexable paths, add them to both `rules` entries (the `"*"` wildcard rule and the `aiCrawlers` array rule) so they stay in sync.

---

## Schema / JSON-LD

Schema markup is injected via `<JsonLd data={[...]} />` (`src/components/JsonLd.js`). Builders live in `src/lib/schema/` and are exported from `src/lib/schema/index.js`:

| Builder | Output |
|---|---|
| `buildOrganizationSchema()` | Organization + LocalBusiness |
| `buildWebsiteSchema()` | Website with SearchAction |
| `buildBreadcrumbSchema(items)` | BreadcrumbList |
| `buildArticleSchema(post)` | Article / BlogPosting |
| `buildServiceSchema(service)` | Service |
| `buildFaqSchema(faqs)` | FAQPage |
| `buildJobPostingSchema(job)` | JobPosting |
| `buildWebPageSchema(page)` | WebPage |

Always pass the appropriate schema to `<JsonLd>` on new pages. Use `buildBreadcrumbSchema` on every page except the homepage.

---

## Email System

All four form routes (`/api/contact`, `/api/career`, `/api/career-apply`, `/api/newsletter`) share `sendZohoMail()` from `src/lib/zohomail.js`. Key details:

- Transport: `smtppro.zoho.in:465` (SSL/TLS), credentials from `ZOHO_SMTP_USER` / `ZOHO_SMTP_PASS`
- From: `ZOHO_SMTP_USER` with display name `ZOHO_FROM_NAME`
- All emails CC the submitter's own email address
- Tracking footer appended via `buildTrackingHtml()` + `buildUtmHtml()` (IP, page URL, referrer, UTM params)
- Missing env vars → `{ ok: false, configError: true }` → 500 "Email service not configured."

**Adding a new form route:**
1. Validate with `isValidEmail()` / `isValidMobile()` from `src/lib/validators.js`
2. Escape all user text with `escapeHtml()` / `sanitizeSubject()` from `src/lib/html.js`
3. Call `sendZohoMail({ to, subject, html })` — attach `buildTrackingHtml(ip, pageUrl, referrer)` to the body
4. Add a `ZEPTOMAIL_*_TO_EMAIL` env var (the naming convention is kept for legacy; the actual transport is Zoho SMTP)

**Resume upload** (`/api/career-apply`): accepts `multipart/form-data`, converts PDF to base64, attaches it via nodemailer `attachments`. Limit: 15 MB, PDF only.

---

## Form Patterns

- **Honeypot:** Contact form includes a hidden `website` field (`position: absolute; left: -9999px`). If filled, the API silently returns success without sending email.
- **Phone validation:** Uses the custom `<PhoneField>` component (`src/components/ui/PhoneField.js`) backed by libphonenumber-js. All mobile fields must go through this component.
- **UTM capture:** `<UtmCapture>` in the root layout stores UTM params to `sessionStorage`. Forms read them back via `getUTMParams()` from `src/lib/utm.js` and include them in the email tracking footer.
- **Client IP:** Extracted server-side in API routes via `getClientIP()` from `src/lib/zohomail.js` (reads `x-forwarded-for`, `x-real-ip`, then `req.socket.remoteAddress`).

---

## GDPR / Consent

`src/lib/consent.js` owns all consent logic:

- `REGULATED_COUNTRIES` — 31-country whitelist (EU/GDPR, UK, India/DPDP, Brazil/LGPD)
- `isRegulatedCountry(countryCode)` — determines whether to show the consent banner
- `readConsentCookie()` / `writeConsentCookie()` — parse/write `dahnay_consent` cookie (395-day max-age)
- `applyConsent(granted)` — calls `gtag('consent', 'update', ...)` to enable/deny analytics + ad storage

The `<ConsentBanner>` component (`src/components/layout/ConsentBanner.js`) handles the UI. GTM consent defaults are written inline in `src/app/layout.js` before GTM loads.

---

## Content Data

- **Industries** (`src/data/industries/index.json`) — 11 verticals, each with: banner, overview, expertise (6 items), FAQs, WhyDahnay (4 items), case-study link. This file drives all `industries/[slug]` pages.
- **Services** (`src/data/services/index.json`) — 10 services. Drives `service/[slug]` pages.
- **Jobs** (`src/data/careers/jobs.js`) — Export `JOBS = []`. Empty array → careers page shows `<CareerApplyForm>` (resume upload). Add job objects to show `<CareerJobsSection>` listing.
- **Countries** (`src/data/countries.json`) — Used by `<PhoneField>` for dial-code selection.

---

## Ghost CMS Integration

`src/lib/ghost.js` wraps the Ghost Content API:

- `getBlogPosts(options)` — fetches all posts with manual pagination (100-item limit per call)
- `getBlogPost(slug)` — fetches a single post by slug
- Post type derived from Ghost tags: tag `case-study` → case-study, tag `blog` → blog, anything else → news
- HTML is post-processed to add `controls` attribute to `<audio>` / `<video>` elements
- Revalidation: `{ next: { revalidate: 300 } }` (5 minutes)

Images in Ghost posts are served from `studio.dahnay.com` — this domain is whitelisted in `next.config.mjs` under `images.remotePatterns`.

---

## Redirects

157 permanent (301) redirects are defined in `next.config.mjs`:
- `/contacts` → `/contact`, `/about-us` → `/about`
- `/services/*` → `/service/*` (slug remapping)
- `/industry/*` → `/industries/*` (slug + pluralisation)
- Old subdomain-style paths (e.g. `/renewable-energy-logistics/`) → current industry slugs
- WordPress scanner paths ignored (return to homepage silently)

Add new redirects to the `redirects()` async function in `next.config.mjs`.

---

## Image Optimisation

`next/image` is configured in `next.config.mjs`. Allowed remote domains:
- `studio.dahnay.com` (Ghost CMS images)
- Vercel deployment IPs (`*.vercel.app`)
- Any `https://` host (open wildcard — tighten if needed)

Always use `next/image` for all `<img>` replacements. Provide explicit `width` and `height` or use `fill` layout for responsive images.

---

## Styling Conventions

- All global styles live in `src/styles/` and are imported via `src/styles/_index.scss`
- One SCSS partial per component: `_component-name.scss`
- Use CSS Modules (`.module.scss`) when a component needs scoped styles; standard SCSS partials for global/shared styles
- The Avenir font is available via CSS variables set up in `src/app/layout.js` via `next/font/local`

---

## Sitemap

`src/app/sitemap.js` — generated dynamically at build time:
- 157 static URLs with explicit `priority` and `changeFrequency`
- Ghost posts fetched and mapped to `/newsroom/{blog|case-study|news}/{slug}`
- Update the static URL list when adding new pages

---

## LLM Context Routes

- `/llms.txt` — plain-text context file for LLMs (route handler: `src/app/llms.txt/route.js`)
- `/llms-full.txt` — expanded version (`src/app/llms-full.txt/route.js`)

Both are public and should reflect the site's current content model and intent.

---

## Environment Variables

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL | Yes |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | Optional |
| `NEXT_PUBLIC_GTM_ENABLED` | Must be `"true"` to load GTM | Optional |
| `GHOST_URL` | Ghost CMS base URL | Yes |
| `GHOST_CONTENT_API_KEY` | Ghost read-only Content API key | Yes |
| `ZOHO_SMTP_USER` | Zoho SMTP login email | Yes |
| `ZOHO_SMTP_PASS` | Zoho SMTP password | Yes |
| `ZOHO_FROM_NAME` | Sender display name | Yes |
| `ZOHO_TO_NAME` | Recipient display name | Yes |
| `ZEPTOMAIL_TO_EMAIL` | Contact form recipient | Yes |
| `ZEPTOMAIL_CAREER_TO_EMAIL` | Career inquiry recipient | Yes |
| `ZEPTOMAIL_CAREER_APPLY_TO_EMAIL` | Resume upload recipient | Yes |
| `ZEPTOMAIL_NEWSLETTER_TO_EMAIL` | Newsletter signup recipient | Yes |

> Note: `ZEPTOMAIL_*` env var names are kept for historical continuity. The actual email transport is Zoho SMTP (nodemailer), not the ZeptoMail HTTP API.
