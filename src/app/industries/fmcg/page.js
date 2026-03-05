import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "FMCG Logistics",
  description:
    "DahNay Logistics FMCG solutions - high-volume, fast-moving consumer goods logistics with efficient distribution networks and inventory management.",
  openGraph: {
    title: "FMCG Logistics | DahNay Logistics",
    description:
      "High-volume, fast-moving consumer goods logistics with efficient distribution.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/fmcg" },
};

export default function FMCG() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FMCG Logistics",
    url: "https://www.dahnay.com/industries/fmcg",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "FMCG Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="FMCG" image="/images/industry-fmcg.jpg" />
      <WhyDahnay />
    </main>
  );
}
