import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "Blog",
  description:
    "Insights, news, and perspectives from DahNAY on logistics, supply chain, and industry trends.",
  openGraph: {
    title: "Blog | DahNAY",
    description:
      "Insights, news, and perspectives from DahNAY on logistics, supply chain, and industry trends.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
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
