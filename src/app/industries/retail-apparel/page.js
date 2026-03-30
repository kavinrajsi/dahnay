// Figma: node-id=434-12216
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Retail & Apparel Logistics",
  description:
    "Agile supply chain solutions for retail and apparel. DahNAY manages seasonal volumes, garment-on-hanger transport, and rapid replenishment for fashion brands.",
  openGraph: {
    title: "Retail & Apparel Logistics | DahNAY",
    description:
      "Agile supply chain solutions for retail and apparel. DahNAY manages seasonal volumes, garment-on-hanger transport, and rapid replenishment for fashion brands.",
    images: [{ url: "/images/banners/banner-desktop-retail-apparel.png", width: 1200, height: 630 }],
  },
};

export default function RetailApparelPage() {
  return <IndustryPage slug="retail-apparel" />;
}
