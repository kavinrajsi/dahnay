// Figma: node-id=434-7319
import Banner from "@/components/sections/Banner";
import PortsInfraSection from "@/components/sections/PortsInfraSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "DahNAY Ports & Infrastructure",
  description:
    "DahNAY's port and infrastructure solutions improve cargo handling efficiency, terminal operations, and yard management for ports and logistics hubs.",
  openGraph: {
    title: "DahNAY Ports & Infrastructure | DahNAY",
    description:
      "DahNAY's port and infrastructure solutions improve cargo handling efficiency, terminal operations, and yard management for ports and logistics hubs.",
    images: [{ url: "/images/banners/banner-desktop-ports-infra.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Why choose DahNAY as a growth partner?", answer: "DahNAY acts as a strategic logistics partner by offering scalable supply chain solutions, global freight expertise and technology-driven visibility. Businesses choose DahNAY to optimise costs, improve delivery timelines and support long-term growth." },
  { question: "Does DahNAY have a global presence?", answer: "DahNAY operates across key global trade routes with a strong presence in India, the UAE and the USA. Through a network of international partners, DahNAY ensures seamless global logistics and cross-border shipping solutions." },
  { question: "Does DahNAY offer shipment tracking?", answer: "Yes, DahNAY provides real-time shipment tracking and end-to-end visibility. Clients can monitor cargo movement, receive updates and stay informed throughout the shipping process." },
  { question: "What makes DahNAY different from other logistics providers?", answer: "DahNAY stands out through its customer-centric approach, global network, customised logistics solutions and strong focus on transparency. The company combines operational expertise with technology to deliver reliable and efficient supply chain services." },
];

export default function PortsInfraPage() {
  return (
    <div className="page page--ports-infra">
      <Banner
        title="DahNAY Ports &amp; Infra"
        desktopImage="/images/banners/banner-desktop-ports-infra.png"
      />

      <PortsInfraSection />

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
