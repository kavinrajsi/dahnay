import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Slider from "../ui/Slider";

export default function Expertise({
  tag = "Expertise",
  title,
  titleAccent,
  content,
  items = [],
  layout = "slider",
  children,
}) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: "slider__control",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  const renderCard = (item, index) => (
    <div key={index} className="service-card">
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
  );

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
      {items.length > 0 && layout === "slider" && (
        <div className="expertise__slider container">
          <Slider settings={sliderSettings}>
            {items.map((item, index) => (
              <div key={index} className="expertise__slide">
                {renderCard(item, index)}
              </div>
            ))}
          </Slider>
        </div>
      )}
      {items.length > 0 && layout === "grid" && (
        <div className="expertise__grid container">
          {items.map((item, index) => renderCard(item, index))}
        </div>
      )}
      {children}
    </section>
  );
}
