// Figma: node-id=434-8778
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "India High-Velocity FMCG & Consumer Goods Logistics - DahNAY",
  description:
    "DahNAY delivers FMCG logistics India - consumer goods freight forwarding, last mile warehousing and high velocity reverse logistics solutions now.",
  alternates: {
    canonical: "/industries/fmcg",
  },
  openGraph: {
    title: "India High-Velocity FMCG & Consumer Goods Logistics - DahNAY",
    description:
      "DahNAY delivers FMCG logistics India - consumer goods freight forwarding, last mile warehousing and high velocity reverse logistics solutions now.",
    images: [{ url: "/images/banners/banner-desktop-fmcg.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "India High-Velocity FMCG & Consumer Goods Logistics - DahNAY",
    description:
      "DahNAY delivers FMCG logistics India - consumer goods freight forwarding, last mile warehousing and high velocity reverse logistics solutions now.",
    images: ["/images/banners/banner-desktop-fmcg.png"],
  },
};


export default function FmcgPage() {
  return <IndustryPage slug="fmcg" />;
}
