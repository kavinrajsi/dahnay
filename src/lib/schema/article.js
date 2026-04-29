import { COMPANY } from "./company";
import { absoluteUrl, siteUrl } from "./helpers";

const TYPE_BY_POST_TYPE = {
  blog: "BlogPosting",
  news: "NewsArticle",
  "case-study": "Article",
};

function authorSchema(post) {
  if (!post.authors?.length) {
    return {
      "@type": "Organization",
      name: COMPANY.brandName,
      url: siteUrl(),
    };
  }
  const persons = post.authors.map((a) => ({
    "@type": "Person",
    name: a.name,
    ...(a.url && { url: a.url }),
    ...(a.image && { image: a.image }),
    ...(a.bio && { description: a.bio }),
  }));
  return persons.length === 1 ? persons[0] : persons;
}

export function articleSchema(post, { path, type = "blog" } = {}) {
  const articleType = TYPE_BY_POST_TYPE[type] || "Article";
  const url = absoluteUrl(path);
  const dateModified = post.updatedAt || post.publishedAt;
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
    ...(dateModified && { dateModified }),
    author: authorSchema(post),
    publisher: { "@id": `${siteUrl()}/#organization` },
  };
}
