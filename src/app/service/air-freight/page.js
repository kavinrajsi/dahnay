// Figma: node-id=426-2805
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "IATA-Certified Air Freight Import Export Charter - DahNAY",
  description:
    "Ship faster with DahNAY IATA-certified air freight - competitive air cargo rates, import and export handling, charter flights, and DG support worldwide.",
  alternates: {
    canonical: "/service/air-freight",
  },
  openGraph: {
    title: "IATA-Certified Air Freight Import Export Charter - DahNAY",
    description:
      "Ship faster with DahNAY IATA-certified air freight - competitive air cargo rates, import and export handling, charter flights, and DG support worldwide.",
    images: [{ url: "/images/banners/banner-desktop-air-freight.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "IATA-Certified Air Freight Import Export Charter - DahNAY",
    description:
      "Ship faster with DahNAY IATA-certified air freight - competitive air cargo rates, import and export handling, charter flights, and DG support worldwide.",
    images: ["/images/banners/banner-desktop-air-freight.png"],
  },
};


export default function AirFreightPage() {
  return <ServicePage slug="air-freight" />;
}
