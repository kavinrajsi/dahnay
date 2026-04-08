// url : industries/{detail}/expertise.js

import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Expertise({
  tag = "Expertise",
  title,
  titleAccent,
  content,
  items = [],
  children,
}) {
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
        <div className="expertise__grid container">
          {items.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-card__image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={216}
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
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
          ))}
        </div>
      )}
      {children}
    </section>
  );
}
