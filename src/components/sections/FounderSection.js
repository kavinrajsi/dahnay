import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import styles from "./FounderSection.module.scss";

export default function FounderSection({
  tag = "CEO & Founder",
  name,
  description,
  image,
  imageAlt = "",
  linkedinHref,
}) {
  return (
    <section className={styles.founder}>
      <div className={`container ${styles.founder__grid}`}>
        <div className={styles.founder__content}>
          <SectionHeader tag={tag} title={name} />
          <p className={styles.founder__description}>{description}</p>
          {linkedinHref && (
            <div className={styles.founder__social}>
              <Link
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.founder__socialLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_354_6807)">
                    <path
                      d="M2.40383 0.0170898C1.07544 0.0170898 0.000214915 1.09424 0 2.41963C0 3.7463 1.07522 4.82324 2.40404 4.82324C3.72921 4.82324 4.80593 3.7463 4.80593 2.41963C4.80593 1.09403 3.72899 0.0170898 2.40383 0.0170898Z"
                      fill="#0B090A"
                    />
                    <path
                      d="M4.47319 6.64648H0.328125V19.9828H4.47319V6.64648Z"
                      fill="#0B090A"
                    />
                    <path
                      d="M15.0272 6.3147C13.0108 6.3147 11.6588 7.42022 11.1054 8.46858H11.0499V6.64631H7.07443H7.07422V19.9824H11.2156V13.385C11.2156 11.6457 11.5468 9.96095 13.7033 9.96095C15.8288 9.96095 15.8572 11.9502 15.8572 13.4965V19.9822H19.9992V12.6674C19.9992 9.07679 19.2244 6.3147 15.0272 6.3147Z"
                      fill="#0B090A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_354_6807">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.founder__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={550}
            height={400}
            sizes="(min-width: 992px) 550px, 100vw"
            className={styles.founder__image}
          />
        </div>
      </div>
    </section>
  );
}
