// Figma: node-id=616-4933
import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import NewsroomContent from "@/components/sections/NewsroomContent";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, webPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Newsroom",
  description:
    "Latest news, insights, and case studies from DahNAY on logistics, supply chain trends, and industry developments.",
  canonical: "/newsroom",
  image: "/images/banners/banner-desktop-newsroom.png",
});

export default async function NewsroomPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: "all" });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable or no posts yet
  }

  const trail = [
    { name: "Home", path: "/" },
    { name: "Newsroom", path: "/newsroom" },
  ];
  const schemas = [
    breadcrumbList(trail),
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
      <Breadcrumb trail={trail} />
      <NewsroomContent posts={posts} />
    </div>
  );
}
