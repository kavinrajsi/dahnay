import Image from "next/image";
import Link from "next/link";
import styles from "./industries.module.css";

export const metadata = {
  title: "Industries",
  description:
    "DahNay Logistics serves automotive, pharma, energy, fashion, FMCG, retail, chemicals, perishables, whitegoods and paper industries with tailored logistics solutions.",
  openGraph: {
    title: "Industries We Serve | DahNay Logistics",
    description:
      "DahNay Logistics serves automotive, pharma, energy, fashion, FMCG, retail, chemicals, perishables, whitegoods and paper industries.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.dahnay.com/industries" },
};

const industries = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    desc: "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industry-automotive.jpg",
  },
  {
    title: "Pharma & Healthcare",
    href: "/industries/pharma-healthcare",
    desc: "Ensuring fresh and secure transport of food and agricultural products with efficiency.",
    image: "/images/industry-pharma.jpg",
  },
  {
    title: "Energy, Oil & Gas",
    href: "/industries/energy-oil-gas",
    desc: "Providing temperature-controlled logistics to safeguard the integrity of pharmaceutical shipments",
    image: "/images/industry-energy.jpg",
  },
  {
    title: "Fashion & Lifestyle",
    href: "/industries/fashion-lifestyle",
    desc: "Powering the future with efficient logistics for the renewable energy sector.",
    image: "/images/industry-fashion.jpg",
  },
  {
    title: "Whitegoods",
    href: "/industries/whitegoods",
    desc: "Ensuring fresh and secure transport of food and agricultural products with efficiency.",
    image: "/images/industry-whitegoods.jpg",
  },
  {
    title: "Perishables",
    href: "/industries/perishables",
    desc: "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industry-perishables.jpg",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    desc: "Providing temperature-controlled logistics to safeguard the integrity of pharmaceutical shipments",
    image: "/images/industry-retail.jpg",
  },
  {
    title: "FMCG",
    href: "/industries/fmcg",
    desc: "Powering the future with efficient logistics for the renewable energy sector.",
    image: "/images/industry-fmcg.jpg",
  },
  {
    title: "Paper & Pulp",
    href: "/industries/paper-pulp",
    desc: "Ensuring fresh and secure transport of food and agricultural products with efficiency.",
    image: "/images/industry-paper.jpg",
  },
  {
    title: "Chemicals",
    href: "/industries/chemicals",
    desc: "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industry-chemicals.jpg",
  },
];

export default function Industries() {
  const row1 = industries.slice(0, 4);
  const row2 = industries.slice(4, 8);
  const row3 = industries.slice(8);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industries We Serve - DahNay Logistics",
    url: "https://www.dahnay.com/industries",
    description: metadata.description,
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
          src="/images/industries-hero.jpg"
          alt="Industries"
          fill
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Industries</h1>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Industries we offer</span>
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

      {/* Industries Grid */}
      <div className={styles.industriesGrid}>
        <div className={styles.industriesRow}>
          {row1.map((industry) => (
            <Link key={industry.title} href={industry.href} className={styles.industryCard}>
              <div className={styles.industryImageWrap}>
                <Image
                  className={styles.industryImage}
                  src={industry.image}
                  alt={industry.title}
                  fill
                />
              </div>
              <div className={styles.industryBody}>
                <div>
                  <p className={styles.industryTitle}>{industry.title}</p>
                  <p className={styles.industryDesc}>{industry.desc}</p>
                </div>
                <span className={styles.industryLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.industriesRow}>
          {row2.map((industry) => (
            <Link key={industry.title} href={industry.href} className={styles.industryCard}>
              <div className={styles.industryImageWrap}>
                <Image
                  className={styles.industryImage}
                  src={industry.image}
                  alt={industry.title}
                  fill
                />
              </div>
              <div className={styles.industryBody}>
                <div>
                  <p className={styles.industryTitle}>{industry.title}</p>
                  <p className={styles.industryDesc}>{industry.desc}</p>
                </div>
                <span className={styles.industryLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.industriesRow}>
          {row3.map((industry) => (
            <Link key={industry.title} href={industry.href} className={styles.industryCard}>
              <div className={styles.industryImageWrap}>
                <Image
                  className={styles.industryImage}
                  src={industry.image}
                  alt={industry.title}
                  fill
                />
              </div>
              <div className={styles.industryBody}>
                <div>
                  <p className={styles.industryTitle}>{industry.title}</p>
                  <p className={styles.industryDesc}>{industry.desc}</p>
                </div>
                <span className={styles.industryLink}>Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
