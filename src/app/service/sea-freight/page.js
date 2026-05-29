// Figma: node-id=354-5101
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "FCL, LCL & NVOCC Global Sea Freight Forwarding - DahNAY",
  description:
    "Ship globally with DahNAY FCL, LCL, and NVOCC sea freight - reefer containers, flat rack, and port-to-port or door-to-door cargo movement worldwide now.",
  alternates: {
    canonical: "/service/sea-freight",
  },
  openGraph: {
    title: "FCL, LCL & NVOCC Global Sea Freight Forwarding - DahNAY",
    description:
      "Ship globally with DahNAY FCL, LCL, and NVOCC sea freight - reefer containers, flat rack, and port-to-port or door-to-door cargo movement worldwide now.",
    images: [{ url: "/images/banners/banner-desktop-sea-freight.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "FCL, LCL & NVOCC Global Sea Freight Forwarding - DahNAY",
    description:
      "Ship globally with DahNAY FCL, LCL, and NVOCC sea freight - reefer containers, flat rack, and port-to-port or door-to-door cargo movement worldwide now.",
    images: ["/images/banners/banner-desktop-sea-freight.png"],
  },
};


export default function SeaFreightPage() {
  return <ServicePage slug="sea-freight" />;
}
