// Figma: node-id=434-7990
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Machinery & Equipment Logistics",
  description:
    "DahNAY transports heavy machinery and industrial equipment with expert planning. Oversized load management, crane lifts, and multi-modal solutions for capital goods.",
  openGraph: {
    title: "Machinery & Equipment Logistics | DahNAY",
    description:
      "DahNAY transports heavy machinery and industrial equipment with expert planning. Oversized load management, crane lifts, and multi-modal solutions for capital goods.",
    images: [{ url: "/images/banners/banner-desktop-machinery.png", width: 1200, height: 630 }],
  },
};

export default function MachineryPage() {
  return <IndustryPage slug="machinery" />;
}
