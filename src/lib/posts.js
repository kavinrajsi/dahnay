import posts from "@/data/posts/index.json";

const published = posts.filter((p) => p.status === "published");

export async function getPosts(options = {}) {
  let result = [...published];

  if (options.filter) {
    const match = options.filter.match(/^tag:(.+)$/);
    if (match) {
      const tagSlug = match[1];
      result = result.filter((p) =>
        p.tags?.some((t) => t.tag === tagSlug)
      );
    }
  }

  result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const limit = options.limit === "all" ? 0 : (options.limit ?? 0);
  if (limit > 0) result = result.slice(0, limit);

  return result;
}

export async function getPost(slug) {
  const post = published.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

export async function getPostsByTag(tag) {
  return getPosts({ filter: `tag:${tag}` });
}

export async function getPostsByType(postType, options = {}) {
  let result = published.filter((p) => p.postType === postType);

  result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const limit = options.limit === "all" ? 0 : (options.limit ?? 0);
  if (limit > 0) result = result.slice(0, limit);

  return result;
}
