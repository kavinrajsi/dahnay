import Image from "next/image";
import SectionHeader from "./SectionHeader";
import styles from "./WhoWeAre.module.scss";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5000+", label: "Clients" },
  { value: "19+", label: "Countries" },
  { value: "45+", label: "Offices Worldwide" },
];

export default function WhoWeAre({ description, image, imageAlt = "" }) {
  return (
    <section className={styles.whoWeAre}>
      <div className={`container ${styles.whoWeAre__grid}`}>
        <div className={styles.whoWeAre__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={550}
            height={400}
            className={styles.whoWeAre__image}
          />
        </div>
        <div className={styles.whoWeAre__content}>
          <div className={styles.whoWeAre__header}>
            <SectionHeader tag="Who we are" />
            <p className={styles.whoWeAre__description}>{description}</p>
          </div>
          <div className={styles.whoWeAre__stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.whoWeAre__stat}>
                <span className={styles.whoWeAre__statValue}>{stat.value}</span>
                <span className={styles.whoWeAre__statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
