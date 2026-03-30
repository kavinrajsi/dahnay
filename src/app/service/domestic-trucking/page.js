// Figma: node-id=687-7562
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Domestic Trucking",
  description:
    "Flexible domestic trucking across India's road network. DahNAY offers FTL, LTL, and multimodal road solutions with GPS tracking and dedicated account management.",
  openGraph: {
    title: "Domestic Trucking | DahNAY",
    description:
      "Flexible domestic trucking across India's road network. DahNAY offers FTL, LTL, and multimodal road solutions with GPS tracking and dedicated account management.",
    images: [{ url: "/images/banners/banner-desktop-domestic-trucking.png", width: 1200, height: 630 }],
  },
};

export default function DomesticTruckingPage() {
  return <ServicePage slug="domestic-trucking" />;
}
