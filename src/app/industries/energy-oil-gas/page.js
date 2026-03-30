// Figma: node-id=354-6111
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Energy, Oil & Gas Logistics",
  description:
    "Logistics solutions for energy, oil & gas operations. DahNAY handles hazmat cargo, specialist equipment transport, and project logistics for upstream and downstream sectors.",
  openGraph: {
    title: "Energy, Oil & Gas Logistics | DahNAY",
    description:
      "Logistics solutions for energy, oil & gas operations. DahNAY handles hazmat cargo, specialist equipment transport, and project logistics for upstream and downstream sectors.",
    images: [{ url: "/images/banners/banner-desktop-energy-oil-gas.png", width: 1200, height: 630 }],
  },
};

export default function EnergyOilGasPage() {
  return <IndustryPage slug="energy-oil-gas" />;
}
