// Figma: node-id=354-5309
import Banner from "@/components/sections/Banner";
import LogisticsSection from "@/components/sections/LogisticsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "DahNAY Logistics Platform",
  description:
    "DahNAY's logistics platform delivers end-to-end supply chain visibility, automated workflows, and data-driven insights for modern freight operations.",
  openGraph: {
    title: "DahNAY Logistics Platform | DahNAY",
    description:
      "DahNAY's logistics platform delivers end-to-end supply chain visibility, automated workflows, and data-driven insights for modern freight operations.",
    images: [{ url: "/images/banners/banner-desktop-logistics.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function LogisticsPage() {
  return (
    <div className="page page--logistics">
      <Banner
        title="DahNAY Logistics"
        desktopImage="/images/banners/banner-desktop-logistics.png"
      />

      <LogisticsSection />

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
