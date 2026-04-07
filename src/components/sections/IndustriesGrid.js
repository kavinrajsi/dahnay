import Link from "next/link";
import Image from "next/image";
import { industries } from "@/data/industries";
import "@/styles/components/_industries-grid.scss";

export default function IndustriesGrid() {
  return (
    <section className="industries-grid">
      <div className="container">
        <div className="industries-grid__grid">
          {industries.map((industry) => (
            <Link key={industry.href + industry.title} href={industry.href} className="industry-card">
              <div className="industry-card__image-wrapper">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={265}
                  height={180}
                  sizes="(min-width: 992px) 265px, (min-width: 768px) 50vw, 100vw"
                  className="industry-card__image"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <p className="industry-card__title">{industry.title}</p>
                  <p className="industry-card__description">{industry.description}</p>
                </div>
                <p className="industry-card__learn-more">Learn more</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
