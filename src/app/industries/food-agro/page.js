import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "India Cold Chain HACCP, Reefer & Food Logistics - DahNAY",
  description:
    "DahNAY ensures compliant food logistics India - cold chain, reefer containers, HACCP handling and agri-commodity transport.",
  alternates: {
    canonical: "/industries/food-agro",
  },
  openGraph: {
    title: "India Cold Chain HACCP, Reefer & Food Logistics - DahNAY",
    description:
      "DahNAY ensures compliant food logistics India - cold chain, reefer containers, HACCP handling and agri-commodity transport.",
    images: [{ url: "/images/banners/banner-desktop-food-agro.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "India Cold Chain HACCP, Reefer & Food Logistics - DahNAY",
    description:
      "DahNAY ensures compliant food logistics India - cold chain, reefer containers, HACCP handling and agri-commodity transport.",
    images: ["/images/banners/banner-desktop-food-agro.png"],
  },
};


export default function FoodAgroPage() {
  return <IndustryPage slug="food-agro" />;
}
