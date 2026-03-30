// Figma: node-id=687-6688
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Reverse Logistics",
  description:
    "Efficient reverse logistics and returns management by DahNAY. Reduce costs and improve customer satisfaction with seamless returns processing and remanufacturing support.",
  openGraph: {
    title: "Reverse Logistics | DahNAY",
    description:
      "Efficient reverse logistics and returns management by DahNAY. Reduce costs and improve customer satisfaction with seamless returns processing and remanufacturing support.",
    images: [{ url: "/images/banners/banner-desktop-reverse-logistics.png", width: 1200, height: 630 }],
  },
};

export default function ReverseLogisticsPage() {
  return <ServicePage slug="reverse-logistics" />;
}
