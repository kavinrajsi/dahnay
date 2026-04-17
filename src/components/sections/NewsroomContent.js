"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  { label: "All", value: "all" },
  { label: "Blog", value: "blog" },
  { label: "Case study", value: "case-study" },
  { label: "News", value: "news" },
];

const POSTS_PER_PAGE = 9;

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set();

  // Always show first page and neighbors around current
  pages.add(1);
  for (let i = Math.max(1, current - 1); i <= Math.min(total, current + 1); i++) pages.add(i);
  // Always show last 3 pages
  for (let i = Math.max(1, total - 2); i <= total; i++) pages.add(i);

  const sorted = [...pages].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) result.push("...");
    result.push(sorted[i]);
  }
  return result;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

function getPostHref(post) {
  if (post.postType === "case-study") return `/newsroom/case-study/${post.slug}`;
  if (post.postType === "news") return `/newsroom/news/${post.slug}`;
  return `/newsroom/blog/${post.slug}`;
}

function getTagLabel(postType) {
  if (postType === "case-study") return "Case Study";
  if (postType === "blog") return "Blog";
  return "News";
}

function FeaturedPost({ post }) {
  const imageUrl = post.featuredImage?.url;
  const imageAlt = post.featuredImage?.alt || post.title;

  return (
    <Link href={getPostHref(post)} className="newsroom-featured">
      {imageUrl && (
        <div className="newsroom-featured__image-wrapper">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="newsroom-featured__image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="newsroom-featured__badge">
            {getTagLabel(post.postType)}
          </span>
        </div>
      )}
      <div className="newsroom-featured__content">
        <div className="newsroom-featured__text">
          <h3 className="newsroom-featured__title">{post.title}</h3>
          {post.excerpt && (
            <p className="newsroom-featured__excerpt">{post.excerpt}</p>
          )}
          <span className="newsroom-featured__link">Learn more</span>
        </div>
        <time className="newsroom-featured__date" dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}

function NewsCard({ post }) {
  const imageUrl = post.featuredImage?.url;
  const imageAlt = post.featuredImage?.alt || post.title;

  return (
    <Link href={getPostHref(post)} className="news-card">
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
}

export default function NewsroomContent({ posts, title = "Newsroom", filterType }) {
  const [activeTab, setActiveTab] = useState(filterType || "all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    let result = posts;
    if (activeTab !== "all") {
      result = result.filter((p) => p.postType === activeTab);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, activeTab, search]);

  const totalPages = Math.max(1, Math.ceil((filtered.length - 1) / POSTS_PER_PAGE));
  const featuredPost = filtered[0];
  const paginatedPosts = filtered.slice(
    1 + (currentPage - 1) * POSTS_PER_PAGE,
    1 + currentPage * POSTS_PER_PAGE
  );

  const handleTabChange = (value) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="newsroom container" ref={sectionRef}>
      <div className="newsroom__header">
        <div className="newsroom__header-left">
          <h1 className="newsroom__title">{title}</h1>
          {!filterType && (
            <div className="newsroom__tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  className={`newsroom__tab${activeTab === tab.value ? " newsroom__tab--active" : ""}`}
                  onClick={() => handleTabChange(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="newsroom__search">
          <svg className="newsroom__search-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.333 11.667a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667ZM13 13l-2.9-2.9" stroke="#6D6F71" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            className="newsroom__search-input"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="newsroom__empty">No articles found.</p>
      ) : (
        <div className="newsroom__content">
          {featuredPost && <FeaturedPost post={featuredPost} />}

          {paginatedPosts.length > 0 && (
            <div className="newsroom__grid">
              {paginatedPosts.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="newsroom__pagination">
              <button
                className="newsroom__page-arrow"
                disabled={currentPage === 1}
                onClick={() => { setCurrentPage((p) => p - 1); scrollToTop(); }}
                aria-label="Previous page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="newsroom__page-numbers">
                {getPageNumbers(currentPage, totalPages).map((item, i) =>
                  item === "..." ? (
                    <span key={`ellipsis-${i}`} className="newsroom__page-ellipsis">...</span>
                  ) : (
                    <button
                      key={item}
                      className={`newsroom__page-num${currentPage === item ? " newsroom__page-num--active" : ""}`}
                      onClick={() => { setCurrentPage(item); scrollToTop(); }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
              <button
                className="newsroom__page-arrow"
                disabled={currentPage === totalPages}
                onClick={() => { setCurrentPage((p) => p + 1); scrollToTop(); }}
                aria-label="Next page"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      <div className="newsroom-cta">
        <div className="newsroom-cta__newsletter">
          <p className="newsroom-cta__heading">
            Get the latest updates, success stories, and industry trends from DahNAY straight to your inbox.
          </p>
          <form className="newsroom-cta__form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsroom-cta__input-group">
              <svg className="newsroom-cta__mail-icon" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#6D6F71"/>
              </svg>
              <input
                type="email"
                className="newsroom-cta__input"
                placeholder="Enter your work email"
              />
              <button type="submit" className="newsroom-cta__send">Send</button>
            </div>
          </form>
        </div>
        <div className="newsroom-cta__social">
          <div className="newsroom-cta__social-text">
            <p className="newsroom-cta__social-title">Follow us</p>
            <p className="newsroom-cta__social-desc">Get the latest news and travel inspiration.</p>
          </div>
          <div className="newsroom-cta__social-icons">
            <a href="https://x.com/DahNAY_Official" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M14.855 10.588L24.137 0h-2.2l-8.06 9.192L7.55 0H0l9.732 13.89L0 25h2.2l8.51-9.705L17.45 25H25L14.855 10.588Zm-3.013 3.437l-.987-1.385L2.98 1.624h3.38l6.336 8.893.987 1.385 8.235 11.561h-3.38l-6.716-9.438Z" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/DahnayLogisticsofficial/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M25 12.5C25 5.596 19.404 0 12.5 0S0 5.596 0 12.5c0 6.238 4.57 11.41 10.547 12.348v-8.735H7.373V12.5h3.174V9.746c0-3.134 1.867-4.865 4.724-4.865 1.369 0 2.8.244 2.8.244v3.077h-1.577c-1.554 0-2.038.964-2.038 1.953V12.5h3.467l-.554 3.613h-2.913v8.735C20.43 23.91 25 18.738 25 12.5Z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
