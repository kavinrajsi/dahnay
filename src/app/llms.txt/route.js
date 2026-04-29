import { getBlogPosts } from "@/lib/ghost";
import servicesData from "@/data/services/index.json";
import industriesData from "@/data/industries/index.json";

export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

const EXCERPT_MAX = 160;

const POST_TYPE_PATH = {
  blog: "blog",
  "case-study": "case-study",
};

// Inline-coded FAQs that aren't in src/data JSON. Hybrid model (Approach C):
// these are duplicated from their respective page files and will drift if not
// kept in sync. When refactoring, move these into a shared JSON source.
const HOME_FAQS = [
  { question: "Why choose DahNAY as a growth partner?", answer: "DahNAY acts as a strategic logistics partner by offering scalable supply chain solutions, global freight expertise and technology-driven visibility. Businesses choose DahNAY to optimise costs, improve delivery timelines and support long-term growth." },
  { question: "Can DahNAY handle oversized or heavy equipment?", answer: "Yes, DahNAY specialises in handling oversized cargo, heavy equipment and project logistics. From route surveys to heavy-lift operations, DahNAY ensures safe and compliant transportation of out-of-gauge and breakbulk cargo." },
  { question: "Does DahNAY have a global presence?", answer: "DahNAY operates across key global trade routes with a strong presence in India, the UAE and the USA. Through a network of international partners, DahNAY ensures seamless global logistics and cross-border shipping solutions." },
  { question: "Does DahNAY offer shipment tracking?", answer: "Yes, DahNAY provides real-time shipment tracking and end-to-end visibility. Clients can monitor cargo movement, receive updates and stay informed throughout the shipping process." },
  { question: "How do I request a shipping quote from DahNAY?", answer: "You can request a shipping quote by contacting DahNAY through the website, email or customer support team. Share shipment details such as cargo type, volume, origin and destination to receive a customised logistics quote." },
  { question: "What makes DahNAY different from other logistics providers?", answer: "DahNAY stands out through its customer-centric approach, global network, customised logistics solutions and strong focus on transparency. The company combines operational expertise with technology to deliver reliable and efficient supply chain services." },
];

const ABOUT_FAQS = [
  { question: "Is DahNAY only a freight forwarding company?", answer: "No, DahNAY is an integrated logistics solutions provider. In addition to freight forwarding, DahNAY offers warehousing, customs brokerage, consolidation, project cargo handling and last mile delivery." },
  { question: "How long has DahNAY been in business?", answer: "DahNAY has built a strong presence in the logistics industry over the years, delivering reliable freight and supply chain solutions across global markets." },
  { question: "Where is DahNAY headquartered?", answer: "DahNAY is headquartered in India, with strategic operations and partnerships across global markets to support international logistics." },
  { question: "Is DahNAY involved in sustainability or CSR initiatives?", answer: "DahNAY is committed to responsible logistics practices by optimising routes, reducing inefficiencies and supporting sustainable supply chain operations wherever possible." },
  { question: "Who leads DahNAY?", answer: "DahNAY was founded by Mr. Murali Babu. Since its inception, the company has shown remarkable growth, evolving from a single person operation into a large scale international logistics organization with a global presence." },
  { question: "What values guide DahNAY?", answer: "DahNAY is guided by integrity, curiosity, empathy, responsibility, and inclusion. These values shape every logistics solution and client partnership." },
];

const INDUSTRIES_INDEX_FAQS = [
  { question: "Do you handle time-critical shipments?", answer: "Yes. Our solutions support industries operating on strict production and project timelines." },
  { question: "Can DahNAY manage oversized and project cargo?", answer: "Yes. We specialise in OOG and large-scale industrial shipments." },
  { question: "Which geographies do you serve?", answer: "We support domestic and international movements across key global markets." },
  { question: "Do you manage end-to-end logistics?", answer: "Yes. From freight forwarding to customs to last-mile distribution." },
];

const LOGISTICS_FAQS = [
  { question: "What is the DahNAY logistics platform?", answer: "The DahNAY logistics platform is an end-to-end supply chain management system providing real-time shipment tracking, automated documentation, freight booking, and visibility across air, sea, road, and warehouse operations. It connects shippers with consolidated logistics data through a single interface for planning, execution, and reporting." },
  { question: "How does DahNAY's logistics platform improve shipment visibility?", answer: "DahNAY's platform delivers real-time shipment tracking with milestone alerts, geo-location updates, exception notifications, and consolidated dashboards across modes and carriers. Customers get a single view of all shipments in transit, enabling proactive issue management and accurate ETAs for downstream operations and customers." },
  { question: "Can the DahNAY logistics platform integrate with ERP systems?", answer: "Yes, DahNAY's logistics platform supports integration with enterprise systems including ERP, WMS, and TMS platforms via standard APIs and EDI connections. This enables automated shipment booking, invoice reconciliation, and data flow between supply chain partners without manual entry." },
  { question: "Who can use the DahNAY logistics platform?", answer: "Manufacturers, exporters, importers, distributors, and 3PL clients across automotive, FMCG, retail, energy, and construction sectors use DahNAY's logistics platform. The system scales from single-shipment operators to enterprise customers with multi-country, multi-mode supply chains, with role-based access for shippers, carriers, and consignees." },
];

const LINES_FAQS = [
  { question: "What is DahNAY Lines?", answer: "DahNAY Lines is a carrier and shipping-line management solution that streamlines container booking, sailing schedules, freight documentation, and rate management across global ocean and inland networks. It connects shippers with vetted ocean carriers through a unified booking interface and consolidated commercial workflow." },
  { question: "How does DahNAY Lines simplify container booking?", answer: "DahNAY Lines streamlines ocean container booking with carrier rate comparison, real-time space availability, sailing schedule consolidation, and one-click booking workflows. Shippers and freight forwarders save planning time, secure capacity during peak demand, and access pre-negotiated rates with major shipping lines." },
  { question: "Does DahNAY Lines support both FCL and LCL bookings?", answer: "Yes, DahNAY Lines supports Full Container Load (FCL) for dedicated container shipments and Less than Container Load (LCL) for shared container space. Shippers can compare carrier options, route alternatives, and rates for both formats through the same booking interface, optimising freight cost and transit time." },
  { question: "Which shipping lines does DahNAY work with?", answer: "DahNAY Lines partners with major global ocean carriers and regional feeder operators serving India, the UAE, the USA, Southeast Asia, and major African and European trade lanes. Through these partnerships, customers access guaranteed space allocations, flexible rate structures, and reliable transit times." },
];

const PORTS_FAQS = [
  { question: "What does DahNAY Ports and Infrastructure cover?", answer: "DahNAY Ports and Infrastructure provides cargo handling efficiency, terminal operations support, yard management, and equipment optimisation for ports and inland container depots. We help port operators, ICD facilities, and logistics hubs improve container throughput, reduce dwell times, and streamline gate-in and gate-out processes." },
  { question: "How does DahNAY improve port and terminal operations?", answer: "DahNAY improves port operations through yard layout planning, equipment scheduling, gate management, and operational analytics. We work with terminals to optimise container moves per hour, reduce truck turn times, and improve berth productivity, helping port operators handle increased volumes without major infrastructure expansion." },
  { question: "Does DahNAY support inland container depots and dry ports?", answer: "Yes, DahNAY supports inland container depots, dry ports, and container freight stations with operational consulting, equipment optimisation, and terminal management services. We help inland facilities serve as efficient extensions of major seaports, enabling faster customs clearance and seamless intermodal transfers between sea, rail, and road." },
  { question: "Where does DahNAY operate port and infrastructure services?", answer: "DahNAY supports port and infrastructure operations primarily across India, with strong presence at major container ports including Chennai, Mumbai, Krishnapatnam, and Tuticorin. Our 47 offices in 19+ countries enable us to extend port operational expertise to client facilities across South Asia, the Middle East, and Africa." },
];

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

const STATIC_CAREERS = `## Careers

- [Careers](https://www.dahnay.com/careers): Open roles and a people-first culture organised around three pillars — People-First Culture, One Team Many Voices, and Growth & Opportunity (mentorship, training, advancement pathways from day one). Great Place to Work Certified (2024–2026).
`;

const STATIC_TAIL = `## Optional

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

function formatFAQBlock(items) {
  return items
    .map(({ question, answer }) => `**Q: ${question}**\nA: ${answer}`)
    .join("\n\n");
}

function formatFAQSubsection(title, url, items) {
  if (!items?.length) return null;
  return `### ${title} (${url})\n\n${formatFAQBlock(items)}`;
}

function buildFAQSection() {
  const subs = [
    formatFAQSubsection("Home", siteUrl, HOME_FAQS),
    formatFAQSubsection("About DahNAY", `${siteUrl}/about`, ABOUT_FAQS),
    formatFAQSubsection("All Industries", `${siteUrl}/industries`, INDUSTRIES_INDEX_FAQS),
    formatFAQSubsection("DahNAY Logistics Platform", `${siteUrl}/solutions/logistics`, LOGISTICS_FAQS),
    formatFAQSubsection("DahNAY Lines", `${siteUrl}/solutions/lines`, LINES_FAQS),
    formatFAQSubsection("DahNAY Ports & Infrastructure", `${siteUrl}/solutions/ports-infra`, PORTS_FAQS),
  ];

  for (const slug of Object.keys(servicesData)) {
    const data = servicesData[slug];
    subs.push(
      formatFAQSubsection(
        data?.banner?.title || slug,
        `${siteUrl}/service/${slug}`,
        data?.faq?.items,
      ),
    );
  }

  for (const slug of Object.keys(industriesData)) {
    if (slug === "shared") continue;
    const data = industriesData[slug];
    subs.push(
      formatFAQSubsection(
        `${data?.banner?.title || slug} Logistics`,
        `${siteUrl}/industries/${slug}`,
        data?.faq?.items,
      ),
    );
  }

  const body = subs.filter(Boolean).join("\n\n");
  return body ? `## Frequently Asked\n\n${body}\n\n` : "";
}

export async function GET() {
  let dynamicSections = "";
  try {
    const { posts } = await getBlogPosts({ limit: "all" });
    dynamicSections = buildDynamicSections(posts);
  } catch {
    // Ghost unreachable — serve everything except blog/case-study posts.
  }

  const faqSection = buildFAQSection();

  const body =
    `${STATIC_PRE_NEWSROOM}\n` +
    `${dynamicSections}` +
    `${STATIC_CAREERS}\n` +
    `${faqSection}` +
    `${STATIC_TAIL}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
