// Figma: node-id=687-8444
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "Ecommerce Fulfilment",
  description:
    "End-to-end ecommerce fulfilment by DahNAY — warehousing, pick-and-pack, order management, and fast delivery to your customers nationwide.",
  openGraph: {
    title: "Ecommerce Fulfilment | DahNAY",
    description:
      "End-to-end ecommerce fulfilment by DahNAY — warehousing, pick-and-pack, order management, and fast delivery to your customers nationwide.",
    images: [{ url: "/images/banners/banner-desktop-ecommerce-fulfilment.png", width: 1200, height: 630 }],
  },
};

export default function EcommerceFulfilmentPage() {
  return <ServicePage slug="ecommerce-fulfilment" />;
}
