// Figma: node-id=687-8005
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Same-Day Last Mile & Real-Time Tracking & ePOD - DahNAY",
  description:
    "Deliver better with DahNAY scalable last mile logistics - same-day door to door deliver with real-time tracking for retail.",
  alternates: {
    canonical: "/service/last-mile-delivery",
  },
  openGraph: {
    title: "Same-Day Last Mile & Real-Time Tracking & ePOD - DahNAY",
    description:
      "Deliver better with DahNAY scalable last mile logistics - same-day door to door deliver with real-time tracking for retail.",
    images: [{ url: "/images/banners/banner-desktop-last-mile-delivery.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Same-Day Last Mile & Real-Time Tracking & ePOD - DahNAY",
    description:
      "Deliver better with DahNAY scalable last mile logistics - same-day door to door deliver with real-time tracking for retail.",
    images: ["/images/banners/banner-desktop-last-mile-delivery.png"],
  },
};


export default function LastMileDeliveryPage() {
  return <ServicePage slug="last-mile-delivery" />;
}
