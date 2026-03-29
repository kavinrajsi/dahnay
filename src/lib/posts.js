// Data layer — reads from static JSON files in src/data/posts/

import { readFileSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "src/data/posts");

function readIndex() {
  try {
    return JSON.parse(readFileSync(join(DATA_DIR, "index.json"), "utf8"));
  } catch {
    return [];
  }
}

function readPost(slug) {
  try {
    return JSON.parse(readFileSync(join(DATA_DIR, `${slug}.json`), "utf8"));
  } catch {
    return null;
  }
}

export function getPosts(options = {}) {
  let posts = readIndex();

  if (options.filter) {
    // Support simple tag filter: "tag:case-study"
    const match = options.filter.match(/^tag:(.+)$/);
    if (match) {
      const tagSlug = match[1];
      posts = posts.filter((p) =>
        p.tags?.some((t) => t.slug === tagSlug)
      );
    }
  }

  const limit = options.limit === "all" ? posts.length : (options.limit ?? posts.length);
  return posts.slice(0, limit);
}

export function getPost(slug) {
  const post = readPost(slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

export function getPostsByTag(tag) {
  return getPosts({ filter: `tag:${tag}` });
}
