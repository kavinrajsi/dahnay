import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Get Instant Freight Quotes Today | Air, FCL & LCL - DahNAY",
  description:
    "Contact DahNAY for an instant freight quote on air cargo, FCL, LCL sea freight and supply chain solutions. Our team is ready today.",
  canonical: "/contact",
  image: "/images/banners/banner-desktop-contact.png",
});

export default function ContactLayout({ children }) {
  return children;
}
