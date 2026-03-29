import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const signature = request.headers.get("x-ghost-signature");

  if (
    process.env.GHOST_WEBHOOK_SECRET &&
    signature !== process.env.GHOST_WEBHOOK_SECRET
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const post = body?.post?.current ?? body?.post?.previous;
  const page = body?.page?.current ?? body?.page?.previous;

  if (post?.slug) {
    revalidatePath(`/newsroom/${post.slug}`);
  }
  if (page?.slug) {
    revalidatePath(`/${page.slug}`);
  }

  revalidateTag("ghost-posts", "max");
  revalidatePath("/newsroom");

  return NextResponse.json({ revalidated: true, ts: Date.now() });
}
