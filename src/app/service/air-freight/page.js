// Figma: node-id=426-2805
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Air Freight",
  description:
    "DahNAY's air freight services deliver speed and reliability for time-sensitive cargo. Global coverage, expert handling, and real-time tracking from origin to destination.",
  openGraph: {
    title: "Air Freight | DahNAY",
    description:
      "DahNAY's air freight services deliver speed and reliability for time-sensitive cargo. Global coverage, expert handling, and real-time tracking from origin to destination.",
    images: [{ url: "/images/banners/banner-desktop-air-freight.png", width: 1200, height: 630 }],
  },
};

export default function AirFreightPage() {
  return <ServicePage slug="air-freight" />;
}
