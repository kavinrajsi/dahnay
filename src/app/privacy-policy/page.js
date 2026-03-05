import styles from "./privacy-policy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how DahNay Logistics collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  openGraph: {
    title: "Privacy Policy | DahNay Logistics",
    description:
      "Learn how DahNay Logistics collects, uses, and protects your personal information.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://www.dahnay.com/privacy-policy",
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
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            DahNay Logistics (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website www.dahnay.com or use our
            logistics services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name, email address, phone number, and company name</li>
            <li>Shipping and billing addresses</li>
            <li>Payment and financial information</li>
            <li>Cargo details and shipment documentation</li>
            <li>Communication records and correspondence</li>
          </ul>
          <h3>Automatically Collected Information</h3>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide, operate, and maintain our logistics services</li>
            <li>To process shipments, bookings, and transactions</li>
            <li>To communicate with you regarding your shipments and inquiries</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To detect and prevent fraud or security incidents</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing</h2>
          <p>
            We may share your information with trusted third parties including shipping
            carriers, customs authorities, warehousing partners, payment processors, and
            technology service providers solely for the purpose of delivering our services.
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security measures to protect
            your personal information against unauthorised access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the
            purposes outlined in this policy, comply with legal obligations, resolve disputes,
            and enforce our agreements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing
            experience. For more details, please refer to our{" "}
            <a href="/cookie-policy">Cookie Policy</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices of these external sites. We encourage you to review their
            privacy policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on
            this page with a revised &quot;Last updated&quot; date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:info@dahnay.com">info@dahnay.com</a>
            <br />
            Phone: <a href="tel:+914448567890">+91-44-4856-7890</a>
            <br />
            Address: Old No. 15, New No. 28, 3rd Floor, Rukmini Lakshmipathy Road, Egmore,
            Chennai, Tamil Nadu 600008, India
          </p>
        </section>
      </div>
    </main>
  );
}
