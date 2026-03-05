import PageBanner from "../../../components/PageBanner";
import WhyDahnay from "../../../components/WhyDahnay";

export const metadata = {
  title: "CFS (Container Freight Station)",
  description:
    "DahNay Logistics CFS services for seamless cargo handling, storage and distribution at container freight stations with speed and efficiency.",
  openGraph: {
    title: "CFS Services | DahNay Logistics",
    description:
      "DahNay Logistics CFS services for seamless cargo handling, storage and distribution.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/cfs" },
};

export default function CFS() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CFS (Container Freight Station)",
    url: "https://www.dahnay.com/services/cfs",
    description: metadata.description,
    provider: { "@type": "Organization", name: "DahNay Logistics" },
    serviceType: "Container Freight Station",
    areaServed: "India",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="CFS (Container Freight Station)" image="/images/banner-container-terminal.jpg" />
      <WhyDahnay />
    </main>
  );
}
