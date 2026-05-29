// Figma: node-id=354-5481
import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Industries",
  description:
    "DahNAY serves 10+ industry verticals with specialised logistics solutions — from automotive to renewables, FMCG to machinery.",
  canonical: "/industries",
  image: "/images/banners/banner-desktop-industries.png",
});

const faqItems = [
  { question: "Do you handle time-critical shipments?", answer: "Yes. Our solutions support industries operating on strict production and project timelines." },
  { question: "Can DahNAY manage oversized and project cargo?", answer: "Yes. We specialise in OOG and large-scale industrial shipments." },
  { question: "Which geographies do you serve?", answer: "We support domestic and international movements across key global markets." },
  { question: "Do you manage end-to-end logistics?", answer: "Yes. From freight forwarding to customs to last-mile distribution." },
];

const trail = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  const schemas = [breadcrumbList(trail), faqSchema(faqItems)];

  return (
    <div className="page page--industries">
      <JsonLd data={schemas} />
      <Banner
        title="Industries"
        desktopImage="/images/banners/banner-desktop-industries.png"
      />
      <Breadcrumb trail={trail} />

      <IndustriesGrid />

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
