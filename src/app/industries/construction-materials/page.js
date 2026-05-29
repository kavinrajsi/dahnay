// Figma: node-id=434-8384
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Construction, OOG & Building Materials Freight - DahNAY",
  description:
    "Move construction and infrastructure cargo with DahNAY - bulk handling, OOG freight, breakbulk, and just-in-time site delivery for large building projects.",
  alternates: {
    canonical: "/industries/construction-materials",
  },
  openGraph: {
    title: "Construction, OOG & Building Materials Freight - DahNAY",
    description:
      "Move construction and infrastructure cargo with DahNAY - bulk handling, OOG freight, breakbulk, and just-in-time site delivery for large building projects.",
    images: [{ url: "/images/banners/banner-desktop-construction-materials.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Construction, OOG & Building Materials Freight - DahNAY",
    description:
      "Move construction and infrastructure cargo with DahNAY - bulk handling, OOG freight, breakbulk, and just-in-time site delivery for large building projects.",
    images: ["/images/banners/banner-desktop-construction-materials.png"],
  },
};


export default function ConstructionMaterialsPage() {
  return <IndustryPage slug="construction-materials" />;
}
