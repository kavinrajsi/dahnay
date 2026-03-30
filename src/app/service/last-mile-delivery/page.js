// Figma: node-id=687-8005
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Last Mile Delivery",
  description:
    "DahNAY's last-mile delivery network ensures shipments reach their final destination on time, with full visibility at every step of the journey.",
  openGraph: {
    title: "Last Mile Delivery | DahNAY",
    description:
      "DahNAY's last-mile delivery network ensures shipments reach their final destination on time, with full visibility at every step of the journey.",
    images: [{ url: "/images/banners/banner-desktop-last-mile-delivery.png", width: 1200, height: 630 }],
  },
};

export default function LastMileDeliveryPage() {
  return <ServicePage slug="last-mile-delivery" />;
}
