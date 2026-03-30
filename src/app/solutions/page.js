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
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
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
