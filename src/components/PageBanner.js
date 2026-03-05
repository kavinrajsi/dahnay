import Image from "next/image";
import styles from "./PageBanner.module.css";

export default function PageBanner({ title, image }) {
  return (
    <section className={styles.banner}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        fill
        priority
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
