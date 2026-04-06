import Banner from "@/components/sections/Banner";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Solutions",
  description:
    "DahNAY's technology platform powers smarter logistics — integrated solutions for freight management, port operations, and supply chain visibility.",
  openGraph: {
    title: "Solutions | DahNAY",
    description:
      "DahNAY's technology platform powers smarter logistics — integrated solutions for freight management, port operations, and supply chain visibility.",
    images: [{ url: "/images/banners/banner-desktop-logistics.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Why choose DahNAY as a growth partner?", answer: "DahNAY acts as a strategic logistics partner by offering scalable supply chain solutions, global freight expertise and technology-driven visibility. Businesses choose DahNAY to optimise costs, improve delivery timelines and support long-term growth." },
  { question: "Does DahNAY offer shipment tracking?", answer: "Yes, DahNAY provides real-time shipment tracking and end-to-end visibility. Clients can monitor cargo movement, receive updates and stay informed throughout the shipping process." },
  { question: "How do I request a shipping quote from DahNAY?", answer: "You can request a shipping quote by contacting DahNAY through the website, email or customer support team. Share shipment details such as cargo type, volume, origin and destination to receive a customised logistics quote." },
  { question: "What makes DahNAY different from other logistics providers?", answer: "DahNAY stands out through its customer-centric approach, global network, customised logistics solutions and strong focus on transparency. The company combines operational expertise with technology to deliver reliable and efficient supply chain services." },
];

export default function SolutionsPage() {
  return (
    <div className="page page--solutions">
      <Banner
        title="Solutions"
        desktopImage="/images/banners/banner-desktop-solutions.png"
      />

      <SolutionsGrid />

      <FAQSection
        tag="FAQ's"
        title="Frequently Asked"
        titleAccent="Questions"
        content="Ensure every shipment is precise, on time and fully optimised with DahNAY's intelligent logistics network and real-time visibility"
        items={faqItems}
      />

      <ContactFormSection />
    </div>
  );
}
