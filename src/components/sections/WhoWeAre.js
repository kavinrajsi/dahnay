"use client";

import { useEffect, useRef } from "react";
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
  const statsRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const valueEls = statsRef.current?.querySelectorAll(`.${styles.whoWeAre__statValue}`);
      if (!valueEls?.length) return;

      ctx = gsap.context(() => {
        valueEls.forEach((el) => {
          const raw = el.dataset.value;
          const num = parseInt(raw, 10);
          const suffix = raw.replace(/[0-9]/g, "");
          const obj = { val: 0 };

          gsap.to(obj, {
            val: num,
            duration: 2,
            ease: "power1.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 98%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = obj.val + suffix;
            },
          });
        });
      }, statsRef);
    };

    init();
    return () => ctx?.revert();
  }, []);
  return (
    <section className={styles.whoWeAre}>
      <div className={`container ${styles.whoWeAre__grid}`}>
        <div className={styles.whoWeAre__imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={550}
            height={400}
            sizes="(min-width: 992px) 550px, 100vw"
            className={styles.whoWeAre__image}
          />
        </div>
        <div className={styles.whoWeAre__content}>
          <div className={styles.whoWeAre__header}>
            <SectionHeader tag="Who we are" />
            <p className={styles.whoWeAre__description}>{description}</p>
          </div>
          <div className={styles.whoWeAre__stats} ref={statsRef}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.whoWeAre__stat}>
                <span className={styles.whoWeAre__statValue} data-value={stat.value}>
                  0{stat.value.replace(/[0-9]/g, "")}
                </span>
                <span className={styles.whoWeAre__statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
