import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Slider from "../ui/Slider";

export default function ServiceExpertise({
  tag = "Expertise",
  title,
  titleAccent,
  content,
  items = [],
  children,
}) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    dotsClass: "slider__control",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.5 },
      },
    ],
  };

  return (
    <section className="expertise">
      <div className="container">
        <SectionHeader
          tag={tag}
          title={title}
          titleAccent={titleAccent}
          content={content}
        />
      </div>
      {items.length > 0 && (
        <div className="expertise__slider container">
          <Slider settings={sliderSettings}>
            {items.map((item, index) => (
              <div key={index} className="expertise__slide">
                <div className="service-card">
                  <div className="service-card__image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={216}
                      className="service-card__image"
                    />
                  </div>
                  <div className="service-card__content">
                    <h3 className="service-card__title">{item.title}</h3>
                    {item.description && (
                      <p className="service-card__description">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
      {children}
    </section>
  );
}
