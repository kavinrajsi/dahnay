// Figma: node-id=354-5101
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Sea Freight",
  description:
    "Cost-effective sea freight with global carrier partnerships. DahNAY offers FCL, LCL, and specialised container solutions for all cargo types and trade lanes.",
  openGraph: {
    title: "Sea Freight | DahNAY",
    description:
      "Cost-effective sea freight with global carrier partnerships. DahNAY offers FCL, LCL, and specialised container solutions for all cargo types and trade lanes.",
    images: [{ url: "/images/banners/banner-desktop-sea-freight.png", width: 1200, height: 630 }],
  },
};

export default function SeaFreightPage() {
  return <ServicePage slug="sea-freight" />;
}
