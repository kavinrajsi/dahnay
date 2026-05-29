import { getBlogPosts } from "@/lib/ghost";
import Banner from "@/components/sections/Banner";
import NewsroomContent from "@/components/sections/NewsroomContent";

export const metadata = {
  title: "Freight Cost Savings & Logistics ROI Case Studies - DahNAY",
  description:
    "See how DahNAY delivers freight cost savings and logistics ROI - case studies solving customs clearance, ecommerce fulfilment, and supply chain challenges.",
  alternates: {
    canonical: "/newsroom/case-study",
  },
  openGraph: {
    title: "Freight Cost Savings & Logistics ROI Case Studies - DahNAY",
    description:
      "See how DahNAY delivers freight cost savings and logistics ROI - case studies solving customs clearance, ecommerce fulfilment, and supply chain challenges.",
    images: [{ url: "/images/banners/banner-desktop-newsroom.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Freight Cost Savings & Logistics ROI Case Studies - DahNAY",
    description:
      "See how DahNAY delivers freight cost savings and logistics ROI - case studies solving customs clearance, ecommerce fulfilment, and supply chain challenges.",
    images: ["/images/banners/banner-desktop-newsroom.png"],
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
