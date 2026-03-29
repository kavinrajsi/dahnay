// Figma: node-id=616-4933
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/Banner";
import { getPosts } from "@/lib/posts";

export const metadata = { title: "Newsroom - DahNAY" };

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }) {
  const isCaseStudy = post.postType === "case-study";
  const href = isCaseStudy
    ? `/newsroom/case-study/${post.slug}`
    : `/newsroom/${post.slug}`;

  const imageUrl = post.featuredImage?.url;
  const imageAlt = post.featuredImage?.alt || post.title;
  const tagLabel = post.postType === "case-study"
    ? "Case Study"
    : post.postType === "blog"
    ? "Blog"
    : "Newsroom";

  return (
    <Link href={href} className="news-card">
      {imageUrl && (
        <div className="news-card__image-wrapper">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="news-card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="news-card__content">
        <span className="news-card__tag">{tagLabel}</span>
        <h3 className="news-card__title">{post.title}</h3>
        {post.excerpt && (
          <p className="news-card__excerpt">{post.excerpt}</p>
        )}
        <time className="news-card__date" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
      </div>
    </Link>
  );
}

export default async function NewsroomPage() {
  let posts = [];
  try {
    posts = await getPosts({ limit: 12 });
  } catch {
    // CMS unavailable or no posts yet
  }

  return (
    <div className="page page--newsroom">
      <Banner
        title="Newsroom"
        desktopImage="/images/banners/banner-desktop-newsroom.png"
      />

      <section className="newsroom container">
        {posts.length === 0 ? (
          <p className="newsroom__empty">No articles published yet.</p>
        ) : (
          <div className="newsroom__grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
