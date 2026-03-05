import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Paper & Pulp Logistics",
  description:
    "DahNay Logistics paper and pulp solutions - specialised handling and transport of paper, pulp and packaging materials with moisture-controlled logistics.",
  openGraph: {
    title: "Paper & Pulp Logistics | DahNay Logistics",
    description:
      "Specialised handling and transport of paper, pulp and packaging materials.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/paper-pulp" },
};

export default function PaperPulp() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paper & Pulp Logistics",
    url: "https://www.dahnay.com/industries/paper-pulp",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Paper and Pulp Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Paper & Pulp" image="/images/industry-paper.jpg" />
      <WhyDahnay />
    </main>
  );
}
