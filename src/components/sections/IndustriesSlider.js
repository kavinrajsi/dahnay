"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  { slug: "automotive", title: "Automotive", description: "Driving global supply chains with reliable, time-sensitive automotive logistics.", image: "/images/industries/cards/automotive.png" },
  { slug: "white-goods", title: "White Goods", description: "Ensuring fresh and secure transport of white goods with efficiency and care.", image: "/images/industries/cards/white-goods.png" },
  { slug: "machinery", title: "Heavy Machinery", description: "Providing specialised logistics for heavy and oversized machinery shipments.", image: "/images/industries/cards/machinery.png" },
  { slug: "retail-apparel", title: "Retail & Apparel", description: "Fast-fashion logistics with speed, precision and global reach.", image: "/images/industries/cards/retail-apparel.png" },
  { slug: "renewables", title: "Renewables", description: "Powering the future with efficient logistics for the renewable energy sector.", image: "/images/industries/cards/renewables.png" },
  { slug: "natural-rubber", title: "Natural Rubber", description: "From plantation to production — reliable rubber supply chain solutions.", image: "/images/industries/cards/natural-rubber.png" },
  { slug: "energy-oil-gas", title: "Energy, Oil & Gas", description: "Complex logistics solutions for the energy and oil & gas industry.", image: "/images/industries/cards/energy-oil-gas.png" },
  { slug: "fmcg", title: "FMCG", description: "High-velocity logistics keeping FMCG products moving from factory to shelf.", image: "/images/industries/cards/fmcg.png" },
  { slug: "construction-materials", title: "Construction Materials", description: "Bulk and project logistics for construction materials and infrastructure.", image: "/images/industries/cards/construction-materials.png" },
  { slug: "paper-pulp", title: "Paper & Pulp", description: "Volume-efficient logistics for paper and pulp supply chains.", image: "/images/industries/cards/paper-pulp.png" },
];

export default function IndustriesSlider({ currentSlug }) {
  const filtered = industries.filter((i) => i.slug !== currentSlug);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 992) setVisibleCount(4);
      else if (w >= 768) setVisibleCount(3);
      else if (w >= 576) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, filtered.length - visibleCount);
  const totalDots = maxIndex + 1;

  const scrollTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const card = trackRef.current.children[0];
      if (card) {
        const gap = 20;
        const cardWidth = card.offsetWidth + gap;
        trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="industries-slider">
      <div className="container">
        <div className="industries-slider__header">
          <div className="industries-slider__header-left">
            <span className="industries-slider__tag">Industries We Offer</span>
            <h2 className="industries-slider__title">Logistics for every sector</h2>
            <p className="industries-slider__desc">
              If it moves, we ship it. From Pharma to renewables and automotive, get your goods delivered to your doorstep, well and safe.
            </p>
          </div>
          <Link href="/contact" className="industries-slider__btn">
            Talk to an expert
          </Link>
        </div>

        <div className="industries-slider__track-wrapper">
          <div className="industries-slider__track" ref={trackRef}>
            {filtered.map((item) => (
              <Link key={item.slug} href={`/industries/${item.slug}`} className="industries-slider__card">
                <div className="industries-slider__card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="industries-slider__card-img"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                  />
                </div>
                <div className="industries-slider__card-body">
                  <div className="industries-slider__card-info">
                    <h3 className="industries-slider__card-title">{item.title}</h3>
                    <p className="industries-slider__card-desc">{item.description}</p>
                  </div>
                  <span className="industries-slider__card-link">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="industries-slider__controls">
          <div className="industries-slider__dots">
            {Array.from({ length: totalDots }, (_, i) => (
              <button
                key={i}
                className={`industries-slider__dot${currentIndex === i ? " industries-slider__dot--active" : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="industries-slider__arrows">
            <button
              className="industries-slider__arrow"
              disabled={currentIndex === 0}
              onClick={() => scrollTo(currentIndex - 1)}
              aria-label="Previous"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" stroke="currentColor"/>
                <path d="M23 14l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="industries-slider__arrow"
              disabled={currentIndex === maxIndex}
              onClick={() => scrollTo(currentIndex + 1)}
              aria-label="Next"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" stroke="currentColor"/>
                <path d="M17 14l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
