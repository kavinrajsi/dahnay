// Figma: node-id=687-7562
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "India FTL, LTL & PTL Domestic Trucking Services - DahNAY",
  description:
    "Move goods across India with DahNAY FTL, LTL, and PTL trucking - secure city-to-city delivery with real-time cargo tracking and inland logistics support.",
  alternates: {
    canonical: "/service/domestic-trucking",
  },
  openGraph: {
    title: "India FTL, LTL & PTL Domestic Trucking Services - DahNAY",
    description:
      "Move goods across India with DahNAY FTL, LTL, and PTL trucking - secure city-to-city delivery with real-time cargo tracking and inland logistics support.",
    images: [{ url: "/images/banners/banner-desktop-domestic-trucking.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "India FTL, LTL & PTL Domestic Trucking Services - DahNAY",
    description:
      "Move goods across India with DahNAY FTL, LTL, and PTL trucking - secure city-to-city delivery with real-time cargo tracking and inland logistics support.",
    images: ["/images/banners/banner-desktop-domestic-trucking.png"],
  },
};


export default function DomesticTruckingPage() {
  return <ServicePage slug="domestic-trucking" />;
}
