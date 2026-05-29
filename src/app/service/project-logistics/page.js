// Figma: node-id=687-6251
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "OOG, EPC, Breakbulk & Heavy Lift Project Cargo - DahNAY",
  description:
    "DahNAY manages OOG cargo, breakbulk freight, and EPC project shipments - heavy lift, rigging, lashing, and multimodal transport for complex cargo on time.",
  alternates: {
    canonical: "/service/project-logistics",
  },
  openGraph: {
    title: "OOG, EPC, Breakbulk & Heavy Lift Project Cargo - DahNAY",
    description:
      "DahNAY manages OOG cargo, breakbulk freight, and EPC project shipments - heavy lift, rigging, lashing, and multimodal transport for complex cargo on time.",
    images: [{ url: "/images/banners/banner-desktop-project-logistics.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "OOG, EPC, Breakbulk & Heavy Lift Project Cargo - DahNAY",
    description:
      "DahNAY manages OOG cargo, breakbulk freight, and EPC project shipments - heavy lift, rigging, lashing, and multimodal transport for complex cargo on time.",
    images: ["/images/banners/banner-desktop-project-logistics.png"],
  },
};


export default function ProjectLogisticsPage() {
  return <ServicePage slug="project-logistics" />;
}
