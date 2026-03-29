// Figma: node-id=354-6111
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Energy, Oil & Gas - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/energy-oil-gas/project-heavy-lift.png", title: "Project & Heavy-Lift Logistics" },
  { image: "/images/industries/energy-oil-gas/upstream.png", title: "Upstream Equipment Movement" },
  { image: "/images/industries/energy-oil-gas/midstream.png", title: "Midstream & Pipeline Logistics" },
  { image: "/images/industries/energy-oil-gas/downstream.png", title: "Downstream & Refinery Cargo" },
  { image: "/images/industries/energy-oil-gas/hazardous.png", title: "Hazardous & Specialised Cargo" },
  { image: "/images/industries/energy-oil-gas/renewable-equipment.png", title: "Renewable Equipment Transport" },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "Does DahNAY handle hazardous cargo for the energy sector?", answer: "Yes. We are fully equipped for IMDG-compliant handling and transport of hazardous and regulated materials, with trained personnel and certified processes." },
  { question: "Can you manage logistics for remote upstream sites?", answer: "We specialise in moving drilling, exploration and wellhead equipment to remote and hard-to-reach locations, with route planning and site access coordination." },
  { question: "What types of energy projects does DahNAY support?", answer: "We support the full energy value chain — upstream exploration, midstream pipelines, downstream refinery operations and renewable energy infrastructure." },
  { question: "Do you handle heavy-lift and oversized cargo for energy projects?", answer: "Yes. Our project logistics team manages oversized and heavy-lift cargo including reactor vessels, turbines, transformers and pipeline sections." },
  { question: "Can DahNAY support the energy transition with renewable equipment logistics?", answer: "Absolutely. We provide logistics for renewable energy infrastructure including wind turbines, solar installations and battery storage systems as part of the energy sector transition." },
];

export default function EnergyOilGasPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Energy, Oil &amp; Gas"
        desktopImage="/images/banners/banner-desktop-energy-oil-gas.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="The logistics behind the pipeline"
            content="Energy and oil & gas operations extend across offshore platforms, drilling sites, refineries and cross-border infrastructure corridors. The cargo is oversized, high-value and often mission-critical. Timelines are fixed. Compliance is non-negotiable. DahNAY delivers structured, project-led logistics solutions engineered for industrial scale."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to upstream, midstream and downstream operations. Every solution is engineered to manage complexity, minimise risk and protect project timelines."
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
