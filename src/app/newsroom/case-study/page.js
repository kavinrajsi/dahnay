import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "Case Studies",
  description:
    "Explore DahNAY case studies showcasing real-world logistics solutions, supply chain innovations, and client success stories.",
  openGraph: {
    title: "Case Studies | DahNAY",
    description:
      "Explore DahNAY case studies showcasing real-world logistics solutions, supply chain innovations, and client success stories.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
};

export default async function CaseStudyPage() {
  let posts = [];
  try {
    const data = await getBlogPosts({ limit: "all" });
    posts = data.posts;
  } catch {
    // Ghost CMS unavailable
  }

  return (
    <div className="page page--case-study">
      <Banner
        title="Case Studies"
        desktopImage="/images/banners/banner-desktop-newsroom.png"
      />
      <NewsroomContent posts={posts} title="Case Studies" filterType="case-study" />
    </div>
  );
}
