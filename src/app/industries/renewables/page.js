// Figma: node-id=432-3026
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Renewables - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/renewables/wind-energy.png", title: "Wind Energy Equipment Transport", description: "Logistics for turbine blades, nacelles and tower sections across global project sites." },
  { image: "/images/industries/renewables/solar-module.png", title: "Solar Module Logistics", description: "Secure handling and distribution of solar panels and mounting systems." },
  { image: "/images/industries/renewables/multimodal.png", title: "Multimodal Project Coordination", description: "Integrated air, sea and inland transport for large-scale renewable projects." },
  { image: "/images/industries/renewables/infrastructure.png", title: "Infrastructure Component Movement", description: "Transport of heavy infrastructure components to remote project locations." },
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

export default function RenewablesPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Renewables"
        desktopImage="/images/banners/banner-desktop-renewables.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="Powering the energy transition"
            content="Renewable energy projects involve large, complex and time-sensitive cargo. Turbine blades, solar modules and power infrastructure must move across continents and remote project sites without delays. DahNAY delivers structured logistics solutions designed to support renewable energy expansion, managing heavy components, coordinating multimodal transport and ensuring seamless project execution."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to renewable energy projects, ensuring efficient movement of equipment, components and infrastructure."
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
