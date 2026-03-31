const GHOST_URL = process.env.GHOST_URL;
const GHOST_KEY = process.env.GHOST_CONTENT_API_KEY;

function ghostUrl(path, params = {}) {
  const url = new URL(`${GHOST_URL}/ghost/api/content/${path}`);
  url.searchParams.set("key", GHOST_KEY);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  return url.toString();
}

function normalizePost(p) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.custom_excerpt || p.excerpt,
    html: p.html,
    featuredImage: p.feature_image
      ? { url: p.feature_image, alt: p.feature_image_alt || p.title }
      : null,
    publishedAt: p.published_at,
    readingTime: p.reading_time,
    tags: p.tags?.map((t) => ({ tag: t.slug, label: t.name })) ?? [],
  };
}

export async function getBlogPosts({ limit = 12, page = 1 } = {}) {
  const url = ghostUrl("posts/", {
    include: "tags",
    limit,
    page,
    fields:
      "id,slug,title,custom_excerpt,excerpt,feature_image,feature_image_alt,published_at,reading_time",
  });
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Ghost API error: ${res.status}`);
  const { posts, meta } = await res.json();
  return { posts: posts.map(normalizePost), meta };
}

export async function getBlogPost(slug) {
  const url = ghostUrl(`posts/slug/${slug}/`, { include: "tags" });
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Ghost API error: ${res.status}`);
  const { posts } = await res.json();
  if (!posts?.length) throw new Error(`Post not found: ${slug}`);
  return normalizePost(posts[0]);
}
