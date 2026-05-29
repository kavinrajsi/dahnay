// Figma: node-id=680-9117
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "FTL & LTL Cross-Border Road Transportation India - DahNAY",
  description:
    "Move cargo with DahNAY FTL, LTL, and PTL road freight - reliable cross-border transport across India, Bangladesh, and Nepal with flexible inland delivery.",
  alternates: {
    canonical: "/service/road-transportation",
  },
  openGraph: {
    title: "FTL & LTL Cross-Border Road Transportation India - DahNAY",
    description:
      "Move cargo with DahNAY FTL, LTL, and PTL road freight - reliable cross-border transport across India, Bangladesh, and Nepal with flexible inland delivery.",
    images: [{ url: "/images/banners/banner-desktop-road-transportation.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "FTL & LTL Cross-Border Road Transportation India - DahNAY",
    description:
      "Move cargo with DahNAY FTL, LTL, and PTL road freight - reliable cross-border transport across India, Bangladesh, and Nepal with flexible inland delivery.",
    images: ["/images/banners/banner-desktop-road-transportation.png"],
  },
};


export default function RoadTransportationPage() {
  return <ServicePage slug="road-transportation" />;
}
