// Figma: node-id=434-8384
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Construction Materials - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/construction-materials/bulk-material.png", title: "Bulk Material Transportation", description: "High-volume transport of cement, aggregates and raw construction materials." },
  { image: "/images/industries/construction-materials/steel-structural.png", title: "Steel & Structural Logistics", description: "Specialised handling and transport of steel, rebar and structural components." },
  { image: "/images/industries/construction-materials/project-heavy.png", title: "Project & Heavy Cargo Movement", description: "Engineered logistics for oversized and heavy construction equipment." },
  { image: "/images/industries/construction-materials/phased-delivery.png", title: "Phased Site Delivery Planning", description: "Sequenced deliveries aligned to construction milestones and site readiness." },
  { image: "/images/industries/construction-materials/last-mile-site.png", title: "Last-Mile Site Access Solutions", description: "Final-mile delivery to construction sites with access constraints." },
  { image: "/images/industries/construction-materials/modular.png", title: "Modular Component Transport", description: "Transport of prefabricated and modular building components." },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "What construction materials can DahNAY transport?", answer: "We handle cement, aggregates, steel, rebar, structural components, prefabricated modules and oversized construction equipment across domestic and international routes." },
  { question: "Can you deliver materials to remote or access-restricted construction sites?", answer: "Yes. Our last-mile site access solutions are designed for constrained locations, including narrow roads, urban builds and remote project sites." },
  { question: "Do you offer phased delivery aligned to construction schedules?", answer: "Absolutely. We plan sequenced deliveries matched to your construction milestones, ensuring materials arrive at the right stage of the build." },
  { question: "How do you handle oversized or heavy construction cargo?", answer: "We provide engineered logistics with route surveys, permits, specialised trailers and lifting equipment for heavy and out-of-gauge cargo." },
  { question: "Can DahNAY manage high-volume bulk material shipments?", answer: "Yes. We have proven capability in managing large-scale, repetitive shipments of bulk construction materials with consistent scheduling and supply continuity." },
];

export default function ConstructionMaterialsPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Construction Materials"
        desktopImage="/images/banners/banner-desktop-construction-materials.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="Construction materials logistics"
            content="From raw materials like cement to ready-to-install components, construction supply chains demand speed, scale and synchronised delivery. We deliver with the precision large projects depend on."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to project timelines, site readiness and material dependencies. Every solution is engineered for reliability, efficiency and control."
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
