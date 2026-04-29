import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/ghost";

const FALLBACK_IMAGE = "/images/home/newsroom-1.png";

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
  if (post.postType === "case-study") return `/newsroom/case-study/${post.slug}`;
  if (post.postType === "news") return `/newsroom/news/${post.slug}`;
  return `/newsroom/blog/${post.slug}`;
}

export default async function HomeNewsroom() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: 3 });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable
  }

  if (posts.length === 0) return null;

  return (
    <section className="home-newsroom">
      <div className="container">
        <div className="home-newsroom__header">
          <div className="home-newsroom__header-left">
            <span className="home-newsroom__tag">Newsroom</span>
            <h2 className="home-newsroom__title">
              The latest buzz at {" "}
              <span className="home-newsroom__title-accent">DahNAY</span>
            </h2>
          </div>
          <Link href="/newsroom" className="button home-newsroom__cta">
            See more
          </Link>
        </div>

        <div className="home-newsroom__grid">
          {posts.map((post) => {
            const imageUrl = post.featuredImage?.url || FALLBACK_IMAGE;
            const imageAlt = post.featuredImage?.alt || post.title;
            return (
              <Link key={post.id} href={getPostHref(post)} className="news-card">
                <div className="news-card__image-wrapper">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={360}
                    height={216}
                    sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="news-card__image"
                  />
                  <span className="news-card__tag">{getTagLabel(post.postType)}</span>
                </div>
                <div className="news-card__body">
                  <p className="news-card__date">{formatDate(post.publishedAt)}</p>
                  <p className="news-card__title">{post.title}</p>
                  {post.excerpt && (
                    <p className="news-card__description">{post.excerpt}</p>
                  )}
                  <p className="news-card__cta">Learn more</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
