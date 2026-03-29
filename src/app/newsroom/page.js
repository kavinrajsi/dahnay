// Figma: node-id=616-4933
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/Banner";
import { getPosts } from "@/lib/ghost";

export const metadata = { title: "Newsroom - DahNAY" };

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }) {
  const tag = post.tags?.[0];
  const isCaseStudy = post.tags?.some((t) => t.slug === "case-study");
  const href = isCaseStudy
    ? `/newsroom/case-study/${post.slug}`
    : `/newsroom/${post.slug}`;

  return (
    <Link href={href} className="news-card">
      {post.feature_image && (
        <div className="news-card__image-wrapper">
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt || post.title}
            fill
            className="news-card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="news-card__content">
        {tag && <span className="news-card__tag">{tag.name}</span>}
        <h3 className="news-card__title">{post.title}</h3>
        {post.excerpt && (
          <p className="news-card__excerpt">{post.excerpt}</p>
        )}
        <time className="news-card__date" dateTime={post.published_at}>
          {formatDate(post.published_at)}
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
    // Ghost not reachable or no posts yet
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
