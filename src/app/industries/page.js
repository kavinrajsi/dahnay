// Figma: node-id=354-5481
import Banner from "@/components/sections/Banner";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Industries",
  description:
    "DahNAY serves 10+ industry verticals with specialised logistics solutions — from automotive to renewables, FMCG to machinery.",
  openGraph: {
    title: "Industries | DahNAY",
    description:
      "DahNAY serves 10+ industry verticals with specialised logistics solutions — from automotive to renewables, FMCG to machinery.",
    images: [{ url: "/images/banners/banner-desktop-industries.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function IndustriesPage() {
  return (
    <div className="page page--industries">
      <Banner
        title="Industries"
        desktopImage="/images/banners/banner-desktop-industries.png"
      />

      <IndustriesGrid />

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
