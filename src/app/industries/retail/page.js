import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Retail Logistics",
  description:
    "DahNay Logistics retail solutions - end-to-end supply chain management for retail businesses with warehousing, distribution and last-mile delivery.",
  openGraph: {
    title: "Retail Logistics | DahNay Logistics",
    description:
      "End-to-end supply chain management for retail businesses.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/retail" },
};

export default function Retail() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Retail Logistics",
    url: "https://www.dahnay.com/industries/retail",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Retail Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Retail" image="/images/industry-retail.jpg" />
      <WhyDahnay />
    </main>
  );
}
