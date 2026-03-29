// Data layer — reads from Payload CMS via local API (server-side only)

import config from "@payload-config";
import { getPayload } from "payload";

async function getPayloadClient() {
  return getPayload({ config });
}

export async function getPosts(options = {}) {
  const payload = await getPayloadClient();

  const where = { status: { equals: "published" } };

  if (options.filter) {
    const match = options.filter.match(/^tag:(.+)$/);
    if (match) {
      // Tag filter not directly supported — filter client-side after fetch
      const result = await payload.find({
        collection: "posts",
        where,
        limit: 100,
        sort: "-publishedAt",
      });
      const tagSlug = match[1];
      return result.docs.filter((p) =>
        p.tags?.some((t) => t.tag === tagSlug)
      );
    }
  }

  const limit = options.limit === "all" ? 0 : (options.limit ?? 0);

  const result = await payload.find({
    collection: "posts",
    where,
    limit,
    sort: "-publishedAt",
  });

  return result.docs;
}

export async function getPost(slug) {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "posts",
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: "published" } },
      ],
    },
    limit: 1,
  });

  if (!result.docs.length) throw new Error(`Post not found: ${slug}`);
  return result.docs[0];
}

export async function getPostsByTag(tag) {
  return getPosts({ filter: `tag:${tag}` });
}

export async function getPostsByType(postType, options = {}) {
  const payload = await getPayloadClient();

  const limit = options.limit === "all" ? 0 : (options.limit ?? 0);

  const result = await payload.find({
    collection: "posts",
    where: {
      and: [
        { postType: { equals: postType } },
        { status: { equals: "published" } },
      ],
    },
    limit,
    sort: "-publishedAt",
  });

  return result.docs;
}
