import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.container}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
