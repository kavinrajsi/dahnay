import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Last-mile Delivery",
  description:
    "Fast, reliable last-mile delivery services from DahNay Logistics. Get shipments exactly where they need to be, on time, every time.",
  openGraph: {
    title: "Last-mile Delivery | DahNay Logistics",
    description:
      "Fast, reliable last-mile delivery services from DahNay Logistics.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/last-mile-delivery" },
};

export default function LastMileDelivery() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Last-mile Delivery",
    url: "https://www.dahnay.com/services/last-mile-delivery",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Last-mile Delivery",
    areaServed: "India",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Last-mile Delivery" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
