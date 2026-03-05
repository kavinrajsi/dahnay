import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Automotive Logistics",
  description:
    "DahNay Logistics automotive industry solutions - driving global supply chains with reliable, time-sensitive logistics for automotive manufacturers and suppliers.",
  openGraph: {
    title: "Automotive Logistics | DahNay Logistics",
    description:
      "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/automotive" },
};

export default function Automotive() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automotive Logistics",
    url: "https://www.dahnay.com/industries/automotive",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Automotive Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Automotive" image="/images/industry-automotive.jpg" />
      <WhyDahnay />
    </main>
  );
}
