"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/home/slider/d20-slider-bg.png",
    title: "2026: The Year of Growth in Action",
    description:
      "Entering 20th year with the same commitment to growth.<br />- for our people, partners and the planet.",
  },
  {
    image: "/images/home/slider/wharehouse.png",
    title: "Warehousing solutions at key trade hubs",
    description:
      "With our own warehouses in India, USA and UAE, we keep your cargo moving without delays.",
  },
  {
    image: "/images/home/slider/greener-moves.png",
    title: "Greener moves at DahNAY Tuticorin CFS",
    description:
      "EV Reach Stacker in action, driving efficiency and low-emission operations.",
  },
  {
    image: "/images/home/slider/end-to-end.png",
    title: "End-to-end project logistics with precision",
    description:
      "Handling oversized, complex cargo with precision , care and reliability.",
  },
  {
    image: "/images/home/slider/complete-logistics.png",
    title: "Your complete logistics partner for growth",
    description:
      "From air to sea and land, everything you need to move, in one place: DahNAY",
  },
  {
    image: "/images/home/slider/dahnay-dubai.png",
    title: "DahNAY opens a new warehouse in Dubai",
    description:
      "Strengthening the supply chain, DahNAY opened a new warehouse in Jebel Ali, Dubai - the hub of all trade.",
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
          className={`home-hero__image home-hero__image--slide-${current + 1}`}
          sizes="100vw"
        />
        <>
          <div className="home-hero__overlay" />
          <div
            className={`container home-hero__content home-hero__content--slide-${current + 1}`}
          >
            <div className="home-hero__text">
              {current === 0 && (
                <svg
                  width="881"
                  className="home-hero__logo"
                  height="359"
                  viewBox="0 0 881 359"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M326.612 75.4558C318.49 75.4558 300.11 75.5803 300.11 75.5803C300.11 75.5803 300.334 90.6821 300.092 103.68C311.633 191.004 278.38 244.626 213.99 273.821C131.213 311.432 45.9303 271.287 15.5997 205.135C15.3887 204.089 13.9739 201.761 13.7257 201.586C12.2861 200.024 10.2322 199.015 7.94255 199.015C3.54312 199.015 0 202.582 0 206.965C0 208.253 0.335077 209.43 0.874922 210.532C58.055 360.877 204.601 348.446 269.991 302.904C334.127 258.265 375.341 164.971 326.612 75.4558Z"
                    fill="white"
                  />
                  <path
                    d="M108.459 18.1049C108.67 18.1049 108.888 18.0551 109.099 18.024C109.403 17.9431 109.694 17.8808 109.986 17.8435C131.716 13.3615 151.02 13.4113 163.102 15.5651C206.42 23.1907 231.339 34.626 265.008 67.4316C265.045 67.5001 291.951 67.4316 291.951 67.4316V50.2818C268.005 22.369 219.128 -4.01867 169.989 -3.99999C148.731 -3.99999 128.21 -0.987102 107.206 7.37304C106.691 7.50999 106.219 7.69674 105.766 7.93329C104.141 8.87949 103.042 10.6349 103.042 12.6705C103.049 15.6336 105.481 18.1049 108.459 18.1049Z"
                    fill="white"
                  />
                  <path
                    d="M80.2756 214.235C80.5238 214.31 80.8279 214.36 81.1009 214.36C81.225 214.36 81.3243 214.323 81.4546 214.31C181.251 219.022 251.866 165.226 291.957 121.265V75.5679C291.957 75.5679 282.202 75.4558 272.957 75.4558C244.178 101.731 170.566 130.927 102.775 123.917C102.484 123.867 102.217 123.843 101.894 123.843C101.876 123.843 101.857 123.855 101.832 123.855C100.262 123.861 98.9282 124.82 98.3263 126.108C98.1029 126.563 97.9912 127.08 97.954 127.546C94.4171 141.733 82.5219 189.441 77.5578 208.77C77.3778 209.175 77.2537 209.629 77.2165 210.046C77.2165 210.177 77.1793 210.307 77.1793 210.388C77.1731 212.299 78.5072 213.893 80.2756 214.235Z"
                    fill="white"
                  />
                  <path
                    d="M381.669 267.04L502.669 158.36C508.829 152.787 514.989 146.48 521.149 139.44C527.309 132.4 530.389 124.187 530.389 114.8C530.389 104.24 526.576 96.0267 518.949 90.16C511.323 84 502.376 80.92 492.109 80.92C479.789 80.92 470.109 84.7333 463.069 92.36C456.323 99.9866 452.509 109.373 451.629 120.52L385.629 115.68C386.509 99.5467 389.883 85.6133 395.749 73.88C401.616 61.8533 409.389 51.88 419.069 43.96C428.749 36.04 440.043 30.1733 452.949 26.36C466.149 22.2533 480.376 20.2 495.629 20.2C509.709 20.2 522.909 22.2533 535.229 26.36C547.549 30.1733 558.256 36.04 567.349 43.96C576.443 51.5867 583.483 61.2666 588.469 73C593.749 84.7333 596.389 98.3733 596.389 113.92C596.389 123.893 595.363 132.987 593.309 141.2C591.256 149.12 588.323 156.453 584.509 163.2C580.989 169.653 576.736 175.667 571.749 181.24C566.763 186.813 561.336 192.24 555.469 197.52L460.869 278.92H599.029V337H381.669V267.04ZM635.02 181.24C635.02 162.76 636.633 143.987 639.86 124.92C643.38 105.853 649.393 88.5466 657.9 73C666.7 57.4533 678.58 44.84 693.54 35.16C708.5 25.1867 727.567 20.2 750.74 20.2C773.913 20.2 792.98 25.1867 807.94 35.16C822.9 44.84 834.633 57.4533 843.14 73C851.94 88.5466 857.953 105.853 861.18 124.92C864.7 143.987 866.46 162.76 866.46 181.24C866.46 199.72 864.7 218.493 861.18 237.56C857.953 256.627 851.94 273.933 843.14 289.48C834.633 305.027 822.9 317.787 807.94 327.76C792.98 337.44 773.913 342.28 750.74 342.28C727.567 342.28 708.5 337.44 693.54 327.76C678.58 317.787 666.7 305.027 657.9 289.48C649.393 273.933 643.38 256.627 639.86 237.56C636.633 218.493 635.02 199.72 635.02 181.24ZM701.02 181.24C701.02 189.453 701.313 199.28 701.9 210.72C702.78 222.16 704.833 233.16 708.06 243.72C711.287 254.28 716.127 263.227 722.58 270.56C729.327 277.893 738.713 281.56 750.74 281.56C762.473 281.56 771.713 277.893 778.46 270.56C785.207 263.227 790.193 254.28 793.42 243.72C796.647 233.16 798.553 222.16 799.14 210.72C800.02 199.28 800.46 189.453 800.46 181.24C800.46 173.027 800.02 163.2 799.14 151.76C798.553 140.32 796.647 129.32 793.42 118.76C790.193 108.2 785.207 99.2533 778.46 91.92C771.713 84.5867 762.473 80.92 750.74 80.92C738.713 80.92 729.327 84.5867 722.58 91.92C716.127 99.2533 711.287 108.2 708.06 118.76C704.833 129.32 702.78 140.32 701.9 151.76C701.313 163.2 701.02 173.027 701.02 181.24Z"
                    fill="white"
                  />
                </svg>
              )}
              <h1 className="home-hero__title">{slide.title}</h1>
              <p
                className="home-hero__desc"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              />
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
        </>
      </div>
    </section>
  );
}
