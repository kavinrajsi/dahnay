// Figma: node-id=354-5309
import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LogisticsSection from "@/components/sections/LogisticsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata = {
  title: "DahNAY Logistics Platform",
  description:
    "DahNAY's logistics platform delivers end-to-end supply chain visibility, automated workflows, and data-driven insights for modern freight operations.",
  openGraph: {
    title: "DahNAY Logistics Platform | DahNAY",
    description:
      "DahNAY's logistics platform delivers end-to-end supply chain visibility, automated workflows, and data-driven insights for modern freight operations.",
    images: [{ url: "/images/banners/banner-desktop-logistics.png", width: 1200, height: 630 }],
  },
};

const faqItems = [
  { question: "What is the DahNAY logistics platform?", answer: "The DahNAY logistics platform is an end-to-end supply chain management system providing real-time shipment tracking, automated documentation, freight booking, and visibility across air, sea, road, and warehouse operations. It connects shippers with consolidated logistics data through a single interface for planning, execution, and reporting." },
  { question: "How does DahNAY's logistics platform improve shipment visibility?", answer: "DahNAY's platform delivers real-time shipment tracking with milestone alerts, geo-location updates, exception notifications, and consolidated dashboards across modes and carriers. Customers get a single view of all shipments in transit, enabling proactive issue management and accurate ETAs for downstream operations and customers." },
  { question: "Can the DahNAY logistics platform integrate with ERP systems?", answer: "Yes, DahNAY's logistics platform supports integration with enterprise systems including ERP, WMS, and TMS platforms via standard APIs and EDI connections. This enables automated shipment booking, invoice reconciliation, and data flow between supply chain partners without manual entry. [CONFIRM: specific ERP integrations supported, e.g., SAP, Oracle, NetSuite]" },
  { question: "Who can use the DahNAY logistics platform?", answer: "Manufacturers, exporters, importers, distributors, and 3PL clients across automotive, FMCG, retail, energy, and construction sectors use DahNAY's logistics platform. The system scales from single-shipment operators to enterprise customers with multi-country, multi-mode supply chains, with role-based access for shippers, carriers, and consignees." },
];

const path = "/solutions/logistics";
const trail = [
  { name: "Home", path: "/" },
  { name: "DahNAY Logistics", path },
];
const schemas = [
  breadcrumbList(trail),
  serviceSchema({
    name: "DahNAY Logistics Platform",
    description: metadata.description,
    image: "/images/banners/banner-desktop-logistics.png",
    path,
    serviceType: "Logistics Platform",
  }),
  faqSchema(faqItems),
];

export default function LogisticsPage() {
  return (
    <div className="page page--logistics">
      <JsonLd data={schemas} />
      <Banner
        title="DahNAY Logistics"
        desktopImage="/images/banners/banner-desktop-logistics.png"
      />
      <Breadcrumb trail={trail} />

      <LogisticsSection />

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
