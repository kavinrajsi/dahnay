// Figma: node-id=434-9172
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Natural Rubber - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/natural-rubber/plantation-to-port.png", title: "Plantation-to-Port Movement" },
  { image: "/images/industries/natural-rubber/bulk-commodity.png", title: "Bulk Commodity Transport" },
  { image: "/images/industries/natural-rubber/containerised-export.png", title: "Containerised Export Logistics" },
  { image: "/images/industries/natural-rubber/multimodal.png", title: "Multimodal Freight Coordination" },
  { image: "/images/industries/natural-rubber/processing-equipment.png", title: "Rubber Processing Equipment" },
  { image: "/images/industries/natural-rubber/warehousing.png", title: "Warehousing & Distribution" },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?", answer: "Lorem ipsum dolor sit amet consectetur." },
  { question: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio?", answer: "Lorem ipsum dolor sit amet consectetur." },
];

export default function NaturalRubberPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Natural Rubber"
        desktopImage="/images/banners/banner-desktop-natural-rubber.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="From plantation to production"
            content="Natural rubber supply chains connect plantations, processing units and global manufacturing industries such as tyres, automotive and industrial goods. The cargo moves in high volumes across export corridors and requires efficient containerised transport. DahNAY delivers structured logistics solutions designed for commodity-scale movement, ensuring natural rubber shipments move seamlessly from production hubs to global markets."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to rubber production cycles and export trade flows."
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
