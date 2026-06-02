<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## SEO & Metadata

All page metadata is built with `buildPageMetadata()` from `src/lib/seo.js`.

**Title handling:** The layout (`src/app/layout.js`) defines a `"%s | DahNAY"` template. `buildPageMetadata` bypasses this by returning `{ absolute: title }` — so every page title must already include the brand name (e.g. `"Air Freight - DahNAY"`, not `"Air Freight"`). Do not omit the brand suffix when writing page titles.

**OG title:** Defaults to the same string as `title`. Pass `ogTitle` explicitly only if the social share title must differ.

**Contact page:** Uses `src/app/contact/layout.js` for metadata because `contact/page.js` is a Client Component (`"use client"`).

**Canonical URLs:** Every static page passes a `canonical` field. Keep it set to the page's URL path without trailing slash.

## Robots & Crawlers

Crawler rules live in `src/app/robots.js` (Next.js Metadata API — not a static file).

**Disallowed for all crawlers and AI bots:**
- `/api/`
- `/wp-admin/`
- `/wp-content/`
- `/wp-includes/`

When adding new private or non-indexable paths, add them to both `rules` entries (the `"*"` wildcard rule and the `aiCrawlers` array rule) so they stay in sync.
