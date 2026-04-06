import Banner from "@/components/sections/Banner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Our Services",
  description:
    "Explore DahNAY's full range of logistics services — air freight, sea freight, customs clearance, trucking, last-mile delivery, and more.",
  openGraph: {
    title: "Our Services | DahNAY",
    description:
      "Explore DahNAY's full range of logistics services — air freight, sea freight, customs clearance, trucking, last-mile delivery, and more.",
    images: [{ url: "/images/banners/banner-desktop-air-freight.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "What are the additional services DahNAY offers?", answer: "DahNAY offers a wide range of logistics services including warehousing, distribution, customs clearance, cargo consolidation, project logistics and last mile delivery." },
  { question: "Do you handle both import and export shipments?", answer: "DahNAY manages both import and export logistics with expertise in international shipping regulations, customs compliance and global trade documentation." },
  { question: "How does DahNAY ensure shipment visibility?", answer: "DahNAY provides real-time tracking, proactive updates and digital visibility tools that allow clients to monitor shipments across the supply chain." },
  { question: "What is DahNAY's approach to air freight?", answer: "DahNAY focuses on speed, reliability and flexibility in air freight. The company works with leading airlines to ensure timely delivery, even for urgent and high-value cargo." },
  { question: "Do you provide warehousing and distribution services?", answer: "Yes, DahNAY offers integrated warehousing and distribution solutions, including inventory management, storage and order fulfilment across key global locations." },
  { question: "What is a Container Freight Station (CFS), and how does DahNAY support it?", answer: "A Container Freight Station is a facility where cargo is consolidated or deconsolidated for shipping. DahNAY provides CFS services with 2 CFS in India, including cargo handling, storage, customs clearance and container management." },
  { question: "How do you customize logistics solutions?", answer: "DahNAY designs tailored logistics solutions based on cargo type, industry requirements, timelines and cost considerations, ensuring efficient and scalable supply chain operations." },
];

export default function ServicePage() {
  return (
    <div className="page page--services">
      <Banner
        title="Services"
        desktopImage="/images/banners/banner-desktop-services.png"
      />

      <ServicesGrid />

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
