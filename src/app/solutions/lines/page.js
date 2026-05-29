// Figma: node-id=434-6919
import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LinesSection from "@/components/sections/LinesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata = {
  title: "Shipping Line, FCL & Port Connectivity Logistics - DahNAY",
  description:
    "Support shipping line operations with DahNAY - FCL, LCL, port-to-port cargo, seamless port connectivity, and customs clearance across global trade lanes.",
  alternates: {
    canonical: "/solutions/lines",
  },
  openGraph: {
    title: "Shipping Line, FCL & Port Connectivity Logistics - DahNAY",
    description:
      "Support shipping line operations with DahNAY - FCL, LCL, port-to-port cargo, seamless port connectivity, and customs clearance across global trade lanes.",
    images: [{ url: "/images/banners/banner-desktop-lines.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Shipping Line, FCL & Port Connectivity Logistics - DahNAY",
    description:
      "Support shipping line operations with DahNAY - FCL, LCL, port-to-port cargo, seamless port connectivity, and customs clearance across global trade lanes.",
    images: ["/images/banners/banner-desktop-lines.png"],
  },
};


const faqItems = [
  { question: "What is DahNAY Lines?", answer: "DahNAY Lines is a carrier and shipping-line management solution that streamlines container booking, sailing schedules, freight documentation, and rate management across global ocean and inland networks. It connects shippers with vetted ocean carriers through a unified booking interface and consolidated commercial workflow." },
  { question: "How does DahNAY Lines simplify container booking?", answer: "DahNAY Lines streamlines ocean container booking with carrier rate comparison, real-time space availability, sailing schedule consolidation, and one-click booking workflows. Shippers and freight forwarders save planning time, secure capacity during peak demand, and access pre-negotiated rates with major shipping lines." },
  { question: "Does DahNAY Lines support both FCL and LCL bookings?", answer: "Yes, DahNAY Lines supports Full Container Load (FCL) for dedicated container shipments and Less than Container Load (LCL) for shared container space. Shippers can compare carrier options, route alternatives, and rates for both formats through the same booking interface, optimising freight cost and transit time." },
  { question: "Which shipping lines does DahNAY work with?", answer: "DahNAY Lines partners with major global ocean carriers and regional feeder operators serving India, the UAE, the USA, Southeast Asia, and major African and European trade lanes. Through these partnerships, customers access guaranteed space allocations, flexible rate structures, and reliable transit times. [CONFIRM: list of named carrier partners, e.g., Maersk, MSC, ONE]" },
];

const path = "/solutions/lines";
const trail = [
  { name: "Home", path: "/" },
  { name: "DahNAY Lines", path },
];
const schemas = [
  breadcrumbList(trail),
  serviceSchema({
    name: "DahNAY Lines",
    description: metadata.description,
    image: "/images/banners/banner-desktop-lines.png",
    path,
    serviceType: "Carrier & Shipping Line Management",
  }),
  faqSchema(faqItems),
];

export default function LinesPage() {
  return (
    <div className="page page--lines">
      <JsonLd data={schemas} />
      <Banner
        title="DahNAY Lines"
        desktopImage="/images/banners/banner-desktop-lines.png"
      />
      <Breadcrumb trail={trail} />

      <LinesSection />

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
