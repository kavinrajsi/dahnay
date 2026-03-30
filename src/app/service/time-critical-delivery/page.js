// Figma: node-id=687-5814
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Time-Critical Delivery",
  description:
    "When timing is everything, DahNAY's time-critical delivery service guarantees your urgent shipments arrive on schedule — 24/7, every day of the year.",
  openGraph: {
    title: "Time-Critical Delivery | DahNAY",
    description:
      "When timing is everything, DahNAY's time-critical delivery service guarantees your urgent shipments arrive on schedule — 24/7, every day of the year.",
    images: [{ url: "/images/banners/banner-desktop-time-critical-delivery.png", width: 1200, height: 630 }],
  },
};

export default function TimeCriticalDeliveryPage() {
  return <ServicePage slug="time-critical-delivery" />;
}
