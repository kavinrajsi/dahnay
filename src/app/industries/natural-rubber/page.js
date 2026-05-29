// Figma: node-id=434-9172
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "FCL Natural Rubber & Plantation Export Logistics - DahNAY",
  description:
    "DahNAY provides natural rubber logistics - plantation-to-port FCL freight, bulk cargo, reefer containers, and export docs for SMR and TSR commodities.",
  alternates: {
    canonical: "/industries/natural-rubber",
  },
  openGraph: {
    title: "FCL Natural Rubber & Plantation Export Logistics - DahNAY",
    description:
      "DahNAY provides natural rubber logistics - plantation-to-port FCL freight, bulk cargo, reefer containers, and export docs for SMR and TSR commodities.",
    images: [{ url: "/images/banners/banner-desktop-natural-rubber.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "FCL Natural Rubber & Plantation Export Logistics - DahNAY",
    description:
      "DahNAY provides natural rubber logistics - plantation-to-port FCL freight, bulk cargo, reefer containers, and export docs for SMR and TSR commodities.",
    images: ["/images/banners/banner-desktop-natural-rubber.png"],
  },
};


export default function NaturalRubberPage() {
  return <IndustryPage slug="natural-rubber" />;
}
