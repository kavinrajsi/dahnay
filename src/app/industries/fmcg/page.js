// Figma: node-id=434-8778
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "FMCG - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/fmcg/primary-distribution.png", title: "Primary Distribution Management", description: "Movement of finished goods from production facilities to distribution centres." },
  { image: "/images/industries/fmcg/secondary-last-mile.png", title: "Secondary & Last-Mile Distribution", description: "Final-stage delivery from warehouses to retail outlets and end consumers." },
  { image: "/images/industries/fmcg/high-velocity.png", title: "High-Velocity Inventory Movement", description: "Fast-cycle logistics designed for rapid stock rotation and replenishment." },
  { image: "/images/industries/fmcg/warehousing.png", title: "Warehousing Management", description: "Storage and inventory management aligned to demand forecasting and seasonal cycles." },
  { image: "/images/industries/fmcg/ecommerce.png", title: "E-commerce Fulfilment Support", description: "End-to-end fulfilment for direct-to-consumer and marketplace channels." },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "How does DahNAY handle high-velocity FMCG supply chains?", answer: "We design logistics workflows around demand cycles and rapid stock rotation, ensuring fast-cycle movement from production facilities to distribution centres and retail outlets." },
  { question: "Do you support e-commerce fulfilment for FMCG brands?", answer: "Yes. We provide end-to-end fulfilment for direct-to-consumer and marketplace channels, including pick-pack, dispatch and last-mile delivery." },
  { question: "Can DahNAY manage seasonal demand surges?", answer: "Our warehousing and distribution solutions are aligned to demand forecasting and seasonal cycles, allowing us to scale operations during peak periods." },
  { question: "What distribution models do you offer for FMCG?", answer: "We support primary distribution from factories to warehouses, secondary distribution to retail outlets and direct last-mile delivery to end consumers." },
  { question: "How do you maintain product integrity for FMCG goods?", answer: "We follow strict handling protocols designed to minimise damage, contamination and temperature exposure, ensuring products reach shelves in optimal condition." },
];

export default function FmcgPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="FMCG"
        desktopImage="/images/banners/banner-desktop-fmcg.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="The logistics behind every shelf"
            content="From production lines to retail shelves, FMCG supply chains demand speed, consistency and uninterrupted flow. We deliver with the precision fast-moving markets require."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to demand cycles, distribution networks and retail velocity. Every solution is engineered for speed, accuracy and consistency."
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
