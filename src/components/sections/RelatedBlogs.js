import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/ghost";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

function getTagLabel(postType) {
  if (postType === "case-study") return "Case Study";
  if (postType === "blog") return "Blog";
  return "News";
}

function getPostHref(post) {
  return post.postType === "case-study"
    ? `/newsroom/case-study/${post.slug}`
    : `/newsroom/${post.slug}`;
}

export default async function RelatedBlogs() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: 3 });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable
  }

  if (posts.length === 0) return null;

  return (
    <section className="related-blogs">
      <div className="container">
        <div className="related-blogs__header">
          <div className="related-blogs__header-left">
            <span className="related-blogs__tag">Related Blogs</span>
            <h2 className="related-blogs__title">
              The latest in <span className="related-blogs__accent">logistics</span>
            </h2>
            <p className="related-blogs__desc">
              News, views and case studies that keep your business in the know.
            </p>
          </div>
          <Link href="/newsroom" className="related-blogs__btn">
            See more
          </Link>
        </div>

        <div className="related-blogs__grid">
          {posts.map((post) => {
            const imageUrl = post.featuredImage?.url;
            const imageAlt = post.featuredImage?.alt || post.title;

            return (
              <Link key={post.id} href={getPostHref(post)} className="news-card">
                <div className="news-card__image-wrapper">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="news-card__image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <span className="news-card__badge">
                    {getTagLabel(post.postType)}
                  </span>
                </div>
                <div className="news-card__content">
                  <div className="news-card__info">
                    <time className="news-card__date" dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <h3 className="news-card__title">{post.title}</h3>
                    {post.excerpt && (
                      <p className="news-card__excerpt">{post.excerpt}</p>
                    )}
                  </div>
                  <span className="news-card__link">Learn more</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
