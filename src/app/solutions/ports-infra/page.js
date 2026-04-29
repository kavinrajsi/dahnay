// Figma: node-id=434-7319
import Banner from "@/components/sections/Banner";
import PortsInfraSection from "@/components/sections/PortsInfraSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { LAST_REVIEWED_DISPLAY, LAST_REVIEWED_ISO } from "@/lib/site-meta";

export const metadata = {
  title: "DahNAY Ports & Infrastructure",
  description:
    "DahNAY's port and infrastructure solutions improve cargo handling efficiency, terminal operations, and yard management for ports and logistics hubs.",
  openGraph: {
    title: "DahNAY Ports & Infrastructure | DahNAY",
    description:
      "DahNAY's port and infrastructure solutions improve cargo handling efficiency, terminal operations, and yard management for ports and logistics hubs.",
    images: [{ url: "/images/banners/banner-desktop-ports-infra.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "What does DahNAY Ports and Infrastructure cover?", answer: "DahNAY Ports and Infrastructure provides cargo handling efficiency, terminal operations support, yard management, and equipment optimisation for ports and inland container depots. We help port operators, ICD facilities, and logistics hubs improve container throughput, reduce dwell times, and streamline gate-in and gate-out processes." },
  { question: "How does DahNAY improve port and terminal operations?", answer: "DahNAY improves port operations through yard layout planning, equipment scheduling, gate management, and operational analytics. We work with terminals to optimise container moves per hour, reduce truck turn times, and improve berth productivity, helping port operators handle increased volumes without major infrastructure expansion." },
  { question: "Does DahNAY support inland container depots and dry ports?", answer: "Yes, DahNAY supports inland container depots, dry ports, and container freight stations with operational consulting, equipment optimisation, and terminal management services. We help inland facilities serve as efficient extensions of major seaports, enabling faster customs clearance and seamless intermodal transfers between sea, rail, and road." },
  { question: "Where does DahNAY operate port and infrastructure services?", answer: "DahNAY supports port and infrastructure operations primarily across India, with strong presence at major container ports including Chennai, Mumbai, Krishnapatnam, and Tuticorin. Our 47 offices in 19+ countries enable us to extend port operational expertise to client facilities across South Asia, the Middle East, and Africa." },
];

const path = "/solutions/ports-infra";
const schemas = [
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/" },
    { name: "Ports & Infrastructure", path },
  ]),
  serviceSchema({
    name: "DahNAY Ports & Infrastructure",
    description: metadata.description,
    image: "/images/banners/banner-desktop-ports-infra.png",
    path,
    serviceType: "Port & Infrastructure Solutions",
  }),
  webPageSchema({
    name: "DahNAY Ports & Infrastructure",
    description: metadata.description,
    path,
    dateModified: LAST_REVIEWED_ISO,
  }),
  faqSchema(faqItems),
];

export default function PortsInfraPage() {
  return (
    <div className="page page--ports-infra">
      <JsonLd data={schemas} />
      <Banner
        title="DahNAY Ports &amp; Infra"
        desktopImage="/images/banners/banner-desktop-ports-infra.png"
      />
      <p className="solution-page__last-reviewed container">
        Last reviewed:{" "}
        <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_DISPLAY}</time>
      </p>

      <PortsInfraSection />

      <FAQSection
        tag="FAQs"
        title="Frequently Asked"
        titleAccent="Questions"
        content="Ensure every shipment is precise, on time and fully optimised with DahNAY's intelligent logistics network and real-time visibility"
        items={faqItems}
      />

      <ContactFormSection />
    </div>
  );
}
