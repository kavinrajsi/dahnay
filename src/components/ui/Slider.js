"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

export default function Slider({
  children,
  className = "",
  slidesPerView = 3,
  spaceBetween = 20,
  breakpoints,
  loop = false,
  speed = 500,
  ...rest
}) {
  const swiperRef = useRef(null);

  return (
    <div className={`slider ${className}`}>
      <Swiper
        modules={[Pagination, Keyboard, Mousewheel]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        loop={loop}
        speed={speed}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        pagination={{
          clickable: true,
          el: `.slider__dots`,
          bulletClass: "slider__dot",
          bulletActiveClass: "slider__dot--active",
        }}
        {...rest}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <SwiperSlide key={i}>{child}</SwiperSlide>
            ))
          : <SwiperSlide>{children}</SwiperSlide>
        }
      </Swiper>
      <div className="slider__control">
        <div className="slider__dots" />
        <div className="slider__arrows">
          <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
          <NextArrow onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
    </div>
  );
}
