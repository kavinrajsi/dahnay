// Figma: node-id=354-6493
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "White Goods & Appliance Freight Logistics India - DahNAY",
  description:
    "DahNAY handles white goods logistics India - appliance freight for fridges, washing machines, and high-cubic consumer electronics with volumetric handling.",
  alternates: {
    canonical: "/industries/white-goods",
  },
  openGraph: {
    title: "White Goods & Appliance Freight Logistics India - DahNAY",
    description:
      "DahNAY handles white goods logistics India - appliance freight for fridges, washing machines, and high-cubic consumer electronics with volumetric handling.",
    images: [{ url: "/images/banners/banner-desktop-white-goods.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "White Goods & Appliance Freight Logistics India - DahNAY",
    description:
      "DahNAY handles white goods logistics India - appliance freight for fridges, washing machines, and high-cubic consumer electronics with volumetric handling.",
    images: ["/images/banners/banner-desktop-white-goods.png"],
  },
};


export default function WhiteGoodsPage() {
  return <IndustryPage slug="white-goods" />;
}
