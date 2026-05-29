// Figma: node-id=687-6688
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Green B2C Reverse Logistics & Returns Solutions - DahNAY",
  description:
    "Streamline B2C returns, rebagging, retagging, and recovery with DahNAY reverse logistics - sustainable, built for ecommerce and event logistics.",
  alternates: {
    canonical: "/service/reverse-logistics",
  },
  openGraph: {
    title: "Green B2C Reverse Logistics & Returns Solutions - DahNAY",
    description:
      "Streamline B2C returns, rebagging, retagging, and recovery with DahNAY reverse logistics - sustainable, built for ecommerce and event logistics.",
    images: [{ url: "/images/banners/banner-desktop-reverse-logistics.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Green B2C Reverse Logistics & Returns Solutions - DahNAY",
    description:
      "Streamline B2C returns, rebagging, retagging, and recovery with DahNAY reverse logistics - sustainable, built for ecommerce and event logistics.",
    images: ["/images/banners/banner-desktop-reverse-logistics.png"],
  },
};


export default function ReverseLogisticsPage() {
  return <ServicePage slug="reverse-logistics" />;
}
