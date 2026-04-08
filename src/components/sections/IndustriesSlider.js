"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { industries } from "@/data/industries";

export default function IndustriesSlider({ currentSlug }) {
  const filtered = industries.filter((i) => !i.href.endsWith(`/${currentSlug}`));
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNav = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
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
            See More
          </Link>
        </div>

        <Swiper
          modules={[Pagination, Keyboard, Mousewheel]}
          onSwiper={(swiper) => { swiperRef.current = swiper; updateNav(swiper); }}
          onSlideChange={updateNav}
          spaceBetween={20}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          pagination={{
            clickable: true,
            el: ".industries-slider__dots",
            bulletClass: "industries-slider__dot",
            bulletActiveClass: "industries-slider__dot--active",
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {filtered.map((item) => (
            <SwiperSlide key={item.href}>
              <Link href={item.href} className="industries-slider__card">
                <div className="industries-slider__card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={265}
                    height={180}
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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="industries-slider__controls">
          <div className="industries-slider__dots" />
          <div className="industries-slider__arrows">
            <button
              className="industries-slider__arrow"
              style={{ opacity: isBeginning ? 0.5 : 1 }}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z" fill="white"/>
                <path d="M30.9001 19.1149V21.3148L12.6725 21.3148L17.8579 26.5003L16.2866 28.0716L8.42981 20.2149L16.2866 12.3581L17.8579 13.9295L12.6725 19.1149L30.9001 19.1149Z" fill="#EE412F"/>
              </svg>
            </button>
            <button
              className="industries-slider__arrow"
              style={{ opacity: isEnd ? 0.5 : 1 }}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z" fill="white"/>
                <path d="M9.09991 20.8851V18.6852H27.3275L22.1421 13.4997L23.7134 11.9284L31.5702 19.7851L23.7134 27.6419L22.1421 26.0705L27.3275 20.8851L9.09991 20.8851Z" fill="#EE412F"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
