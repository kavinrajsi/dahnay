import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Perishables Logistics",
  description:
    "DahNay Logistics perishables solutions - cold chain and temperature-controlled logistics for fresh produce, dairy, seafood and perishable goods.",
  openGraph: {
    title: "Perishables Logistics | DahNay Logistics",
    description:
      "Cold chain and temperature-controlled logistics for fresh produce and perishable goods.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/perishables" },
};

export default function Perishables() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Perishables Logistics",
    url: "https://www.dahnay.com/industries/perishables",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Perishables Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Perishables" image="/images/industry-perishables.jpg" />
      <WhyDahnay />
    </main>
  );
}
