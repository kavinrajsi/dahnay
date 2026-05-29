import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "Freight Forwarding & Supply Chain News Updates - DahNAY",
  description:
    "Stay updated with DahNAY freight news, India EXIM trade alerts, supply chain disruption reports, and logistics announcements from global trade community.",
  alternates: {
    canonical: "/newsroom/news",
  },
  openGraph: {
    title: "Freight Forwarding & Supply Chain News Updates - DahNAY",
    description:
      "Stay updated with DahNAY freight news, India EXIM trade alerts, supply chain disruption reports, and logistics announcements from global trade community.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Freight Forwarding & Supply Chain News Updates - DahNAY",
    description:
      "Stay updated with DahNAY freight news, India EXIM trade alerts, supply chain disruption reports, and logistics announcements from global trade community.",
    images: ["/images/banners/banner-desktop-newsroom.png"],
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
