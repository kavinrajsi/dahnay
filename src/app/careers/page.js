import PageBanner from "../../components/PageBanner";

export const metadata = {
  title: "Careers",
  description:
    "Join DahNay Logistics and build your career in global freight forwarding and supply chain management. Explore open positions and grow with us.",
  openGraph: {
    title: "Careers | DahNay Logistics",
    description:
      "Join DahNay Logistics and build your career in global freight forwarding and supply chain management.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/careers" },
};

export default function Careers() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers at DahNay Logistics",
    url: "https://www.dahnay.com/careers",
    description: metadata.description,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Careers" image="/images/banner-container-terminal.jpg" />
    </main>
  );
}
