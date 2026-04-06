"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/home/hero-1.png",
    tag: "Services and Industries",
    title: "Your complete global logistics partner for growth",
    description: "From freight and warehousing to customs clearance - everything you need to move, in one place: DahNAY",
  },
    {
    image: "/images/home/hero-1.png",
    tag: "Services and Industries",
    title: "Your complete global logistics partner for growth",
    description: "From freight and warehousing to customs clearance - everything you need to move, in one place: DahNAY",
  },
    {
    image: "/images/home/hero-1.png",
    tag: "Services and Industries",
    title: "Your complete global logistics partner for growth",
    description: "From freight and warehousing to customs clearance - everything you need to move, in one place: DahNAY",
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
            <span className="home-hero__tag">{slide.tag}</span>
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
