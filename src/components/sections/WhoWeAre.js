"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import styles from "./WhoWeAre.module.scss";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5000+", label: "Clients" },
  { value: "19+", label: "Countries" },
  { value: "45+", label: "Offices Worldwide" },
];

function parseValue(value) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: value };
}

function AnimatedStat({ value, label }) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const duration = 1600;
        const start = performance.now();

        function step(now) {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(eased * num));
          if (t < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div className={styles.whoWeAre__stat} ref={ref}>
      <span className={styles.whoWeAre__statValue}>
        {count}{suffix}
      </span>
      <span className={styles.whoWeAre__statLabel}>{label}</span>
    </div>
  );
}

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
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
