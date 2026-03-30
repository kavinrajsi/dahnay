// Figma: node-id=687-6251
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Project Logistics",
  description:
    "DahNAY manages complex project logistics — heavy lifts, oversized cargo, and multi-modal transport solutions for large-scale industrial and infrastructure projects.",
  openGraph: {
    title: "Project Logistics | DahNAY",
    description:
      "DahNAY manages complex project logistics — heavy lifts, oversized cargo, and multi-modal transport solutions for large-scale industrial and infrastructure projects.",
    images: [{ url: "/images/banners/banner-desktop-project-logistics.png", width: 1200, height: 630 }],
  },
};

export default function ProjectLogisticsPage() {
  return <ServicePage slug="project-logistics" />;
}
