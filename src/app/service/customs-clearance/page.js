// Figma: node-id=687-7125
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Customs Clearance",
  description:
    "Streamline cross-border trade with DahNAY's customs clearance experts. Full documentation management, duty optimisation, and compliance across all major trade lanes.",
  openGraph: {
    title: "Customs Clearance | DahNAY",
    description:
      "Streamline cross-border trade with DahNAY's customs clearance experts. Full documentation management, duty optimisation, and compliance across all major trade lanes.",
    images: [{ url: "/images/banners/banner-desktop-customs-clearance.png", width: 1200, height: 630 }],
  },
};

export default function CustomsClearancePage() {
  return <ServicePage slug="customs-clearance" />;
}
