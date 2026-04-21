import { getBlogPosts } from "@/lib/ghost";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

const services = [
  "air-freight",
  "customs-clearance",
  "domestic-trucking",
  "ecommerce-fulfilment",
  "last-mile-delivery",
  "project-logistics",
  "reverse-logistics",
  "road-transportation",
  "sea-freight",
  "time-critical-delivery",
];

const industries = [
  "automotive",
  "construction-materials",
  "energy-oil-gas",
  "fmcg",
  "machinery",
  "natural-rubber",
  "paper-pulp",
  "renewables",
  "retail-apparel",
  "white-goods",
];

const POST_TYPE_PATH = {
  blog: "blog",
  "case-study": "case-study",
  news: "news",
};

export default async function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/careers", priority: 0.7, changeFrequency: "weekly" },
    { url: "/newsroom", priority: 0.7, changeFrequency: "weekly" },
    { url: "/newsroom/blog", priority: 0.7, changeFrequency: "weekly" },
    { url: "/newsroom/case-study", priority: 0.7, changeFrequency: "weekly" },
    { url: "/newsroom/news", priority: 0.7, changeFrequency: "weekly" },
    { url: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { url: "/service", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions", priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/lines", priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/logistics", priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/ports-infra", priority: 0.8, changeFrequency: "monthly" },
    { url: "/esg-csr", priority: 0.6, changeFrequency: "monthly" },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
    { url: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/posh-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/whistleblower-policy", priority: 0.2, changeFrequency: "yearly" },
  ].map(({ url, ...rest }) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    ...rest,
  }));

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

  return [...staticPages, ...servicePages, ...industryPages, ...postPages];
}
