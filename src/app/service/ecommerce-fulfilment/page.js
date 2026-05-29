// Figma: node-id=687-8444
import ServicePage from "@/components/sections/ServicePage";

export const metadata = {
  title: "OMS 3PL Omnichannel Ecommerce Fulfilment India - DahNAY",
  description:
    "From OMS-integrated warehousing to D2C delivery, DahNAY 3PL ecommerce handles omnichannel orders, peak season surges, and fast replenishment in India.",
  alternates: {
    canonical: "/service/ecommerce-fulfilment",
  },
  openGraph: {
    title: "OMS 3PL Omnichannel Ecommerce Fulfilment India - DahNAY",
    description:
      "From OMS-integrated warehousing to D2C delivery, DahNAY 3PL ecommerce handles omnichannel orders, peak season surges, and fast replenishment in India.",
    images: [{ url: "/images/banners/banner-desktop-ecommerce-fulfilment.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "OMS 3PL Omnichannel Ecommerce Fulfilment India - DahNAY",
    description:
      "From OMS-integrated warehousing to D2C delivery, DahNAY 3PL ecommerce handles omnichannel orders, peak season surges, and fast replenishment in India.",
    images: ["/images/banners/banner-desktop-ecommerce-fulfilment.png"],
  },
};


export default function EcommerceFulfilmentPage() {
  return <ServicePage slug="ecommerce-fulfilment" />;
}
