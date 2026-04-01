"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/ui/Slider";

const INDUSTRIES = [
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industries/cards/automotive.png",
  },
  {
    slug: "white-goods",
    title: "White Goods",
    description:
      "End-to-end logistics for white goods and electronics, from factory to final delivery.",
    image: "/images/industries/cards/white-goods.png",
  },
  {
    slug: "machinery",
    title: "Machinery",
    description:
      "Specialised heavy machinery logistics with precision handling and on-time delivery.",
    image: "/images/industries/cards/machinery.png",
  },
  {
    slug: "retail-apparel",
    title: "Retail & Apparel",
    description:
      "Powering the future with efficient logistics for the retail and apparel sector.",
    image: "/images/industries/cards/retail-apparel.png",
  },
  {
    slug: "fmcg",
    title: "FMCG",
    description:
      "High-velocity logistics solutions designed for fast-moving consumer goods.",
    image: "/images/industries/cards/fmcg.png",
  },
  {
    slug: "energy-oil-gas",
    title: "Energy, Oil & Gas",
    description:
      "Reliable logistics for the energy sector's most demanding supply chain needs.",
    image: "/images/industries/cards/energy-oil-gas.png",
  },
  {
    slug: "construction-materials",
    title: "Construction Materials",
    description:
      "Timely, damage-free delivery of construction materials across project sites.",
    image: "/images/industries/cards/construction-materials.png",
  },
  {
    slug: "paper-pulp",
    title: "Paper & Pulp",
    description:
      "Seamless bulk and containerised logistics for the paper and pulp industry.",
    image: "/images/industries/cards/paper-pulp.png",
  },
  {
    slug: "natural-rubber",
    title: "Natural Rubber",
    description:
      "Plantation-to-port logistics for natural rubber with full supply chain visibility.",
    image: "/images/industries/cards/natural-rubber.png",
  },
  {
    slug: "renewables",
    title: "Renewables",
    description:
      "Powering the energy transition with specialised renewables equipment logistics.",
    image: "/images/industries/cards/renewables.png",
  },
];

const sliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function HomeIndustriesSlider() {
  return (
    <section className="home-industries">
      <div className="container">
        <div className="home-industries__header">
          <div className="home-industries__title-group">
            <span className="home-industries__tag">Industries we offer</span>
            <h2 className="home-industries__title">
              Logistics for every sector
            </h2>
            <p className="home-industries__description">
              If it moves, we ship it. From Pharma to renewables and automotive,
              get your goods delivered to your doorstep, well and safe.
            </p>
          </div>
          <Link href="/industries" className="home-industries__btn">
            See More
          </Link>
        </div>

        <Slider className="home-industries__slider" settings={sliderSettings}>
          {INDUSTRIES.map((industry) => (
            <div key={industry.slug} className="industry-slide">
              <Link
                href={`/industries/${industry.slug}`}
                className="industry-slide__card"
              >
                <div className="industry-slide__image-wrapper">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="industry-slide__image"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 265px"
                  />
                </div>
                <div className="industry-slide__content">
                  <span className="industry-slide__name">{industry.title}</span>
                  <p className="industry-slide__desc">{industry.description}</p>
                  <span className="industry-slide__link">Learn more</span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
