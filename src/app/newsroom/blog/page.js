import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "India EXIM, AI & Geopolitical Logistics Insights - DahNAY",
  description:
    "Explore AI in logistics, India EXIM trends, geopolitical supply chain risk, and freight insights - thought leadership from DahNAY supply chain experts.",
  alternates: {
    canonical: "/newsroom/blog",
  },
  openGraph: {
    title: "India EXIM, AI & Geopolitical Logistics Insights - DahNAY",
    description:
      "Explore AI in logistics, India EXIM trends, geopolitical supply chain risk, and freight insights - thought leadership from DahNAY supply chain experts.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "India EXIM, AI & Geopolitical Logistics Insights - DahNAY",
    description:
      "Explore AI in logistics, India EXIM trends, geopolitical supply chain risk, and freight insights - thought leadership from DahNAY supply chain experts.",
    images: ["/images/banners/banner-desktop-newsroom.png"],
  },
};


export default async function BlogPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: "all" });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable
  }

  return (
    <div className="page page--blog">
      <Banner
        title="Blog"
        desktopImage="/images/banners/banner-desktop-newsroom.png"
      />
      <NewsroomContent posts={posts} title="Blog" filterType="blog" />
    </div>
  );
}
