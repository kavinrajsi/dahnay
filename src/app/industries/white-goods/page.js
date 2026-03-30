// Figma: node-id=354-6493
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "White Goods Logistics",
  description:
    "Careful handling and delivery for white goods and appliances. DahNAY ensures damage-free transport from factory floor to retail shelf.",
  openGraph: {
    title: "White Goods Logistics | DahNAY",
    description:
      "Careful handling and delivery for white goods and appliances. DahNAY ensures damage-free transport from factory floor to retail shelf.",
    images: [{ url: "/images/banners/banner-desktop-white-goods.png", width: 1200, height: 630 }],
  },
};

export default function WhiteGoodsPage() {
  return <IndustryPage slug="white-goods" />;
}
