// Figma: node-id=354-5569
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Automotive Logistics",
  description:
    "DahNAY delivers precision logistics for the automotive sector — just-in-time delivery, OEM supply chain management, and finished vehicle transport across South Asia.",
  openGraph: {
    title: "Automotive Logistics | DahNAY",
    description:
      "DahNAY delivers precision logistics for the automotive sector — just-in-time delivery, OEM supply chain management, and finished vehicle transport across South Asia.",
    images: [{ url: "/images/banners/banner-desktop-automotive.png", width: 1200, height: 630 }],
  },
};

export default function AutomotivePage() {
  return <IndustryPage slug="automotive" />;
}
