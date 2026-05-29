// Figma: node-id=687-7125
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "AEO-Certified Customs Clearance | SEZ, FTWZ & EOU - DahNAY",
  description:
    "Avoid delays with DahNAY AEO-certified customs clearance - SEZ, FTWZ, EOU, EPCG, and Advance Authorization with full documentation and bonded warehousing.",
  alternates: {
    canonical: "/service/customs-clearance",
  },
  openGraph: {
    title: "AEO-Certified Customs Clearance | SEZ, FTWZ & EOU - DahNAY",
    description:
      "Avoid delays with DahNAY AEO-certified customs clearance - SEZ, FTWZ, EOU, EPCG, and Advance Authorization with full documentation and bonded warehousing.",
    images: [{ url: "/images/banners/banner-desktop-customs-clearance.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "AEO-Certified Customs Clearance | SEZ, FTWZ & EOU - DahNAY",
    description:
      "Avoid delays with DahNAY AEO-certified customs clearance - SEZ, FTWZ, EOU, EPCG, and Advance Authorization with full documentation and bonded warehousing.",
    images: ["/images/banners/banner-desktop-customs-clearance.png"],
  },
};


export default function CustomsClearancePage() {
  return <ServicePage slug="customs-clearance" />;
}
