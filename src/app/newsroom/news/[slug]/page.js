import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost, getBlogPosts } from "@/lib/ghost";

export async function generateStaticParams() {
  try {
    const { posts } = await getBlogPosts({ limit: "all" });
    return posts
      .filter((p) => p.postType === "news")
      .map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

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
    return { title: "News - DahNAY" };
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

export default async function NewsPostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  const pageUrl = `https://www.dahnay.com/newsroom/news/${slug}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <div className="page page--blog-post">
      {/* Header */}
      <div className="blog-post__header container">
        <div className="blog-post__meta">
          <span className="blog-post__tag">News</span>
          {post.publishedAt && (
            <time className="blog-post__date" dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          )}
        </div>
        <div className="blog-post__intro">
          <h1 className="blog-post__title">{post.title}</h1>
          {post.excerpt && (
            <p className="blog-post__excerpt">{post.excerpt}</p>
          )}
        </div>
      </div>

      {/* Featured image — full width */}
      {post.featuredImage?.url && (
        <div className="blog-post__cover">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            width={1440}
            height={580}
            className="blog-post__cover-image"
            priority
          />
        </div>
      )}

      {/* Body */}
      <div className="blog-post__body container">
        {/* Share sidebar */}
        <aside className="blog-post__share">
          <span className="blog-post__share-label">Share:</span>
          <div className="blog-post__share-icons">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post__share-icon"
              aria-label="Share on Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2" />
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post__share-icon"
              aria-label="Share on X"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622 5.91-5.622z" fill="#000" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post__share-icon"
              aria-label="Share on LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="#0A66C2" />
                <rect x="2" y="9" width="4" height="12" fill="#0A66C2" />
                <circle cx="4" cy="4" r="2" fill="#0A66C2" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Article content from Ghost */}
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
