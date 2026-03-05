import styles from "./cookie-policy.module.css";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Understand how DahNay Logistics uses cookies and similar technologies on our website.",
  openGraph: {
    title: "Cookie Policy | DahNay Logistics",
    description:
      "Understand how DahNay Logistics uses cookies and similar technologies on our website.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/cookie-policy" },
};

export default function CookiePolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    url: "https://www.dahnay.com/cookie-policy",
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
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.updated}>Last updated: March 2026</p>

        <section className={styles.section}>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit our website.
            They help us provide a better browsing experience by remembering your preferences
            and understanding how you use our site.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            Required for the website to function properly. These cannot be disabled and include
            session management and security cookies.
          </p>
          <h3>Analytics Cookies</h3>
          <p>
            Help us understand how visitors interact with our website by collecting and
            reporting information anonymously. This includes tools such as Google Analytics.
          </p>
          <h3>Functional Cookies</h3>
          <p>
            Enable enhanced functionality and personalisation, such as remembering your
            language preferences or region.
          </p>
          <h3>Marketing Cookies</h3>
          <p>
            Used to track visitors across websites to display relevant advertisements. These
            cookies are set by our advertising partners.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers
            allow you to:
          </p>
          <ul>
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from particular websites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking cookies may affect your experience on our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We do
            not control these cookies. Third-party providers include analytics services, social
            media platforms, and advertising networks.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically. Any changes will be posted on this
            page.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Us</h2>
          <p>
            If you have questions about our use of cookies:
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
