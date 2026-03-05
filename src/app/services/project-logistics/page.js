import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Project Logistics",
  description:
    "DahNay Logistics project logistics services for complex, oversized and heavy cargo shipments with end-to-end planning and execution.",
  openGraph: {
    title: "Project Logistics | DahNay Logistics",
    description:
      "DahNay Logistics project logistics services for complex, oversized and heavy cargo shipments.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/project-logistics" },
};

export default function ProjectLogistics() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Project Logistics",
    url: "https://www.dahnay.com/services/project-logistics",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Project Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Project Logistics" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
