import Banner from "@/components/sections/Banner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Our Services",
  description:
    "Explore DahNAY's full range of logistics services — air freight, sea freight, customs clearance, trucking, last-mile delivery, and more.",
  openGraph: {
    title: "Our Services | DahNAY",
    description:
      "Explore DahNAY's full range of logistics services — air freight, sea freight, customs clearance, trucking, last-mile delivery, and more.",
    images: [{ url: "/images/banners/banner-desktop-air-freight.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function ServicePage() {
  return (
    <div className="page page--services">
      <Banner
        title="Services"
        desktopImage="/images/banners/banner-desktop-services.png"
      />

      <ServicesGrid />

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
