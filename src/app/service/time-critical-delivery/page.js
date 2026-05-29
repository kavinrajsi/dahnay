// Figma: node-id=687-5814
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Time-Critical Same-Day & Urgent Delivery Solutions - DahNAY",
  description:
    "When every minute matters, DahNAY delivers - same-day urgent shipments, next-flight-out air freight, and real-time tracking to any destination on time.",
  alternates: {
    canonical: "/service/time-critical-delivery",
  },
  openGraph: {
    title: "Time-Critical Same-Day & Urgent Delivery Solutions - DahNAY",
    description:
      "When every minute matters, DahNAY delivers - same-day urgent shipments, next-flight-out air freight, and real-time tracking to any destination on time.",
    images: [{ url: "/images/banners/banner-desktop-time-critical-delivery.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Time-Critical Same-Day & Urgent Delivery Solutions - DahNAY",
    description:
      "When every minute matters, DahNAY delivers - same-day urgent shipments, next-flight-out air freight, and real-time tracking to any destination on time.",
    images: ["/images/banners/banner-desktop-time-critical-delivery.png"],
  },
};


export default function TimeCriticalDeliveryPage() {
  return <ServicePage slug="time-critical-delivery" />;
}
