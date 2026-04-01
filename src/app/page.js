// Figma: node-id=354-4868
import HomeHero from "@/components/sections/HomeHero";
import HomeServices from "@/components/sections/HomeServices";
import HomeSupplyChain from "@/components/sections/HomeSupplyChain";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import HomeGreatPlace from "@/components/sections/HomeGreatPlace";
import HomeNewsroom from "@/components/sections/HomeNewsroom";
import TrustCTA from "@/components/sections/TrustCTA";
import HomeAbout from "@/components/sections/HomeAbout";
import WhyDahnay from "@/components/sections/WhyDahnay";
import GrowForm from "@/components/sections/GrowForm";

export const metadata = {
  title: "DahNAY — Global Logistics Solutions",
  description:
    "Industry-specific logistics solutions powered by expertise, technology, and a global network across air freight, sea freight, customs clearance, and more.",
  openGraph: {
    title: "DahNAY — Global Logistics Solutions",
    description:
      "Industry-specific logistics solutions powered by expertise, technology, and a global network across air freight, sea freight, customs clearance, and more.",
    images: [{ url: "/images/banners/banner-desktop-about-us.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <div className="page page--home">
      <HomeHero />
      <HomeServices />
      <HomeSupplyChain />
      <IndustriesSlider />
      <HomeGreatPlace />
      <HomeNewsroom />
      <TrustCTA
        title={"Grow your business\nwith us today"}
        ctaText="Contact us"
        ctaHref="/contact"
        image="/images/home/contact-cta.png"
      />
      <HomeAbout />
      <WhyDahnay />
      <GrowForm />
    </div>
  );
}
