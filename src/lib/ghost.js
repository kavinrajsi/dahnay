import GhostContentAPI from "@tryghost/content-api";

const ghost = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.0",
});

export async function getPosts(options = {}) {
  return ghost.posts.browse({
    limit: "all",
    include: "tags,authors",
    ...options,
  });
}

export async function getPost(slug) {
  return ghost.posts.read({ slug }, { include: "tags,authors" });
}

export async function getPages(options = {}) {
  return ghost.pages.browse({
    limit: "all",
    ...options,
  });
}

export async function getPage(slug) {
  return ghost.pages.read({ slug });
}

export async function getPostsByTag(tag, options = {}) {
  return ghost.posts.browse({
    filter: `tag:${tag}`,
    include: "tags,authors",
    ...options,
  });
}
