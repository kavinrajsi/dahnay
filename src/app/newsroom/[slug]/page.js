import { notFound } from "next/navigation";
import Image from "next/image";
import Banner from "@/components/sections/Banner";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts
      .filter((p) => !p.tags?.some((t) => t.slug === "case-study"))
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
      openGraph: post.feature_image
        ? { images: [{ url: post.feature_image }] }
        : undefined,
    };
  } catch {
    return { title: "Article - DahNAY" };
  }
}

function formatDate(dateStr) {
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

  const tag = post.tags?.[0];

  return (
    <div className="page page--article">
      <Banner
        title={post.title}
        desktopImage={
          post.feature_image || "/images/banners/banner-desktop-newsroom.png"
        }
      />

      <article className="article container">
        <header className="article__header">
          {tag && <span className="article__tag">{tag.name}</span>}
          <time className="article__date" dateTime={post.published_at}>
            {formatDate(post.published_at)}
          </time>
          {post.reading_time && (
            <span className="article__reading-time">
              {post.reading_time} min read
            </span>
          )}
        </header>

        {post.feature_image && (
          <div className="article__cover">
            <Image
              src={post.feature_image}
              alt={post.feature_image_alt || post.title}
              width={1200}
              height={630}
              className="article__cover-image"
              priority
            />
          </div>
        )}

        <div
          className="article__body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}
