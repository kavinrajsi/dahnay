// Figma: node-id=434-9172
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Natural Rubber Logistics",
  description:
    "Specialised logistics for natural rubber and latex products. DahNAY provides moisture-controlled handling, bulk transport, and supply chain solutions for rubber producers.",
  openGraph: {
    title: "Natural Rubber Logistics | DahNAY",
    description:
      "Specialised logistics for natural rubber and latex products. DahNAY provides moisture-controlled handling, bulk transport, and supply chain solutions for rubber producers.",
    images: [{ url: "/images/banners/banner-desktop-natural-rubber.png", width: 1200, height: 630 }],
  },
};

export default function NaturalRubberPage() {
  return <IndustryPage slug="natural-rubber" />;
}
