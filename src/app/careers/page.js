// Figma: node-id=480-7126
import Banner from "@/components/sections/Banner";

export const metadata = {
  title: "Careers",
  description:
    "Join DahNAY and shape the future of logistics. Explore career opportunities across freight, technology, operations, and sales.",
  openGraph: {
    title: "Careers | DahNAY",
    description:
      "Join DahNAY and shape the future of logistics. Explore career opportunities across freight, technology, operations, and sales.",
    images: [{ url: "/images/banners/banner-desktop-careers.png", width: 1200, height: 630 }],
  },
};

export default function CareersPage() {
  return (
    <div className="page page--careers">
      <Banner
        title="Careers"
        desktopImage="/images/banners/banner-desktop-careers.png"
      />
    </div>
  );
}
