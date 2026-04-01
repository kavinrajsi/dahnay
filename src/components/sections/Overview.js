import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import styles from "./Overview.module.scss";

export default function Overview({
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
    <section className={styles.overview}>
      <div className={`container ${styles.overview__grid}`}>
        <div className={styles.overview__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={550}
            height={400}
            sizes="(min-width: 992px) 550px, 100vw"
            className={styles.overview__image}
          />
        </div>
        <div className={styles.overview__content}>
          <SectionHeader tag={tag} title={title} titleAccent={titleAccent} />
          {descriptions.length > 0 && (
            <div className={styles.overview__descriptions}>
              {descriptions.map((text, index) => (
                <p key={index} className={styles.overview__text}>
                  {text}
                </p>
              ))}
            </div>
          )}
          {ctaText && ctaHref && (
            <Link href={ctaHref} className={`button ${styles.overview__cta}`}>
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
