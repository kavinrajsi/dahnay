"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Slick = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow({ onClick }) {
  return (
    <button className="slider__arrow slider__arrow--prev" onClick={onClick} aria-label="Previous slide">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6F6F6" />
        <path d="M30.9001 19.1149V21.3148L12.6725 21.3148L17.8579 26.5003L16.2866 28.0716L8.42981 20.2149L16.2866 12.3581L17.8579 13.9295L12.6725 19.1149L30.9001 19.1149Z" fill="#EE412F" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button className="slider__arrow slider__arrow--next" onClick={onClick} aria-label="Next slide">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z" fill="#F6F6F6" />
        <path d="M9.09991 20.8851V18.6852H27.3275L22.1421 13.4997L23.7134 11.9284L31.5702 19.7851L23.7134 27.6419L22.1421 26.0705L27.3275 20.8851L9.09991 20.8851Z" fill="#EE412F" />
      </svg>
    </button>
  );
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export function SliderSlide({ desktopImage, mobileImage, alt, href, children }) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href, className: "slider__link" } : { className: "slider__slide" };

  return (
    <Wrapper {...wrapperProps}>
      <picture className="slider__picture">
        {desktopImage && (
          <source
            media="(min-width: 768px)"
            srcSet={`${desktopImage} 1x`}
            width={1440}
            height={580}
          />
        )}
        <img
          className="slider__image"
          src={mobileImage || desktopImage}
          alt={alt}
          width={768}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {children && <div className="slider__content">{children}</div>}
    </Wrapper>
  );
}

export default function Slider({ children, className = "", settings = {}, ...props }) {
  const slickRef = useRef(null);

  const mergedSettings = {
    ...defaultSettings,
    ...settings,
    appendDots: (dots) => (
      <div className="slider__control">
        <ul className="slider__dots">{dots}</ul>
        <div className="slider__arrows">
          <PrevArrow onClick={() => slickRef.current?.slickPrev()} />
          <NextArrow onClick={() => slickRef.current?.slickNext()} />
        </div>
      </div>
    ),
  };

  return (
    <div className={`slider ${className}`}>
      <Slick ref={slickRef} {...mergedSettings} {...props}>
        {children}
      </Slick>
    </div>
  );
}
