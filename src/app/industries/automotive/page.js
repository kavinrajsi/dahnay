// Figma: node-id=354-5569
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "CKD OEM Automotive & EV Supply Chain Logistics - DahNAY",
  description:
    "DahNAY delivers automotive and EV logistics - CKD parts, OEM freight, cars-in-containers, RoRo shipping, and just-in-time delivery for Tier 1 suppliers.",
  alternates: {
    canonical: "/industries/automotive",
  },
  openGraph: {
    title: "CKD OEM Automotive & EV Supply Chain Logistics - DahNAY",
    description:
      "DahNAY delivers automotive and EV logistics - CKD parts, OEM freight, cars-in-containers, RoRo shipping, and just-in-time delivery for Tier 1 suppliers.",
    images: [{ url: "/images/banners/banner-desktop-automotive.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "CKD OEM Automotive & EV Supply Chain Logistics - DahNAY",
    description:
      "DahNAY delivers automotive and EV logistics - CKD parts, OEM freight, cars-in-containers, RoRo shipping, and just-in-time delivery for Tier 1 suppliers.",
    images: ["/images/banners/banner-desktop-automotive.png"],
  },
};


export default function AutomotivePage() {
  return <IndustryPage slug="automotive" />;
}
