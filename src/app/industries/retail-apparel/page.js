// Figma: node-id=434-12216
import IndustryPage from "@/components/sections/IndustryPage";

export const metadata = {
  title: "Retail Apparel Freight & Omnichannel Fulfilment - DahNAY",
  description:
    "DahNAY powers retail and apparel freight - season-aligned delivery with omnichannel fulfilment, FCL and LCL ocean freight, and factory-to-store speed.",
  alternates: {
    canonical: "/industries/retail-apparel",
  },
  openGraph: {
    title: "Retail Apparel Freight & Omnichannel Fulfilment - DahNAY",
    description:
      "DahNAY powers retail and apparel freight - season-aligned delivery with omnichannel fulfilment, FCL and LCL ocean freight, and factory-to-store speed.",
    images: [{ url: "/images/banners/banner-desktop-retail-apparel.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Retail Apparel Freight & Omnichannel Fulfilment - DahNAY",
    description:
      "DahNAY powers retail and apparel freight - season-aligned delivery with omnichannel fulfilment, FCL and LCL ocean freight, and factory-to-store speed.",
    images: ["/images/banners/banner-desktop-retail-apparel.png"],
  },
};


export default function RetailApparelPage() {
  return <IndustryPage slug="retail-apparel" />;
}
