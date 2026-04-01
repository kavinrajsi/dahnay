import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "News",
  description:
    "Stay updated with the latest news from DahNAY on logistics, supply chain developments, and industry milestones.",
  openGraph: {
    title: "News | DahNAY",
    description:
      "Stay updated with the latest news from DahNAY on logistics, supply chain developments, and industry milestones.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
};

export default async function NewsPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: "all" });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable
  }

  return (
    <div className="page page--news">
      <Banner
        title="News"
        desktopImage="/images/banners/banner-desktop-newsroom.png"
      />
      <NewsroomContent posts={posts} title="News" filterType="news" />
    </div>
  );
}
