import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import styles from "./Certifications.module.scss";

export default function Certifications({
  tag,
  title,
  titleAccent,
  descriptions = [],
  image,
  imageAlt = "",
  ctaText,
  ctaHref,
}) {
  return (
    <section className={styles.certifications}>
      <div className={`container ${styles.certifications__grid}`}>
        <div className={styles.certifications__content}>
          <SectionHeader tag={tag} title={title} titleAccent={titleAccent} />
          {descriptions.length > 0 && (
            <div className={styles.certifications__descriptions}>
              {descriptions.map((text, index) => (
                <p key={index} className={styles.certifications__text}>
                  {text}
                </p>
              ))}
            </div>
          )}
          {ctaText && ctaHref && (
            <Link href={ctaHref} className={`button ${styles.certifications__cta}`}>
              {ctaText}
            </Link>
          )}
        </div>
        <div className={styles.certifications__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            className={styles.certifications__image}
          />
        </div>
      </div>
    </section>
  );
}
