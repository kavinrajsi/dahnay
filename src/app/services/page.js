import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Services",
  description:
    "Explore DahNay Logistics services: sea freight, air freight, project logistics, CFS, warehousing, last-mile delivery and Amazon fulfilment solutions.",
  openGraph: {
    title: "Our Services | DahNay Logistics",
    description:
      "Explore DahNay Logistics services: sea freight, air freight, project logistics, CFS, warehousing, last-mile delivery and Amazon fulfilment solutions.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services" },
};

const services = [
  {
    name: "Sea Freight",
    href: "/services/sea-freight",
    image: "/images/service-sea-freight.jpg",
    desc: "Efficient and reliable sea freight solutions that deliver your cargo across the globe.",
  },
  {
    name: "Project Logistics",
    href: "/services/project-logistics",
    image: "/images/service-project-logistics.jpg",
    desc: "Tailored project logistics that handle complex, oversized shipments with precision and expertise.",
  },
  {
    name: "Air Freight",
    href: "/services/air-freight",
    image: "/images/service-air-freight.jpg",
    desc: "Fast, secure air freight services ensuring timely deliveries, no matter the destination.",
  },
  {
    name: "CFS (Container Freight Station)",
    href: "/services/cfs",
    image: "/images/service-cfs.jpg",
    desc: "Optimised CFS services for seamless cargo handling, storage and distribution with speed and efficiency.",
  },
  {
    name: "Warehousing",
    href: "/services/warehousing",
    image: "/images/service-warehousing.jpg",
    desc: "Secure, scalable warehousing solutions that keep your inventory closer, smarter and ready to move.",
  },
  {
    name: "Last-mile delivery",
    href: "/services/last-mile-delivery",
    image: "/images/service-last-mile.jpg",
    desc: "Fast, reliable delivery that gets shipments exactly where they need to be, on time, every time.",
  },
  {
    name: "Amazon Fulfilment Services",
    href: "/services/amazon-fulfilment",
    image: "/images/service-amazon.jpg",
    desc: "Register Amazon Service Provider in International Shipping with effortless returns and reverse movement that close the loop without slowing you down.",
  },
];

export default function Services() {
  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 6);
  const row3 = services.slice(6);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services - DahNay Logistics",
    url: "https://www.dahnay.com/services",
    description: metadata.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `https://www.dahnay.com${s.href}`,
      })),
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
          src="/images/banner-container-terminal.jpg"
          alt="Services"
          fill
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Services we offer</span>
          </div>
          <h2 className={styles.introHeading}>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
        <p className={styles.introDesc}>
          Lorem ipsum dolor sit amet consectetur. Et nisl at pharetra amet orci sit.
          Scelerisque diam massa pharetra consectetur tristique scelerisque. Duis quis
          orci enim hac egestas. Urna non semper tristique ultrices id turpis.
        </p>
      </section>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
        <div className={styles.servicesRow}>
          {row1.map((service) => (
            <Link key={service.href} href={service.href} className={styles.serviceCard}>
              <div className={styles.serviceImageWrap}>
                <Image
                  className={styles.serviceImage}
                  src={service.image}
                  alt={service.name}
                  fill
                />
              </div>
              <div className={styles.serviceBody}>
                <div>
                  <p className={styles.serviceTitle}>{service.name}</p>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <span className={styles.serviceLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.servicesRow}>
          {row2.map((service) => (
            <Link key={service.href} href={service.href} className={styles.serviceCard}>
              <div className={styles.serviceImageWrap}>
                <Image
                  className={styles.serviceImage}
                  src={service.image}
                  alt={service.name}
                  fill
                />
              </div>
              <div className={styles.serviceBody}>
                <div>
                  <p className={styles.serviceTitle}>{service.name}</p>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <span className={styles.serviceLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.servicesRow}>
          {row3.map((service) => (
            <Link key={service.href} href={service.href} className={styles.serviceCard}>
              <div className={styles.serviceImageWrap}>
                <Image
                  className={styles.serviceImage}
                  src={service.image}
                  alt={service.name}
                  fill
                />
              </div>
              <div className={styles.serviceBody}>
                <div>
                  <p className={styles.serviceTitle}>{service.name}</p>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <span className={styles.serviceLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
