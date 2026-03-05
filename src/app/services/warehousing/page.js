import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Warehousing",
  description:
    "Secure, scalable warehousing and distribution solutions from DahNay Logistics. Keep your inventory closer, smarter and ready to move.",
  openGraph: {
    title: "Warehousing Services | DahNay Logistics",
    description:
      "Secure, scalable warehousing and distribution solutions from DahNay Logistics.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/warehousing" },
};

export default function Warehousing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Warehousing Services",
    url: "https://www.dahnay.com/services/warehousing",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Warehousing and Distribution",
    areaServed: "India",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Warehousing" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
