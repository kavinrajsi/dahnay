import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/Banner";
import { getBlogPosts } from "@/lib/ghost";

export const metadata = {
  title: "Blog",
  description:
    "Insights, news, and perspectives from DahNAY on logistics, supply chain, and industry trends.",
  openGraph: {
    title: "Blog | DahNAY",
    description:
      "Insights, news, and perspectives from DahNAY on logistics, supply chain, and industry trends.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="news-card">
      {post.featuredImage?.url && (
        <div className="news-card__image-wrapper">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="news-card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="news-card__content">
        <span className="news-card__tag">Blog</span>
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

export default async function BlogPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: 12 });
    posts = data.posts;
  } catch {
    // Ghost unavailable
  }

  return (
    <div className="page page--blog">
      <Banner
        title="Blog"
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
