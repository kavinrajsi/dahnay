import PageBanner from "../../components/PageBanner";

export const metadata = {
  title: "Newsroom",
  description:
    "Stay updated with the latest news, press releases and industry insights from DahNay Logistics.",
  openGraph: {
    title: "Newsroom | DahNay Logistics",
    description:
      "Stay updated with the latest news, press releases and industry insights from DahNay Logistics.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/newsroom" },
};

export default function Newsroom() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Newsroom - DahNay Logistics",
    url: "https://www.dahnay.com/newsroom",
    description: metadata.description,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Newsroom" image="/images/banner-container-terminal.jpg" />
    </main>
  );
}
