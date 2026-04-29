import { COMPANY } from "./company";
import { absoluteUrl, siteUrl } from "./helpers";

const TYPE_BY_POST_TYPE = {
  blog: "BlogPosting",
  news: "NewsArticle",
  "case-study": "Article",
};

export function articleSchema(post, { path, type = "blog" } = {}) {
  const articleType = TYPE_BY_POST_TYPE[type] || "Article";
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": articleType,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-post__title", ".blog-post__excerpt"],
    },
    headline: post.title,
    ...(post.excerpt && { description: post.excerpt }),
    ...(post.featuredImage?.url && { image: [post.featuredImage.url] }),
    ...(post.publishedAt && { datePublished: post.publishedAt }),
    ...(post.publishedAt && { dateModified: post.publishedAt }),
    author: {
      "@type": "Organization",
      name: COMPANY.brandName,
      url: siteUrl(),
    },
    publisher: { "@id": `${siteUrl()}/#organization` },
  };
}
