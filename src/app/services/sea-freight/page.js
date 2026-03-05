import Image from "next/image";
import Link from "next/link";
import styles from "./sea-freight.module.css";

export const metadata = {
  title: "Sea Freight",
  description:
    "DahNay Logistics sea freight services: FCL, LCL, project logistics, special containers and RoRo shipping with global carrier partnerships.",
  openGraph: {
    title: "Sea Freight Services | DahNay Logistics",
    description:
      "DahNay Logistics sea freight services: FCL, LCL, project logistics, special containers and RoRo shipping.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/services/sea-freight" },
};

const expertiseCards = [
  {
    title: "Full Container load (FCL)",
    desc: "Lorem ipsum dolor sit amet consectetur. Morbi facilisis sed diam morbi. Justo amet dui elit pharetra eu pharetra quis. Ac leo proin integer aliquam vestibulum.",
    image: "/images/sea-freight-fcl.jpg",
  },
  {
    title: "Less-than Container Load (LCL)",
    desc: "Lorem ipsum dolor sit amet consectetur. Morbi facilisis sed diam morbi. Justo amet dui elit pharetra eu pharetra quis. Ac leo proin integer aliquam vestibulum.",
    image: "/images/sea-freight-lcl.jpg",
  },
  {
    title: "Project Logistics",
    desc: "Lorem ipsum dolor sit amet consectetur. Morbi facilisis sed diam morbi. Justo amet dui elit pharetra eu pharetra quis. Ac leo proin integer aliquam vestibulum.",
    image: "/images/sea-freight-project.jpg",
  },
  {
    title: "Special Containers",
    desc: "Lorem ipsum dolor sit amet consectetur. Morbi facilisis sed diam morbi. Justo amet dui elit pharetra eu pharetra quis. Ac leo proin integer aliquam vestibulum.",
    image: "/images/sea-freight-special.jpg",
  },
  {
    title: "RoRo Finished Vehicles",
    desc: "Lorem ipsum dolor sit amet consectetur. Morbi facilisis sed diam morbi. Justo amet dui elit pharetra eu pharetra quis. Ac leo proin integer aliquam vestibulum.",
    image: "/images/sea-freight-roro.jpg",
  },
];

const whyChooseCards = [
  {
    icon: "/images/icon-why-network.svg",
    title: "Global Network Reach",
    desc: "Partnerships with leading airlines and agents across major destinations.",
  },
  {
    icon: "/images/icon-why-speed.svg",
    title: "Speed & Reliability",
    desc: "Optimized routes and real-time tracking for faster delivery.",
  },
  {
    icon: "/images/icon-why-custom.svg",
    title: "Custom Solutions",
    desc: "Tailored freight options based on your cargo type and priority.",
  },
  {
    icon: "/images/icon-why-expert.svg",
    title: "Expert Handling",
    desc: "Experienced team ensuring compliance with all international regulations.",
  },
];

const industryCards = [
  {
    title: "Automotive",
    desc: "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industry-automotive.jpg",
  },
  {
    title: "Whitegoods",
    desc: "Ensuring fresh and secure transport of food and agricultural products with efficiency.",
    image: "/images/industry-whitegoods.jpg",
  },
  {
    title: "Heavy Machinery",
    desc: "Providing temperature-controlled logistics to safeguard the integrity of pharmaceutical shipments",
    image: "/images/industry-machinery.jpg",
  },
  {
    title: "Textile",
    desc: "Powering the future with efficient logistics for the renewable energy sector.",
    image: "/images/industry-textile.jpg",
  },
];

export default function SeaFreight() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sea Freight Services",
    url: "https://www.dahnay.com/services/sea-freight",
    description: metadata.description,
    provider: {
      "@type": "Organization",
      name: "DahNay Logistics",
      url: "https://www.dahnay.com",
    },
    serviceType: "Sea Freight Forwarding",
    areaServed: "Worldwide",
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
          src="/images/sea-freight-hero.jpg"
          alt="Sea Freight"
          fill
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Sea Freight</h1>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewImageWrap}>
          <Image
            className={styles.overviewImage}
            src="/images/sea-freight-overview.jpg"
            alt="Sea freight overview"
            fill
          />
        </div>
        <div className={styles.overviewContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Overview</span>
          </div>
          <h2 className={styles.sectionHeading}>Your Cargo. Our Commitment.</h2>
          <p className={styles.sectionDesc}>
            DahNAY&apos;s sea freight service leverages strategic partnerships with top
            carriers to ensure space availability, flexible routing and cost-effective
            shipping for everything from single containers to complex shipment.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get started
          </Link>
        </div>
      </section>

      {/* Expertise */}
      <section className={styles.expertise}>
        <div className={styles.expertiseHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Expertise</span>
          </div>
          <h2 className={styles.sectionHeading}>Your Cargo, Handled by Experts.</h2>
          <p className={styles.sectionDesc}>
            From planning to delivery, our logistics experts manage every detail with
            precision. Your cargo moves safely, efficiently, and on time—every time.
          </p>
        </div>
        <div className={styles.expertiseScroll}>
          {expertiseCards.map((card) => (
            <div key={card.title} className={styles.expertiseCard}>
              <div className={styles.expertiseImageWrap}>
                <Image
                  className={styles.expertiseImage}
                  src={card.image}
                  alt={card.title}
                  fill
                />
              </div>
              <p className={styles.expertiseCardTitle}>{card.title}</p>
              <p className={styles.expertiseCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className={styles.whyChoose}>
        <div className={styles.whyChooseHeader}>
          <h2 className={styles.whyChooseHeading}>
            Why Choose Dahnay Sea Freight
          </h2>
          <p className={styles.whyChooseDesc}>
            Ensure every shipment is precise, on time and fully optimised with DahNAY.
          </p>
        </div>
        <div className={styles.whyChooseCards}>
          {whyChooseCards.map((card) => (
            <div key={card.title} className={styles.whyChooseCard}>
              <Image
                className={styles.whyChooseIcon}
                src={card.icon}
                alt=""
                width={64}
                height={64}
              />
              <p className={styles.whyChooseCardTitle}>{card.title}</p>
              <p className={styles.whyChooseCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.certifications}>
        <div className={styles.certContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Certifications</span>
          </div>
          <h2 className={styles.sectionHeading}>
            Prepared to handle your freight with precision
          </h2>
          <p className={styles.sectionDesc}>
            Our ocean freight services are backed by a comprehensive set of global
            certifications that ensure safety, transparency, and compliance at every stage.
          </p>
          <p className={styles.sectionDesc}>
            We meet internationally recognised standards including ISO 9001 and ISO 14001,
            and adhere to HAZMAT and IMDG regulations for hazardous materials. We also
            support trade integrity through AEO certification, ISPM 15 compliance for wood
            packaging, and rigorous training and protocols in trade compliance and forklift
            operations.
          </p>
        </div>
        <div className={styles.certImageWrap}>
          <Image
            className={styles.certImage}
            src="/images/sea-freight-cert.jpg"
            alt="Certifications"
            fill
          />
        </div>
      </section>

      {/* Industries */}
      <section className={styles.industries}>
        <div className={styles.industriesHeaderRow}>
          <div className={styles.industriesHeader}>
            <div className={styles.industriesBadge}>
              <span className={styles.badgeText}>Industries we offer</span>
            </div>
            <h2 className={styles.industriesHeading}>
              Logistics for every sector
            </h2>
            <p className={styles.industriesDesc}>
              If it moves, we ship it. From Pharma to renewables and automotive, get your
              goods delivered to your doorstep, well and safe.
            </p>
          </div>
          <Link href="/contact" className={styles.industriesTalkBtn}>
            Talk to an expert
          </Link>
        </div>
        <div className={styles.industriesScroll}>
          {industryCards.map((card) => (
            <div key={card.title} className={styles.industryCard}>
              <div className={styles.industryImageWrap}>
                <Image
                  className={styles.industryImage}
                  src={card.image}
                  alt={card.title}
                  fill
                />
              </div>
              <div className={styles.industryBody}>
                <div>
                  <p className={styles.industryTitle}>{card.title}</p>
                  <p className={styles.industryDesc}>{card.desc}</p>
                </div>
                <span className={styles.industryLink}>Learn more</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
