"use client";

import { useEffect, useRef, useState } from "react";

function PrevArrow({ onClick, disabled }) {
  return (
    <button
      type="button"
      className="slider__arrow slider__arrow--prev"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous slide"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6F6F6" />
        <path d="M30.9001 19.1149V21.3148L12.6725 21.3148L17.8579 26.5003L16.2866 28.0716L8.42981 20.2149L16.2866 12.3581L17.8579 13.9295L12.6725 19.1149L30.9001 19.1149Z" fill="#EE412F" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick, disabled }) {
  return (
    <button
      type="button"
      className="slider__arrow slider__arrow--next"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next slide"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z" fill="#F6F6F6" />
        <path d="M9.09991 20.8851V18.6852H27.3275L22.1421 13.4997L23.7134 11.9284L31.5702 19.7851L23.7134 27.6419L22.1421 26.0705L27.3275 20.8851L9.09991 20.8851Z" fill="#EE412F" />
      </svg>
    </button>
  );
}

// Picks a per-breakpoint slidesPerView from a Swiper-style breakpoints object,
// using the largest breakpoint <= 768px as "tablet" and largest <= 1024px as
// "desktop". Falls back to the base slidesPerView if a breakpoint is missing.
function pickPerView(breakpoints, base) {
  if (!breakpoints) return { md: base, lg: base };
  const entries = Object.entries(breakpoints)
    .map(([k, v]) => [Number(k), v?.slidesPerView ?? base])
    .sort((a, b) => a[0] - b[0]);
  let md = base;
  let lg = base;
  for (const [bp, n] of entries) {
    if (bp <= 768) md = n;
    if (bp <= 1024) lg = n;
  }
  return { md, lg };
}

export default function Slider({
  children,
  className = "",
  slidesPerView = 3,
  spaceBetween = 20,
  breakpoints,
}) {
  const trackRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const slides = Array.isArray(children) ? children : [children];
  const { md, lg } = pickPerView(breakpoints, slidesPerView);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setIsStart(track.scrollLeft <= 1);
      setIsEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [slides.length]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const cardWidth = card?.getBoundingClientRect().width ?? track.clientWidth;
    track.scrollBy({ left: direction * (cardWidth + spaceBetween), behavior: "smooth" });
  };

  return (
    <div
      className={`slider ${className}`.trim()}
      style={{
        "--slider-base": slidesPerView,
        "--slider-md": md,
        "--slider-lg": lg,
        "--slider-gap": `${spaceBetween}px`,
      }}
    >
      <div className="slider__track-wrapper">
        <div className="slider__track" ref={trackRef}>
          {slides.map((child, i) => (
            <div key={i} className="slider__slide">{child}</div>
          ))}
        </div>
      </div>
      <div className="slider__control">
        <div className="slider__arrows">
          <PrevArrow onClick={() => scrollByCard(-1)} disabled={isStart} />
          <NextArrow onClick={() => scrollByCard(1)} disabled={isEnd} />
        </div>
      </div>
    </div>
  );
}
