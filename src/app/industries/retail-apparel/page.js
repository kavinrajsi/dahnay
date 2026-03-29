// Figma: node-id=434-12216
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Retail & Apparel - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/retail-apparel/sourcing.png", title: "Sourcing & Inbound Logistics" },
  { image: "/images/industries/retail-apparel/time-sensitive.png", title: "Time-Sensitive Freight Solutions" },
  { image: "/images/industries/retail-apparel/global-export.png", title: "Global Export & Distribution" },
  { image: "/images/industries/retail-apparel/ecommerce.png", title: "E-commerce Fulfilment Support" },
  { image: "/images/industries/retail-apparel/replenishment.png", title: "Retail Replenishment" },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function RetailApparelPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Retail &amp; Apparel"
        desktopImage="/images/banners/banner-desktop-retail-apparel.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="At the pace of demand"
            content="Fashion operates on tight launch windows and compressed retail cycles. Timing defines success. DahNAY aligns sourcing, production and distribution to market demand, ensuring collections reach the right markets, right on schedule."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to fashion production and retail cycles, structured to reduce delays and timelines."
        items={expertiseItems}
        layout="grid"
      />

      <WhyDahnay
        title="Why DahNAY"
        items={whyDahnayItems}
      />

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
