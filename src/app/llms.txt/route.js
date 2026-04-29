import { getBlogPosts } from "@/lib/ghost";

export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

const EXCERPT_MAX = 160;

const POST_TYPE_PATH = {
  blog: "blog",
  "case-study": "case-study",
};

const STATIC_PRE_NEWSROOM = `# DahNAY

> DahNAY is a global logistics and supply chain solutions company headquartered in Chennai, India. Founded in 2007 by Mr. Murali Babu, DahNAY has grown from a single desk into an international operation spanning 45+ offices across 19+ countries, serving 5000+ clients with 20+ years of operational experience. The company delivers industry-specific freight and supply chain services across air, sea, road, customs, project, reverse, and last-mile networks for enterprises in 11+ industry verticals — including automotive, renewables, FMCG, food and agro, energy, construction materials, and machinery. DahNAY is Great Place to Work Certified (2024–2026) and operates owned warehousing in the USA and UAE alongside Container Freight Stations in Chennai and Tuticorin.

## Company

- [About DahNAY](https://www.dahnay.com/about): Company history (founded 2007 by Mr. Murali Babu), leadership, vision/mission, values (Integrity, Curiosity, Empathy, Responsibility, Inclusion), and the global footprint of 45+ offices across 19+ countries with 5000+ clients served.
- [ESG & CSR](https://www.dahnay.com/esg-csr): "Moving forward, responsibly" — environmental initiatives (route optimisation, EV reach stackers at handling points, support for renewables and CNG cargo), social commitments (safe practices, community contributions, turtle hatchling conservation), and governance through compliance, transparency, and accountability.
- [Contact](https://www.dahnay.com/contact): Directory of 25+ India branch offices and international offices in USA, Canada, UK, UAE, Ghana, Kenya, Ivory Coast, Congo, Bangladesh, Sri Lanka, Singapore, Malaysia, Thailand, Vietnam, Indonesia, Hong Kong, and Turkey.

## Services

- [Air Freight](https://www.dahnay.com/service/air-freight): Speed-driven international air cargo for time-sensitive, high-value shipments. Express, priority, direct, and consolidated movements; specialised handling for high-value, temperature-controlled, DG-compliant, electronics, and aerospace components; charter aircraft coordination; IATA-compliant DG-certified teams; hybrid sea–air integration for disruption management; 24/7 monitoring with real-time tracking.
- [Sea Freight](https://www.dahnay.com/service/sea-freight): Cost-effective ocean freight covering FCL, LCL, breakbulk, and consolidation/deconsolidation. Specialised cargo (oversized, open-top, reefer, IMDG hazardous, industrial machinery), RoRo finished-vehicle services, full CHA activities (documentation, customs clearance, HS classification, port supervision), and multimodal port-to-door integration. Certifications include ISO 9001, ISO 14001, HAZMAT, IMDG, AEO, and ISPM 15.
- [Road Transportation](https://www.dahnay.com/service/road-transportation): Inland movement across cities, regions, and industrial corridors with FTL and LTL across urban, semi-urban, and remote locations. Temperature-controlled trucking, high-value goods, and project-cargo handling, e-bill management, real-time monitoring with milestone updates, and multimodal connectivity to air and sea freight.
- [Time-Critical Delivery](https://www.dahnay.com/service/time-critical-delivery): Same-day and next-flight-out solutions for production-critical and deadline-driven shipments. Dynamic mode-switching during disruptions, 24/7 monitoring with proactive communication, and specialised handling for healthcare supplies, critical components, and high-value cargo.
- [Project Logistics](https://www.dahnay.com/service/project-logistics): Engineered movement of oversized, complex, high-value shipments. End-to-end project planning, hydraulic axle trailers and engineered loading for weight/dimension-constrained cargo, multimodal execution (road/sea/air/hybrid), and on-site delivery and installation coordination — proven breakbulk and heavy-lift expertise across India and the UAE.
- [Reverse Logistics](https://www.dahnay.com/service/reverse-logistics): Returns, recalls, and redistributions with complete visibility and value recovery. Structured workflows for returns and recall management, repair and refurbishment cycles with asset traceability, inventory recovery (reuse, resale, disposal routing), and centralised real-time tracking across return flows.
- [Customs Clearance](https://www.dahnay.com/service/customs-clearance): Cross-border compliance and documentation across ports, airports, and inland terminals. End-to-end import/export documentation, HS classification and duty advisory, regulatory compliance with evolving trade frameworks, and faster clearance through authority coordination — supported by DahNAY's own Container Freight Stations in Chennai and Tuticorin.
- [Domestic Trucking](https://www.dahnay.com/service/domestic-trucking): Coast-to-coast FTL and LTL across regional and national networks. Owned fleet combined with extended transporter network for scalability, GPS-enabled tracking, and regulatory adherence through e-way bill management and safety protocols.
- [Last-Mile Delivery](https://www.dahnay.com/service/last-mile-delivery): Final-mile reliability for high-volume deliveries across urban and regional networks. Owned fleet for operational control, route optimisation to reduce transit time and improve drop efficiency, real-time delivery tracking, and seamless integration with warehousing and reverse logistics (returns, pickups, exchanges).
- [E-commerce Fulfilment](https://www.dahnay.com/service/ecommerce-fulfilment): End-to-end order processing — pick-pack-dispatch, inventory management, and high-volume scaling for seasonal and promotional peaks. Owned warehouse infrastructure in the USA and UAE for global localisation, integrated with last-mile delivery and reverse logistics within a unified ecosystem.

## Industries

- [Automotive](https://www.dahnay.com/industries/automotive): Just-in-time production-line logistics for components, engines, finished vehicles, accessories, and tyres. Inbound/outbound flows synchronised to OEM production, RoRo and dedicated container finished-vehicle logistics, EV and lithium-ion battery shipments under IATA/IMDG protocols, and damage-free handling for high-value engines. Coverage across India, UAE, USA, Southeast Asia, and African and European markets.
- [Renewables](https://www.dahnay.com/industries/renewables): Heavy-lift logistics for oversized renewable energy equipment delivered to remote project sites. Wind turbine blades, towers, nacelles, and generators; solar modules, inverters, and mounting structures; route engineering for narrow or unpaved roads; permits and lifting equipment coordination — multimodal coverage across India, UAE, USA, and key Asian, African, and European markets.
- [Machinery](https://www.dahnay.com/industries/machinery): Precision logistics for industrial equipment, manufacturing lines, and engineering systems. Heavy machinery and pressing equipment, oversized cargo with route surveys and hydraulic axle trailers, factory-to-site delivery synchronised with installation schedules, and breakbulk and heavy-lift for complete factory installations.
- [Retail & Apparel](https://www.dahnay.com/industries/retail-apparel): Fashion-cycle-aligned logistics matching seasonal launch windows. Sourcing, production pickup, time-critical air/sea freight, and distribution across USA, UK, UAE, and Europe; e-commerce fulfilment with pick-pack, direct-to-consumer dispatch, and marketplace integration.
- [Natural Rubber](https://www.dahnay.com/industries/natural-rubber): Commodity-scale movement of plantation-to-buyer rubber shipments. Ribbed smoked sheets, latex, processed rubber blocks; plantation-to-port movement with bulk handling and containerisation; processing-equipment movement (mixers, calenders, vulcanisation machinery); export corridors connecting Kerala, Northeast India, and Southeast Asia to USA and Europe.
- [White Goods](https://www.dahnay.com/industries/white-goods): High-volume, high-cubic appliance logistics — refrigerators, washing machines, air conditioners, dishwashers, and large kitchen appliances. Cubic-volume optimisation reducing freight cost per unit, factory-to-port movement with bracing and damage prevention, spare-parts aftermarket logistics, and global market connectivity into USA, Africa, and Southeast Asia.
- [Energy, Oil & Gas](https://www.dahnay.com/industries/energy-oil-gas): Project-scale heavy-lift and hazardous-cargo logistics across upstream, midstream, and downstream operations. Modules, pipelines, drilling components, refinery infrastructure, IMDG/IATA hazardous-materials protocols, and renewable energy transition equipment. Coverage across India, UAE, USA, and major African, Asian, and European markets.
- [Food & Agro](https://www.dahnay.com/industries/food-agro): Cold-chain and bulk-commodity logistics from farm to market. Temperature-controlled logistics for perishables and pharmaceuticals; bulk grain, pulses, spices, oilseeds, and processed commodity exports; harvest-cycle alignment; FSSAI, FDA, and international food-safety compliance; food-grade packaging with allergen separation.
- [FMCG](https://www.dahnay.com/industries/fmcg): High-velocity distribution across primary (factory-to-warehouse), secondary (warehouse-to-retail), and last-mile (e-commerce/D2C) channels. Seasonal surge capacity for festival peaks and promotional pushes, real-time visibility across channels, and reverse logistics for returns and damaged-stock management.
- [Paper & Pulp](https://www.dahnay.com/industries/paper-pulp): Production-cycle-aligned logistics for bulk pulp, paper reels, and sheet handling. Moisture-controlled logistics maintaining material integrity, high-volume distribution with consistent delivery performance, and multimodal efficiency across road, rail, and sea.
- [Construction Materials](https://www.dahnay.com/industries/construction-materials): Phased delivery aligned to project milestones for cement, aggregates, structural steel, rebar, scaffolding, and prefabricated modules. Heavy cargo with oversized trailers, permits, and lifting-equipment coordination; last-mile access for remote and constrained sites.

## Solutions

- [DahNAY Logistics](https://www.dahnay.com/solutions/logistics): The integrated 10-service freight and supply chain platform — air, sea, road, time-critical, project, reverse, customs, domestic trucking, last-mile, and e-commerce fulfilment delivered as a unified offering with end-to-end visibility.
- [DahNAY Lines](https://www.dahnay.com/solutions/lines): Specialised cargo solutions including dry cargo, refrigerated cargo (reefers), and specialised cargo (oversized, hazmat, project shipments) with carrier and shipping-line management.
- [DahNAY Ports & Infrastructure](https://www.dahnay.com/solutions/ports-infra): Warehousing infrastructure, Free Trade Warehousing Zones (FTWZ), and Container Freight Stations (CFS) for port-side operations and trade facilitation.

## Newsroom

- [All Newsroom](https://www.dahnay.com/newsroom): Latest updates across blog, news, and case studies.
- [Blog](https://www.dahnay.com/newsroom/blog): Industry insights and thought leadership on logistics, supply chain, and trade.
- [Case Studies](https://www.dahnay.com/newsroom/case-study): Customer outcomes and engagement deep-dives showing measurable results.
- [News](https://www.dahnay.com/newsroom/news): Company announcements, expansion updates, and press releases.
- [Medium](https://medium.com/@dahnaylogistics): Long-form articles and industry perspectives published by DahNAY Logistics on Medium.
`;

const STATIC_POST_DYNAMIC = `## Careers

- [Careers](https://www.dahnay.com/careers): Open roles and a people-first culture organised around three pillars — People-First Culture, One Team Many Voices, and Growth & Opportunity (mentorship, training, advancement pathways from day one). Great Place to Work Certified (2024–2026).

## Frequently Asked

- DahNAY operates across air, sea, road, customs, and project logistics with real-time shipment tracking and end-to-end visibility for clients.
- DahNAY handles oversized and heavy equipment using engineered project logistics, hydraulic axle trailers, and breakbulk/heavy-lift coordination.
- DahNAY has a global presence across 45+ offices in 19+ countries, with owned warehousing in the USA and UAE and CFS facilities in Chennai and Tuticorin.
- Quotes can be requested via the contact form at [https://www.dahnay.com/contact](https://www.dahnay.com/contact) or by emailing info@dahnay.com.

## Optional

- [Sitemap](https://www.dahnay.com/sitemap.xml): Machine-readable list of all indexed URLs.
- [Privacy Policy](https://www.dahnay.com/privacy-policy)
- [Terms & Conditions](https://www.dahnay.com/terms-conditions)
- [Cookie Policy](https://www.dahnay.com/cookie-policy)
- [Whistleblower Policy](https://www.dahnay.com/whistleblower-policy)
- [POSH Policy](https://www.dahnay.com/posh-policy)

## Contact

- Website: https://www.dahnay.com
- General enquiries: info@dahnay.com
- Careers: careers@dahnay.com
- International offices: reachus@dahnay.com
- Africa offices (Ghana, Congo): GH.admin@dahnaylogistics.com
- Phone: +91 44 4042 2888
- Headquarters: K.G.N Towers, Ethiraj Salai, Egmore, Chennai 600008, Tamil Nadu, India
- International offices: USA (New Jersey), Canada (Ontario), UK (London), UAE (Dubai, Sharjah, Ras Al Khaimah, Jebel Ali), Ghana (Accra), Kenya (Nairobi), Congo (Kinshasa), Sri Lanka (Colombo), Malaysia (Port Klang), Turkey (Istanbul), and additional offices across Bangladesh, Singapore, Thailand, Vietnam, Indonesia, and Hong Kong.
`;

// Flatten whitespace, escape markdown link breakers, truncate at word boundary.
function cleanExcerpt(text) {
  if (!text) return "";
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= EXCERPT_MAX) return flat;
  const cut = flat.slice(0, EXCERPT_MAX);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

function escapeTitle(title) {
  return (title || "").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function formatPostLine(post, segment) {
  const url = `${siteUrl}/newsroom/${segment}/${post.slug}`;
  const title = escapeTitle(post.title);
  const excerpt = cleanExcerpt(post.excerpt);
  const date = post.publishedAt ? post.publishedAt.slice(0, 10) : null;
  const datePart = date ? ` (${date})` : "";
  return excerpt
    ? `- [${title}](${url}): ${excerpt}${datePart}`
    : `- [${title}](${url})${datePart}`;
}

function buildDynamicSections(posts) {
  const grouped = { blog: [], "case-study": [] };
  for (const p of posts) {
    if (!p.slug) continue;
    const segment = POST_TYPE_PATH[p.postType];
    if (!segment) continue;
    grouped[p.postType].push(p);
  }

  const sortByDateDesc = (a, b) =>
    new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0);

  const blogLines = grouped.blog
    .sort(sortByDateDesc)
    .map((p) => formatPostLine(p, "blog"));
  const caseLines = grouped["case-study"]
    .sort(sortByDateDesc)
    .map((p) => formatPostLine(p, "case-study"));

  const sections = [];
  if (blogLines.length) {
    sections.push(`## Blog Posts\n\n${blogLines.join("\n")}`);
  }
  if (caseLines.length) {
    sections.push(`## Case Studies\n\n${caseLines.join("\n")}`);
  }
  return sections.length ? `${sections.join("\n\n")}\n\n` : "";
}

export async function GET() {
  let dynamicSections = "";
  try {
    const { posts } = await getBlogPosts({ limit: "all" });
    dynamicSections = buildDynamicSections(posts);
  } catch {
    // Ghost unreachable — serve the static portion only.
  }

  const body = `${STATIC_PRE_NEWSROOM}\n${dynamicSections}${STATIC_POST_DYNAMIC}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
