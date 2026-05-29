// Figma: node-id=354-6111
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Oil, Gas & Energy Upstream-Downstream Logistics - DahNAY",
  description:
    "Handle complex oil, gas, and energy cargo with DahNAY - OOG freight, hazardous goods, bonded warehousing, and project logistics for energy operations.",
  alternates: {
    canonical: "/industries/energy-oil-gas",
  },
  openGraph: {
    title: "Oil, Gas & Energy Upstream-Downstream Logistics - DahNAY",
    description:
      "Handle complex oil, gas, and energy cargo with DahNAY - OOG freight, hazardous goods, bonded warehousing, and project logistics for energy operations.",
    images: [{ url: "/images/banners/banner-desktop-energy-oil-gas.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Oil, Gas & Energy Upstream-Downstream Logistics - DahNAY",
    description:
      "Handle complex oil, gas, and energy cargo with DahNAY - OOG freight, hazardous goods, bonded warehousing, and project logistics for energy operations.",
    images: ["/images/banners/banner-desktop-energy-oil-gas.png"],
  },
};


export default function EnergyOilGasPage() {
  return <IndustryPage slug="energy-oil-gas" />;
}
