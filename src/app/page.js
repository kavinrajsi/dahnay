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
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";

export const metadata = {
  title: "DahNAY | End-to-End 3PL, MTO & Global Freight Solutions",
  description:
      "Ship smarter with DahNAY - an MTO-certified 3PL partner for global air, sea, and road freight with real-time supply chain visibility for all businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DahNAY | End-to-End 3PL, MTO & Global Freight Solutions",
    description:
        "Ship smarter with DahNAY - an MTO-certified 3PL partner for global air, sea, and road freight with real-time supply chain visibility for all businesses.",
    images: [
      {
        url: "/images/banners/banner-desktop-about-us.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "DahNAY | End-to-End 3PL, MTO & Global Freight Solutions",
    description:
        "Ship smarter with DahNAY - an MTO-certified 3PL partner for global air, sea, and road freight with real-time supply chain visibility for all businesses.",
    images: ["/images/banners/banner-desktop-about-us.png"],
  },
};


export default function Home() {
  return (
    <div className="page page--home">
      <HomeHero />
      <HomeSupplyChain />
      <HomeServices />
      <IndustriesSlider />
      <HomeAbout />

      <WhyDahnay
        title="Why DahNAY?"
        content="With DahNAY, expect world-class services, delivered by people who genuinely care, every step of the way."
        items={[
          {
            icon: "/icon/global-network.png",
            title: "Global Network Reach",
            content:
              "Partnerships with leading airlines and agents across major destinations.",
          },
          {
            icon: "/icon/speed-reliability.png",
            title: "Speed & Reliability",
            content:
              "Optimised routes and real-time tracking for faster delivery.",
          },
          {
            icon: "/icon/custom-solutions.png",
            title: "Custom Solutions",
            content:
              "Tailored freight options based on your cargo type and priority.",
          },
          {
            icon: "/icon/expert-handling.png",
            title: "Expert Handling",
            content:
              "Experienced team ensuring compliance with all international regulations.",
          },
        ]}
      />

      <HomeGreatPlace />
      <HomeNewsroom />
      <TrustCTA
        title={"Let's connect"}
        description=""
        ctaText="Locate us"
        ctaHref="/contact"
        image="/images/home/contact-cta.png"
      />
      <FAQSection
        tag="FAQs"
        title="Frequently Asked"
        titleAccent="Questions"
        content="Find answers to common questions about our logistics services and how we can support your supply chain."
        items={[
          {
            question: "Why choose DahNAY as a growth partner?",
            answer:
              "DahNAY acts as a strategic logistics partner by offering scalable supply chain solutions, global freight expertise and technology-driven visibility. Businesses choose DahNAY to optimise costs, improve delivery timelines and support long-term growth.",
          },
          {
            question: "Can DahNAY handle oversized or heavy equipment?",
            answer:
              "Yes, DahNAY specialises in handling oversized cargo, heavy equipment and project logistics. From route surveys to heavy-lift operations, DahNAY ensures safe and compliant transportation of out-of-gauge and breakbulk cargo.",
          },
          {
            question: "Does DahNAY have a global presence?",
            answer:
              "DahNAY operates across key global trade routes with a strong presence in India, the UAE and the USA. Through a network of international partners, DahNAY ensures seamless global logistics and cross-border shipping solutions.",
          },
          {
            question: "Does DahNAY offer shipment tracking?",
            answer:
              "Yes, DahNAY provides real-time shipment tracking and end-to-end visibility. Clients can monitor cargo movement, receive updates and stay informed throughout the shipping process.",
          },
          {
            question: "How do I request a shipping quote from DahNAY?",
            answer:
              "You can request a shipping quote by contacting DahNAY through the website, email or customer support team. Share shipment details such as cargo type, volume, origin and destination to receive a customised logistics quote.",
          },
          {
            question:
              "What makes DahNAY different from other logistics providers?",
            answer:
              "DahNAY stands out through its customer-centric approach, global network, customised logistics solutions and strong focus on transparency. The company combines operational expertise with technology to deliver reliable and efficient supply chain services.",
          },
        ]}
      />
      <GrowForm />
    </div>
  );
}
