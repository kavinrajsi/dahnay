import { getBlogPosts } from "@/lib/ghost";
import { JOBS } from "@/data/careers/jobs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

// Order of services, industries, and the sitemap return below mirrors the
// header nav in src/components/layout/Header.js — keep in sync when nav changes.
const services = [
  "air-freight",
  "sea-freight",
  "road-transportation",
  "time-critical-delivery",
  "project-logistics",
  "reverse-logistics",
  "customs-clearance",
  "domestic-trucking",
  "last-mile-delivery",
  "ecommerce-fulfilment",
];

const industries = [
  "automotive",
  "renewables",
  "machinery",
  "retail-apparel",
  "natural-rubber",
  "white-goods",
  "energy-oil-gas",
  "food-agro",
  "construction-materials",
  "fmcg",
  "paper-pulp",
];

const POST_TYPE_PATH = {
  blog: "blog",
  "case-study": "case-study",
  news: "news",
};

export default async function sitemap() {
  const now = new Date();
  const staticEntry = ({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const servicePages = services.map((slug) => ({
    url: `${siteUrl}/service/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const industryPages = industries.map((slug) => ({
    url: `${siteUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // TODO: map each job in JOBS to a sitemap entry for /careers/{slug}.
  // Trade-offs to consider:
  //   - priority: job postings are high-intent SEO targets — higher than blog?
  //   - changeFrequency: postings don't change often, but freshness signals
  //     "still hiring". What cadence reflects your hiring pipeline?
  //   - lastModified: use job.updatedAt if present, else job.postedAt, else now.
  //   - guard: skip entries without a slug.
  const careerPages = JOBS
    .map((job) => {
      // TODO: return a sitemap entry shaped like the other *Pages arrays above,
      // or return null to skip.
      return null;
    })
    .filter(Boolean);

  let postPages = [];
  try {
    const { posts } = await getBlogPosts({ limit: "all" });
    postPages = posts
      .map((p) => {
        const segment = POST_TYPE_PATH[p.postType];
        if (!segment || !p.slug) return null;
        return {
          url: `${siteUrl}/newsroom/${segment}/${p.slug}`,
          lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
          changeFrequency: "monthly",
          priority: 0.6,
        };
      })
      .filter(Boolean);
  } catch {
    // Ghost unreachable at build time — ship the static portion.
  }

  return [
    staticEntry({ url: "/", priority: 1.0, changeFrequency: "weekly" }),

    staticEntry({ url: "/solutions/logistics", priority: 0.8, changeFrequency: "monthly" }),
    ...servicePages,
    staticEntry({ url: "/solutions/lines", priority: 0.8, changeFrequency: "monthly" }),
    staticEntry({ url: "/solutions/ports-infra", priority: 0.8, changeFrequency: "monthly" }),

    staticEntry({ url: "/industries", priority: 0.9, changeFrequency: "monthly" }),
    ...industryPages,

    staticEntry({ url: "/about", priority: 0.8, changeFrequency: "monthly" }),
    staticEntry({ url: "/esg-csr", priority: 0.6, changeFrequency: "monthly" }),
    staticEntry({ url: "/careers", priority: 0.7, changeFrequency: "weekly" }),
    ...careerPages,

    staticEntry({ url: "/newsroom", priority: 0.7, changeFrequency: "weekly" }),
    staticEntry({ url: "/newsroom/blog", priority: 0.7, changeFrequency: "weekly" }),
    staticEntry({ url: "/newsroom/case-study", priority: 0.7, changeFrequency: "weekly" }),
    staticEntry({ url: "/newsroom/news", priority: 0.7, changeFrequency: "weekly" }),
    ...postPages,

    staticEntry({ url: "/contact", priority: 0.9, changeFrequency: "monthly" }),

    staticEntry({ url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" }),
    staticEntry({ url: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" }),
    staticEntry({ url: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" }),
    staticEntry({ url: "/posh-policy", priority: 0.2, changeFrequency: "yearly" }),
    staticEntry({ url: "/whistleblower-policy", priority: 0.2, changeFrequency: "yearly" }),
  ];
}
