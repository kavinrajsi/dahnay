// Figma: node-id=434-8384
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Construction Materials Logistics",
  description:
    "DahNAY moves bulk materials, heavy equipment, and building supplies to construction sites on time. Specialised handling for all construction logistics needs.",
  openGraph: {
    title: "Construction Materials Logistics | DahNAY",
    description:
      "DahNAY moves bulk materials, heavy equipment, and building supplies to construction sites on time. Specialised handling for all construction logistics needs.",
    images: [{ url: "/images/banners/banner-desktop-construction-materials.png", width: 1200, height: 630 }],
  },
};

export default function ConstructionMaterialsPage() {
  return <IndustryPage slug="construction-materials" />;
}
