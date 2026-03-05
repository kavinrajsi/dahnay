import HeroSlider from "../components/HeroSlider";

export const metadata = {
  title: "DahNay Logistics | Global Freight Forwarding & Supply Chain Solutions",
  description:
    "DahNay Logistics offers global sea freight, air freight, project logistics, warehousing, CFS, last-mile delivery and Amazon fulfilment services across 35+ countries. Grow The Now.",
  openGraph: {
    title: "DahNay Logistics | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "DahNay Logistics offers global sea freight, air freight, project logistics, warehousing, CFS, last-mile delivery and Amazon fulfilment services across 35+ countries.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com" },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DahNay Logistics - Home",
    url: "https://www.dahnay.com",
    description: metadata.description,
    publisher: { "@type": "Organization", name: "DahNay Logistics" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSlider />
    </main>
  );
}
