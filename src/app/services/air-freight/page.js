import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Air Freight",
  description:
    "Fast, secure air freight services from DahNay Logistics ensuring timely deliveries worldwide with optimised routes and real-time tracking.",
  openGraph: {
    title: "Air Freight Services | DahNay Logistics",
    description:
      "Fast, secure air freight services from DahNay Logistics ensuring timely deliveries worldwide.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/air-freight" },
};

export default function AirFreight() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Air Freight Services",
    url: "https://www.dahnay.com/services/air-freight",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Air Freight Forwarding",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Air Freight" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
