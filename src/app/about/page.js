import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Learn about DahNay Logistics - 20+ years of experience, 5000+ happy clients, operations in 35+ countries. Founded by Mr. Murali Babu, we grow the now for businesses and economies.",
  openGraph: {
    title: "About Us | DahNay Logistics",
    description:
      "Learn about DahNay Logistics - 20+ years of experience, 5000+ happy clients, operations in 35+ countries.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/about" },
};

const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "5000+", label: "Happy Clients" },
  { number: "1000+", label: "Partners" },
  { number: "20+", label: "Offices Worldwide" },
];

const driveCards = [
  {
    icon: "/images/icon-vision.svg",
    title: "Vision",
    text: "To be a complete and future-ready logistics partner, delivering growth that creates a ripple effect of prosperity for every stakeholder we serve, guided by uncompromising values.",
  },
  {
    icon: "/images/icon-mission.svg",
    title: "Mission",
    text: "Drive growth-in-action every day, investing in talent, building deeper partnerships and delivering logistics that move businesses forward.",
  },
  {
    icon: "/images/icon-values.svg",
    title: "Values",
    text: "Integrity, Curiosity, Empathy, Responsibility, Inclusion",
  },
];

export default function AboutUs() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About DahNay Logistics",
    url: "https://www.dahnay.com/about",
    description: metadata.description,
    mainEntity: {
      "@type": "Organization",
      name: "DahNay Logistics",
      founder: { "@type": "Person", name: "Mr. Murali Babu" },
      foundingDate: "2004",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
      areaServed: "Worldwide",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/images/about-banner.jpg"
          alt="About DahNAY"
          fill
          priority
        />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            We grow the now{" "}
            for businesses, economies and people.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className={styles.whoWeAre}>
        <div className={styles.whoWeAreImage}>
          <Image
            className={styles.whoWeAreImageInner}
            src="/images/about-project-cargo.jpg"
            alt="DahNAY Project Cargo"
            fill
          />
        </div>
        <div className={styles.whoWeAreContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Who we are</span>
          </div>
          <p className={styles.whoWeAreText}>
            At DahNAY, growth isn&apos;t just a business outcome, it&apos;s a journey. From a single desk to 35+ countries, what&apos;s grown with us is a belief in people, in progress and in the power of showing up, shipment after shipment. Every milestone we&apos;ve reached is stitched with late nights, honest calls, small wins, big leaps and a team that never stopped caring. And the journey has only just begun.
          </p>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <p className={styles.statNumber}>{stat.number}</p>
                <div className={styles.statDivider} />
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className={styles.whatDrives}>
        <div className={styles.sectionHeader}>
          <div className={`${styles.badge} ${styles.badgeGrey}`}>
            <span className={styles.badgeText}>WHY US</span>
          </div>
          <h2 className={styles.sectionHeading}>What drives us</h2>
          <p className={styles.sectionDesc}>
            The passion that drives DahNAY is the belief that movement can empower progress for people, partners and economies.
          </p>
        </div>
        <div className={styles.driveCards}>
          {driveCards.map((card) => (
            <div key={card.title} className={styles.driveCard}>
              <Image
                className={styles.driveCardIcon}
                src={card.icon}
                alt=""
                width={70}
                height={70}
              />
              <div className={styles.driveCardBody}>
                <p className={styles.driveCardTitle}>{card.title}</p>
                <p className={styles.driveCardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CEO & Founder */}
      <section className={styles.ceo}>
        <div className={styles.ceoContent}>
          <div className={styles.ceoHeader}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>CEO &amp; Founder</span>
            </div>
            <h2 className={styles.ceoName}>Mr. Murali Babu</h2>
            <p className={styles.ceoText}>
              I&apos;m all about growth and efficiency. My passion for logistics drives me to excel further in the realm of logistics. At DahNAY, our mission is to Grow The Now, ensuring the seamless movement of your valuable cargo. When your cargo is in our hands, rest assured it receives our utmost attention. We provide tailored, efficient solutions because we understand the significance of your brand and reputation.
            </p>
          </div>
          <div className={styles.ceoSocials}>
            <a href="mailto:info@dahnay.com" className={styles.ceoSocialBtn} aria-label="Email">
              <Image
                className={styles.ceoSocialIcon}
                src="/images/icon-ceo-email.svg"
                alt="Email"
                width={20}
                height={20}
              />
            </a>
            <a href="https://www.linkedin.com/company/dahnaylogistics" target="_blank" rel="noopener noreferrer" className={styles.ceoSocialBtn} aria-label="LinkedIn">
              <Image
                className={styles.ceoSocialIcon}
                src="/images/icon-ceo-linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        <div className={styles.ceoImageWrap}>
          <Image
            className={styles.ceoImage}
            src="/images/about-murali.jpg"
            alt="Mr. Murali Babu"
            fill
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.cta}>
        <Image
          className={styles.ctaImage}
          src="/images/about-cta-bg.jpg"
          alt=""
          fill
        />
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            Need a partner you can<br />Trust?
          </h2>
          <p className={styles.ctaText}>
            Partner with DahNAY for smarter logistics: transparent pricing, proactive support and solutions designed to fit your growth.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Join us
          </Link>
        </div>
      </section>
    </main>
  );
}
