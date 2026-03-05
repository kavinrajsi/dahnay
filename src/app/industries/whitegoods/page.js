import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Whitegoods Logistics",
  description:
    "DahNay Logistics whitegoods solutions - secure transport and distribution of home appliances and consumer electronics with damage-free delivery.",
  openGraph: {
    title: "Whitegoods Logistics | DahNay Logistics",
    description:
      "Secure transport and distribution of home appliances and consumer electronics.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/whitegoods" },
};

export default function Whitegoods() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Whitegoods Logistics",
    url: "https://www.dahnay.com/industries/whitegoods",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Whitegoods Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Whitegoods" image="/images/industry-whitegoods.jpg" />
      <WhyDahnay />
    </main>
  );
}
