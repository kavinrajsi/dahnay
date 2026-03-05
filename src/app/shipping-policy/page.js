import styles from "./shipping-policy.module.css";

export const metadata = {
  title: "Shipping Policy",
  description:
    "Understand DahNay Logistics shipping policy including delivery timelines, tracking, insurance, and claims procedures.",
  openGraph: {
    title: "Shipping Policy | DahNay Logistics",
    description:
      "Understand DahNay Logistics shipping policy including delivery timelines, tracking, insurance, and claims procedures.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/shipping-policy" },
};

export default function ShippingPolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shipping Policy",
    url: "https://www.dahnay.com/shipping-policy",
    description: metadata.description,
    publisher: { "@type": "Organization", name: "DahNay Logistics" },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Shipping Policy</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. Service Coverage</h2>
          <p>
            DahNay Logistics provides international freight forwarding services to over 35
            countries worldwide. Our services include sea freight, air freight, project
            logistics, CFS, warehousing, last-mile delivery, and Amazon fulfilment services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Delivery Timelines</h2>
          <p>
            Delivery timelines vary depending on the service type, origin, destination, and
            customs clearance requirements:
          </p>
          <ul>
            <li><strong>Sea Freight (FCL):</strong> 15-45 days depending on the route</li>
            <li><strong>Sea Freight (LCL):</strong> 20-50 days depending on consolidation</li>
            <li><strong>Air Freight:</strong> 3-10 days for standard shipments</li>
            <li><strong>Last-mile Delivery:</strong> 1-5 business days from warehouse</li>
          </ul>
          <p>
            These are estimated timelines and may vary due to weather, port congestion, customs
            delays, or other factors beyond our control.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Tracking</h2>
          <p>
            We provide real-time shipment tracking for all services. Once your shipment is
            booked, you will receive a tracking number and can monitor your cargo through our
            tracking portal or by contacting our customer service team.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Packaging Requirements</h2>
          <p>
            All goods must be properly packaged and labelled before handover. DahNay Logistics
            is not responsible for damage caused by inadequate packaging. Special packaging
            requirements for hazardous, fragile, or temperature-sensitive goods must be
            communicated in advance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Customs & Documentation</h2>
          <p>
            Clients are responsible for providing accurate and complete customs documentation.
            DahNay Logistics can assist with customs brokerage and documentation preparation.
            Any delays caused by incomplete or inaccurate documentation are the
            responsibility of the shipper.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Insurance</h2>
          <p>
            Cargo insurance is available upon request. We strongly recommend insuring all
            shipments against loss or damage. Insurance terms and coverage will be detailed in
            your service agreement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Claims</h2>
          <p>
            Claims for loss or damage must be filed within 14 days of delivery (or expected
            delivery date for lost shipments). Claims must include supporting documentation
            such as photographs, delivery receipts, and commercial invoices.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Prohibited & Restricted Items</h2>
          <p>
            DahNay Logistics does not ship illegal items, explosives, or items prohibited by
            international regulations. Restricted items such as hazardous materials require
            prior approval and special handling arrangements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Contact Us</h2>
          <p>
            For shipping inquiries:
          </p>
          <p>
            Email: <a href="mailto:info@dahnay.com">info@dahnay.com</a>
            <br />
            Phone: <a href="tel:+914448567890">+91-44-4856-7890</a>
          </p>
        </section>
      </div>
    </main>
  );
}
