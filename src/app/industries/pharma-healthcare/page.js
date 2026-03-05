import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Pharma & Healthcare Logistics",
  description:
    "DahNay Logistics pharma and healthcare solutions - temperature-controlled logistics ensuring safe, compliant transport of pharmaceutical and medical shipments.",
  openGraph: {
    title: "Pharma & Healthcare Logistics | DahNay Logistics",
    description:
      "Temperature-controlled logistics ensuring safe transport of pharmaceutical shipments.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/pharma-healthcare" },
};

export default function PharmaHealthcare() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pharma & Healthcare Logistics",
    url: "https://www.dahnay.com/industries/pharma-healthcare",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Pharmaceutical Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Pharma & Healthcare" image="/images/industry-pharma.jpg" />
      <WhyDahnay />
    </main>
  );
}
