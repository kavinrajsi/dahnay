import styles from "./terms.module.css";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of DahNay Logistics website and services.",
  openGraph: {
    title: "Terms & Conditions | DahNay Logistics",
    description:
      "Read the terms and conditions governing the use of DahNay Logistics website and services.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/terms-and-conditions" },
};

export default function TermsAndConditions() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: "https://www.dahnay.com/terms-and-conditions",
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
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the DahNay Logistics website (www.dahnay.com) and our
            services, you agree to be bound by these Terms &amp; Conditions. If you do not
            agree, please do not use our website or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services</h2>
          <p>
            DahNay Logistics provides freight forwarding, sea freight, air freight, project
            logistics, CFS, warehousing, last-mile delivery, and Amazon fulfilment services.
            All services are subject to the specific terms agreed upon in individual service
            contracts.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. User Obligations</h2>
          <ul>
            <li>Provide accurate and complete information for all shipments and inquiries</li>
            <li>Comply with all applicable laws, regulations, and customs requirements</li>
            <li>Ensure proper packaging and labelling of goods</li>
            <li>Disclose hazardous or restricted materials in advance</li>
            <li>Pay all applicable charges and fees in a timely manner</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Limitation of Liability</h2>
          <p>
            DahNay Logistics shall not be liable for any indirect, incidental, special, or
            consequential damages arising from the use of our services or website. Our
            liability for cargo loss or damage shall be limited to the extent permitted by
            applicable international conventions and local laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this website are owned
            by DahNay Logistics. You may not reproduce, distribute, or use any content without
            our prior written consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Insurance</h2>
          <p>
            Unless specifically agreed otherwise, cargo insurance is the responsibility of the
            shipper. DahNay Logistics can arrange cargo insurance upon request at additional
            cost.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Force Majeure</h2>
          <p>
            DahNay Logistics shall not be liable for delays or failures in performance
            resulting from events beyond our reasonable control, including natural disasters,
            wars, strikes, government actions, pandemics, or other force majeure events.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and construed in accordance with
            the laws of India. Any disputes shall be subject to the exclusive jurisdiction of
            the courts in Chennai, Tamil Nadu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Modifications</h2>
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any time. Changes
            will be effective upon posting to this page.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Us</h2>
          <p>
            For questions regarding these Terms &amp; Conditions:
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
