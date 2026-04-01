import { notFound } from "next/navigation";
import Image from "next/image";
import Banner from "@/components/sections/Banner";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts
      .filter((p) => p.postType !== "case-study")
      .map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: `${post.title} - DahNAY`,
      description: post.excerpt,
      openGraph: post.featuredImage?.url
        ? { images: [{ url: post.featuredImage.url }] }
        : undefined,
    };
  } catch {
    return { title: "Article - DahNAY" };
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  const imageUrl = post.featuredImage?.url;
  const imageAlt = post.featuredImage?.alt || post.title;

  return (
    <div className="page page--article">
      <Banner
        title={post.title}
        desktopImage={imageUrl || "/images/banners/banner-desktop-newsroom.png"}
      />

      <article className="article container">
        <header className="article__header">
          <span className="article__tag">
            {post.postType === "blog" ? "Blog" : "Newsroom"}
          </span>
          <time className="article__date" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && (
            <span className="article__reading-time">
              {post.readingTime} min read
            </span>
          )}
        </header>

        {imageUrl && (
          <div className="article__cover">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1200}
              height={630}
              sizes="100vw"
              className="article__cover-image"
              priority
            />
          </div>
        )}

        <div className="article__body">
          {post.excerpt && <p className="article__excerpt">{post.excerpt}</p>}
        </div>
      </article>
    </div>
  );
}
