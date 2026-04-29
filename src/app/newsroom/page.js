// Figma: node-id=616-4933
import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, webPageSchema } from "@/lib/schema";

export const metadata = {
  title: "Newsroom",
  description:
    "Latest news, insights, and case studies from DahNAY on logistics, supply chain trends, and industry developments.",
  openGraph: {
    title: "Newsroom | DahNAY",
    description:
      "Latest news, insights, and case studies from DahNAY on logistics, supply chain trends, and industry developments.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
};

export default async function NewsroomPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: "all" });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable or no posts yet
  }

  const schemas = [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Newsroom", path: "/newsroom" },
    ]),
    webPageSchema({
      name: "Newsroom",
      description: metadata.description,
      path: "/newsroom",
      type: "CollectionPage",
    }),
  ];

  return (
    <div className="page page--newsroom">
      <JsonLd data={schemas} />
      <Banner
        title="Newsroom"
        desktopImage="/images/banners/banner-desktop-newsroom.png"
      />
      <NewsroomContent posts={posts} />
    </div>
  );
}
