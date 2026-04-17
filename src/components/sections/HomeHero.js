"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
    {
    image: "/images/home/slider/intro-banner.jpg",
    title: " ",
    description: " ",
  },
  {
    image: "/images/home/slider/wharehouse.png",
    title: "Warehousing solutions at key trade hubs",
    description: "With our own warehouses in India, USA and UAE, we keep your cargo moving without delays.",
  },
    {
    image: "/images/home/slider/greener-moves.png",
    title: "Greener moves at DahNAY Tuticorin CFS",
    description: "EV Reach Stacker in action, driving efficiency and low-emission operations.",
  },
    {
    image: "/images/home/slider/end-to-end.png",
    title: "End-to-end project logistics with precision",
    description: "Handling oversized, complex cargo with precision , care and reliability.",
  },
    {
    image: "/images/home/slider/complete-logistics.png",
    title: "Your complete logistics partner for growth",
    description: "From air to sea and land, everything you need to move, in one place: DahNAY",
  },
    {
    image: "/images/home/slider/dahnay-dubai.png",
    title: "DahNAY opens a new warehouse in Dubai",
    description: "Strengthening the supply chain, DahNAY opened a new warehouse in Jebel Ali, Dubai - the hub of all trade.",
  },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="home-hero">
      <div className="home-hero__slide">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="container home-hero__content">
          <div className="home-hero__text">
            <h1 className="home-hero__title">{slide.title}</h1>
            <p className="home-hero__desc">{slide.description}</p>
          </div>
          {slides.length > 1 && (
            <div className="home-hero__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`home-hero__dot${current === i ? " home-hero__dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
