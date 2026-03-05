import styles from "./disclaimer.module.css";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for DahNay Logistics website regarding the accuracy and use of information provided.",
  openGraph: {
    title: "Disclaimer | DahNay Logistics",
    description:
      "Read the disclaimer for DahNay Logistics website regarding the accuracy and use of information provided.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/disclaimer" },
};

export default function Disclaimer() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: "https://www.dahnay.com/disclaimer",
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
        <h1 className={styles.title}>Disclaimer</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. General Information</h2>
          <p>
            The information provided on the DahNay Logistics website (www.dahnay.com) is for
            general informational purposes only. While we strive to keep the information
            accurate and up to date, we make no representations or warranties of any kind
            about the completeness, accuracy, reliability, or availability of the information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. No Professional Advice</h2>
          <p>
            The content on this website does not constitute professional, legal, financial, or
            customs advice. For specific guidance regarding shipping regulations, customs
            duties, or logistics requirements, please consult with qualified professionals or
            contact our team directly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. External Links</h2>
          <p>
            Our website may contain links to external websites. DahNay Logistics does not
            control and is not responsible for the content, privacy policies, or practices of
            any third-party websites. Inclusion of any link does not imply endorsement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Service Availability</h2>
          <p>
            Freight rates, transit times, service availability, and other information displayed
            on this website are indicative and subject to change without notice. Final pricing
            and terms will be confirmed in individual service agreements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall DahNay Logistics be liable for any loss or damage including,
            without limitation, indirect or consequential loss or damage arising from or in
            connection with the use of this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Us</h2>
          <p>
            If you have questions about this disclaimer:
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
