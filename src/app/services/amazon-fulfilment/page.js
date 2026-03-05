import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Amazon Fulfilment Services",
  description:
    "DahNay Logistics Amazon fulfilment services - registered Amazon Service Provider for international shipping with effortless returns and reverse logistics.",
  openGraph: {
    title: "Amazon Fulfilment Services | DahNay Logistics",
    description:
      "DahNay Logistics Amazon fulfilment services - registered Amazon Service Provider for international shipping.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/amazon-fulfilment" },
};

export default function AmazonFulfilment() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Amazon Fulfilment Services",
    url: "https://www.dahnay.com/services/amazon-fulfilment",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Amazon Fulfilment",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Amazon Fulfilment Services" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
