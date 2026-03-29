// Figma: node-id=480-7301
import Banner from "@/components/sections/Banner";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} - DahNAY Careers` };
}

export default async function CareerDetailPage({ params }) {
  const { slug } = await params;

  return (
    <div className="page page--career-detail">
      <Banner
        title={slug.replace(/-/g, " ")}
        desktopImage="/images/banners/banner-desktop-careers.png"
      />
    </div>
  );
}
