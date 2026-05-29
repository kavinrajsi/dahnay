// Figma: node-id=354-6305
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "FCL & Breakbulk Paper, Pulp & Newsprint Logistics - DahNAY",
  description:
    "DahNAY manages paper, pulp, and newsprint cargo - bulk handling, breakbulk paper rolls, FCL freight, and just-in-time delivery for mills and publishers.",
  alternates: {
    canonical: "/industries/paper-pulp",
  },
  openGraph: {
    title: "FCL & Breakbulk Paper, Pulp & Newsprint Logistics - DahNAY",
    description:
      "DahNAY manages paper, pulp, and newsprint cargo - bulk handling, breakbulk paper rolls, FCL freight, and just-in-time delivery for mills and publishers.",
    images: [{ url: "/images/banners/banner-desktop-paper-pulp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "FCL & Breakbulk Paper, Pulp & Newsprint Logistics - DahNAY",
    description:
      "DahNAY manages paper, pulp, and newsprint cargo - bulk handling, breakbulk paper rolls, FCL freight, and just-in-time delivery for mills and publishers.",
    images: ["/images/banners/banner-desktop-paper-pulp.png"],
  },
};


export default function PaperPulpPage() {
  return <IndustryPage slug="paper-pulp" />;
}
