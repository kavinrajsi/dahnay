import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Energy, Oil & Gas Logistics",
  description:
    "DahNay Logistics energy sector solutions - specialised logistics for oil, gas, and renewable energy equipment with heavy-lift and project cargo capabilities.",
  openGraph: {
    title: "Energy, Oil & Gas Logistics | DahNay Logistics",
    description:
      "Specialised logistics for oil, gas, and renewable energy equipment.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/energy-oil-gas" },
};

export default function EnergyOilGas() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Energy, Oil & Gas Logistics",
    url: "https://www.dahnay.com/industries/energy-oil-gas",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Energy Sector Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Energy, Oil & Gas" image="/images/industry-energy.jpg" />
      <WhyDahnay />
    </main>
  );
}
