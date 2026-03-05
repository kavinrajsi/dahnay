import PageBanner from "../../components/PageBanner";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DahNay Logistics for freight forwarding, shipping inquiries and logistics solutions. Reach us by email, phone, or visit our offices.",
  openGraph: {
    title: "Contact Us | DahNay Logistics",
    description:
      "Get in touch with DahNay Logistics for freight forwarding, shipping inquiries and logistics solutions.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/contact" },
};

export default function ContactUs() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact DahNay Logistics",
    url: "https://www.dahnay.com/contact",
    description: metadata.description,
    mainEntity: {
      "@type": "Organization",
      name: "DahNay Logistics",
      email: "info@dahnay.com",
      telephone: "+91-44-4856-7890",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Old No. 15, New No. 28, 3rd Floor, Rukmini Lakshmipathy Road, Egmore",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600008",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageBanner title="Contact Us" image="/images/banner-container-terminal.jpg" />
    </main>
  );
}
