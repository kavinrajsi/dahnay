"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    desktopImage: "/images/slider-warehouse.jpg",
    mobileImage: "/images/slider-warehouse.jpg",
    badge: "Services and industries",
    heading: "Your complete logistics partner for growth",
    description:
      "From freight and warehousing to customs clearance - everything you need to move, in one place: DahNAY",
  },
  {
    desktopImage: "/images/slider-warehouse-hq.jpg",
    mobileImage: "/images/slider-warehouse-hq.jpg",
    badge: "Global network",
    heading: "Connecting businesses across borders",
    description:
      "Industry-specific efficiency with our powerful, unified freight tools and real-time visibility",
  },
];

export default function HeroSlider() {
  return (
    <div className={styles.slider}>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          speed: 800,
          pauseOnHover: false,
          pagination: true,
          arrows: false,
          rewind: true,
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className={styles.slide}>
              <Image
                className={`${styles.slideImage} ${styles.desktopImage}`}
                src={slide.desktopImage}
                alt={slide.heading}
                fill
                priority={index === 0}
              />
              <Image
                className={`${styles.slideImage} ${styles.mobileImage}`}
                src={slide.mobileImage}
                alt={slide.heading}
                fill
                priority={index === 0}
              />
              <div className={styles.gradient} />
              <div className={styles.content}>
                <div className={styles.textGroup}>
                  <div className={styles.badge}>
                    <span className={styles.badgeText}>{slide.badge}</span>
                  </div>
                  <div className={styles.headingGroup}>
                    <h2 className={styles.heading}>{slide.heading}</h2>
                    <p className={styles.description}>{slide.description}</p>
                  </div>
                </div>
                <Image
                  className={styles.scrollIndicator}
                  src="/images/slider-scroll-indicator.svg"
                  alt="Scroll down"
                  width={72}
                  height={120}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
