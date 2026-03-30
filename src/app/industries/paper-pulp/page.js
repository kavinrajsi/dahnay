// Figma: node-id=354-6305
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Paper & Pulp Logistics",
  description:
    "DahNAY supports the paper and pulp industry with moisture-sensitive cargo handling, roll transport, and just-in-time delivery to mills and distributors.",
  openGraph: {
    title: "Paper & Pulp Logistics | DahNAY",
    description:
      "DahNAY supports the paper and pulp industry with moisture-sensitive cargo handling, roll transport, and just-in-time delivery to mills and distributors.",
    images: [{ url: "/images/banners/banner-desktop-paper-pulp.png", width: 1200, height: 630 }],
  },
};

export default function PaperPulpPage() {
  return <IndustryPage slug="paper-pulp" />;
}
