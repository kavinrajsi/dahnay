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
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
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
