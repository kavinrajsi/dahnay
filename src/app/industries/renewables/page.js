// Figma: node-id=432-3026
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "OOG Renewable Energy & Offshore Wind Logistics - DahNAY",
  description:
    "DahNAY handles renewable and offshore wind logistics - solar panels, wind turbine blades, OOG green energy cargo, and project equipment to global sites.",
  alternates: {
    canonical: "/industries/renewables",
  },
  openGraph: {
    title: "OOG Renewable Energy & Offshore Wind Logistics - DahNAY",
    description:
      "DahNAY handles renewable and offshore wind logistics - solar panels, wind turbine blades, OOG green energy cargo, and project equipment to global sites.",
    images: [{ url: "/images/banners/banner-desktop-renewables.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "OOG Renewable Energy & Offshore Wind Logistics - DahNAY",
    description:
      "DahNAY handles renewable and offshore wind logistics - solar panels, wind turbine blades, OOG green energy cargo, and project equipment to global sites.",
    images: ["/images/banners/banner-desktop-renewables.png"],
  },
};


export default function RenewablesPage() {
  return <IndustryPage slug="renewables" />;
}
