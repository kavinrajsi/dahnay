// Figma: node-id=434-7990
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Machinery - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/machinery/heavy-machinery.png", title: "Heavy Machinery Transport", description: "Specialised logistics for large-scale industrial machinery and equipment." },
  { image: "/images/industries/machinery/oversized-cargo.png", title: "Oversized Cargo Movement", description: "Route planning and transport execution for oversized and out-of-gauge cargo." },
  { image: "/images/industries/machinery/multimodal.png", title: "Multimodal Freight Coordination", description: "Integrated air, sea and road transport for complex machinery shipments." },
  { image: "/images/industries/machinery/factory-to-site.png", title: "Factory-to-Site Delivery", description: "End-to-end delivery from manufacturing plants to project installation sites." },
  { image: "/images/industries/machinery/breakbulk.png", title: "Breakbulk Cargo Logistics", description: "Handling and transport of non-containerised heavy and bulky cargo." },
  { image: "/images/industries/machinery/distribution.png", title: "Industrial Equipment Distribution", description: "Distribution logistics for industrial equipment across domestic and international markets." },
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

export default function MachineryPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Machinery"
        desktopImage="/images/banners/banner-desktop-machinery.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="Precision logistics for machinery"
            content="From factory equipment to large-scale engineering systems, industrial cargo demands specialised handling and engineered logistics. We deliver it with the precision heavy industry requires."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to industrial manufacturing and engineering supply chains."
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
