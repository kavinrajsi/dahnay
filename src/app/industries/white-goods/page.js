// Figma: node-id=354-6493
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon } from "@/components/icons/WhyDahnayIcons";

export const metadata = { title: "White Goods - DahNAY" };

const expertiseItems = [
  { image: "/images/industries/white-goods/factory-to-port.png", title: "Factory-to-Port Coordination" },
  { image: "/images/industries/white-goods/container-optimize.png", title: "Container Optimize & Load Planning" },
  { image: "/images/industries/white-goods/global-freight.png", title: "Global Freight Management" },
  { image: "/images/industries/white-goods/customs.png", title: "Customs & Regulatory Handling" },
  { image: "/images/industries/white-goods/warehousing.png", title: "Warehousing & Distribution" },
  { image: "/images/industries/white-goods/aftermarket.png", title: "Aftermarket & Spare Parts Logistics" },
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

export default function WhiteGoodsPage() {
  return (
    <div className="page page--industry">
      <Banner
        title="White Goods"
        desktopImage="/images/banners/banner-desktop-white-goods.png"
      />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag="Overview"
            title="The infrastructure behind appliances"
            content="White goods supply chains move high-volume, high-cubic and damage-sensitive cargo across domestic and international markets. Every shipment must align with production schedules, retail commitments and distributor timelines. DahNAY delivers logistics solutions engineered for appliance scale, optimising container utilisation, protecting cargo integrity and ensuring seamless movement from manufacturing hubs to distribution networks."
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag="Our Industry solutions"
        title="Our Expertise"
        content="We design logistics workflows aligned to appliance manufacturing output and retail distribution cycles, structured to protect cargo and maintain delivery commitments."
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
