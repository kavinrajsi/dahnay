import { notFound } from "next/navigation";
import Image from "next/image";
import Banner from "@/components/sections/Banner";
import { getBlogPost } from "@/lib/ghost";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    return {
      title: `${post.title} - DahNAY`,
      description: post.excerpt,
      openGraph: post.featuredImage?.url
        ? { images: [{ url: post.featuredImage.url }] }
        : undefined,
    };
  } catch {
    return { title: "Blog - DahNAY" };
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="page page--article">
      <Banner
        title={post.title}
        desktopImage={
          post.featuredImage?.url || "/images/banners/banner-desktop-newsroom.png"
        }
      />

      <article className="article container">
        <header className="article__header">
          <span className="article__tag">Blog</span>
          <time className="article__date" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && (
            <span className="article__reading-time">
              {post.readingTime} min read
            </span>
          )}
        </header>

        {post.featuredImage?.url && (
          <div className="article__cover">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
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
