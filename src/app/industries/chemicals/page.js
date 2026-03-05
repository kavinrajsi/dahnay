import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Chemicals Logistics",
  description:
    "DahNay Logistics chemicals solutions - HAZMAT-certified logistics for safe transport of chemicals, hazardous materials and industrial compounds with full regulatory compliance.",
  openGraph: {
    title: "Chemicals Logistics | DahNay Logistics",
    description:
      "HAZMAT-certified logistics for safe transport of chemicals and hazardous materials.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/chemicals" },
};

export default function Chemicals() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chemicals Logistics",
    url: "https://www.dahnay.com/industries/chemicals",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Chemicals Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Chemicals" image="/images/industry-chemicals.jpg" />
      <WhyDahnay />
    </main>
  );
}
