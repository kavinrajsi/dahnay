import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Food & Agro Logistics",
  description:
    "DahNAY delivers reliable logistics for the food and agriculture sector — temperature-controlled transport, cold chain management, and farm-to-market supply chain solutions.",
  openGraph: {
    title: "Food & Agro Logistics | DahNAY",
    description:
      "DahNAY delivers reliable logistics for the food and agriculture sector — temperature-controlled transport, cold chain management, and farm-to-market supply chain solutions.",
    images: [{ url: "/images/banners/banner-desktop-food-agro.png", width: 1200, height: 630 }],
  },
};

export default function FoodAgroPage() {
  return <IndustryPage slug="food-agro" />;
}
