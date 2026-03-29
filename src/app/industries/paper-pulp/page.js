// Figma: node-id=354-6305
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Paper & Pulp - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/paper-pulp/bulk-pulp.png", title: "Bulk Pulp Transportation" },
  { image: "/images/industries/paper-pulp/paper-reel.png", title: "Paper Reel & Sheet Handling" },
  { image: "/images/industries/paper-pulp/moisture-controlled.png", title: "Moisture-Controlled Logistics" },
  { image: "/images/industries/paper-pulp/warehousing.png", title: "Warehousing & Inventory Management" },
  { image: "/images/industries/paper-pulp/high-volume.png", title: "High-Volume Distribution" },
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

export default function PaperPulpPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Paper &amp; Pulp"
        desktopImage="/images/banners/banner-desktop-paper-pulp.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="Logistics that keeps paper & pulp in motion"
            content="From mills to markets, paper and pulp supply chains demand volume efficiency, material integrity and uninterrupted flow. We deliver with the control continuous production depends on."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to production cycles, storage conditions and distribution demand. Every solution is engineered to protect material quality while optimising scale."
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
