// Figma: node-id=434-7990
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Heavy Machinery, OOG & Plant Relocation Freight - DahNAY",
  description:
    "DahNAY specialises in heavy machinery, OOG cargo, and plant relocation - rigging, lashing, and multimodal industrial equipment transport for projects.",
  alternates: {
    canonical: "/industries/machinery",
  },
  openGraph: {
    title: "Heavy Machinery, OOG & Plant Relocation Freight - DahNAY",
    description:
      "DahNAY specialises in heavy machinery, OOG cargo, and plant relocation - rigging, lashing, and multimodal industrial equipment transport for projects.",
    images: [{ url: "/images/banners/banner-desktop-machinery.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Heavy Machinery, OOG & Plant Relocation Freight - DahNAY",
    description:
      "DahNAY specialises in heavy machinery, OOG cargo, and plant relocation - rigging, lashing, and multimodal industrial equipment transport for projects.",
    images: ["/images/banners/banner-desktop-machinery.png"],
  },
};


export default function MachineryPage() {
  return <IndustryPage slug="machinery" />;
}
