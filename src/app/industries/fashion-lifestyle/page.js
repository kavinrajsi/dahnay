import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "Fashion & Lifestyle Logistics",
  description:
    "DahNay Logistics fashion and lifestyle solutions - fast, reliable logistics for apparel, accessories and lifestyle brands with seasonal demand management.",
  openGraph: {
    title: "Fashion & Lifestyle Logistics | DahNay Logistics",
    description:
      "Fast, reliable logistics for apparel, accessories and lifestyle brands.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries/fashion-lifestyle" },
};

export default function FashionLifestyle() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fashion & Lifestyle Logistics",
    url: "https://www.dahnay.com/industries/fashion-lifestyle",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Fashion Logistics",
    areaServed: "Worldwide",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Fashion & Lifestyle" image="/images/industry-fashion.jpg" />
      <WhyDahnay />
    </main>
  );
}
