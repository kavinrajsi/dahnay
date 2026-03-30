// Figma: node-id=432-3026
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Renewables Logistics",
  description:
    "Logistics expertise for renewable energy projects. DahNAY moves wind turbines, solar panels, and energy infrastructure with precision planning and heavy-lift capability.",
  openGraph: {
    title: "Renewables Logistics | DahNAY",
    description:
      "Logistics expertise for renewable energy projects. DahNAY moves wind turbines, solar panels, and energy infrastructure with precision planning and heavy-lift capability.",
    images: [{ url: "/images/banners/banner-desktop-renewables.png", width: 1200, height: 630 }],
  },
};

export default function RenewablesPage() {
  return <IndustryPage slug="renewables" />;
}
