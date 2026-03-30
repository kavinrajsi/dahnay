// Figma: node-id=434-6919
import Banner from "@/components/sections/Banner";
import LinesSection from "@/components/sections/LinesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "DahNAY Lines",
  description:
    "DahNAY Lines provides carrier and shipping line management tools for streamlined booking, documentation, and freight operations.",
  openGraph: {
    title: "DahNAY Lines | DahNAY",
    description:
      "DahNAY Lines provides carrier and shipping line management tools for streamlined booking, documentation, and freight operations.",
    images: [{ url: "/images/banners/banner-desktop-lines.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function LinesPage() {
  return (
    <div className="page page--lines">
      <Banner
        title="DahNAY Lines"
        desktopImage="/images/banners/banner-desktop-lines.png"
      />

      <LinesSection />

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
