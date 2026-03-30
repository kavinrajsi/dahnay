// Figma: node-id=680-9117
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Road Transportation",
  description:
    "Reliable road transportation solutions across South Asia. DahNAY provides full-load and part-load trucking with real-time tracking and dedicated support.",
  openGraph: {
    title: "Road Transportation | DahNAY",
    description:
      "Reliable road transportation solutions across South Asia. DahNAY provides full-load and part-load trucking with real-time tracking and dedicated support.",
    images: [{ url: "/images/banners/banner-desktop-road-transportation.png", width: 1200, height: 630 }],
  },
};

export default function RoadTransportationPage() {
  return <ServicePage slug="road-transportation" />;
}
