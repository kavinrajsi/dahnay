// Figma: node-id=354-5569
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "Automotive Industry - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/automotive/inbound-outbound.png", title: "Inbound and Outbound Transportation", description: "Coordinated movement of raw materials and finished goods across the automotive supply chain." },
  { image: "/images/industries/automotive/time-critical.png", title: "Time-critical movements", description: "Expedited logistics for urgent parts and components to maintain production schedules." },
  { image: "/images/industries/automotive/engines.png", title: "Engines and mechanical parts", description: "Specialised handling for heavy and high-value mechanical components." },
  { image: "/images/industries/automotive/accessories.png", title: "Accessories", description: "Efficient distribution of automotive accessories and aftermarket parts." },
  { image: "/images/industries/automotive/finished-vehicles.png", title: "Finished Vehicles Logistics", description: "End-to-end vehicle transportation from plant to dealership." },
  { image: "/images/industries/automotive/tyres-tubes.png", title: "Tyres and Tubes", description: "Bulk and retail logistics for tyres and tubes across markets." },
];

const whyDahnayItems = [
  { icon: <ContinuityIcon />, title: "Continuity-Focused Planning", content: "Logistics aligned to production cycles to prevent supply disruptions." },
  { icon: <MaterialIntegrityIcon />, title: "Material Integrity Assurance", content: "Handling protocols designed to minimise damage and moisture exposure." },
  { icon: <HighVolumeIcon />, title: "High-Volume Movement Expertise", content: "Proven capability in managing large-scale, repetitive shipments." },
  { icon: <MultimodalIcon />, title: "Multimodal Efficiency", content: "Integrated transport across road, rail and sea for cost and scale optimisation." },
];

const faqItems = [
  { question: "What types of automotive cargo does DahNAY handle?", answer: "We manage the full spectrum — from inbound raw materials and CKD/SKD kits to finished vehicle transport, engines, mechanical parts, tyres, tubes and aftermarket accessories." },
  { question: "Can you support just-in-time delivery for automotive production lines?", answer: "Yes. Our time-critical logistics are designed around production schedules, ensuring parts and components arrive precisely when needed to avoid line stoppages." },
  { question: "Do you handle finished vehicle logistics?", answer: "We provide end-to-end finished vehicle transport from manufacturing plants to dealerships, including multi-modal movement by road, rail and sea." },
  { question: "How do you ensure the safety of high-value automotive components?", answer: "We use specialised handling protocols, secure packaging and real-time tracking to protect engines, electronics and precision parts throughout transit." },
  { question: "Which regions does DahNAY serve for automotive logistics?", answer: "We operate across major automotive corridors spanning Asia, the Middle East, Europe, Africa and the Americas, with tailored solutions for each trade lane." },
];

export default function AutomotivePage() {
  return (
    <div className="page page--industry">
      <Banner
        title="Automotive Industry"
        desktopImage="/images/banners/banner-desktop-automotive.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="Powering the road ahead"
            content="The automotive industry operates on tightly synchronised supply chains, where production schedules, inventory levels and delivery timelines leave no room for error. With deep operational experience and strong global coordination, we keep production lines moving without disruption"
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to the automotive value chain. Each solution is structured to reduce downtime, manage risk and maintain production continuity."
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
