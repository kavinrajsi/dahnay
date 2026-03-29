import Image from "next/image";
import styles from "./ContentBlock.module.scss";

export default function ContentBlock({
  title,
  description,
  image,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className={`container ${styles.contentBlock}`}>
      <div className={` ${styles.contentBlock__grid} ${reverse ? styles["contentBlock__grid--reverse"] : ""}`}>
        <div className={styles.contentBlock__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={645}
            height={400}
            className={styles.contentBlock__image}
          />
        </div>
         <div className={styles.contentBlock__text}>
          <h2 className={styles.contentBlock__title}>{title}</h2>
          <p className={styles.contentBlock__description}>{description}</p>
        </div>
      </div>
    </section>
  );
}
