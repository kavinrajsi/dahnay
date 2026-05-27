// Figma: node-id=434-8778
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "FMCG Logistics",
  description:
    "Fast, efficient FMCG logistics by DahNAY. Temperature-controlled transport, high-volume distribution, and last-mile delivery for consumer goods manufacturers and retailers.",
  alternates: {
    canonical: "/industries/fmcg",
  },
  openGraph: {
    title: "FMCG Logistics | DahNAY",
    description:
      "Fast, efficient FMCG logistics by DahNAY. Temperature-controlled transport, high-volume distribution, and last-mile delivery for consumer goods manufacturers and retailers.",
    images: [{ url: "/images/banners/banner-desktop-fmcg.png", width: 1200, height: 630 }],
  },
};

export default function FmcgPage() {
  return <IndustryPage slug="fmcg" />;
}
