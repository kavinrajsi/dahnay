import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "DahNAY Logistics",
    description: "End-to-end freight and logistics solutions across sea, air and road — built for precision and reliability.",
    image: "/images/logistics/sea-freight.png",
    href: "/solutions/logistics",
  },
  {
    title: "DahNAY Lines",
    description: "NVOCC and LCL consolidation services connecting global trade routes with dependable container movement.",
    image: "/images/lines/dry-cargo.png",
    href: "/solutions/lines",
  },
  {
    title: "DahNAY Ports & Infra",
    description: "Strategically located warehousing, FTWZ and CFS facilities designed to support seamless cargo movement.",
    image: "/images/ports-infra/warehousing.png",
    href: "/solutions/ports-infra",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="solutions-grid">
      <div className="container">
        <div className="solutions-grid__grid">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href} className="solution-card">
              <div className="solution-card__image-wrapper">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={360}
                  height={220}
                  sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="solution-card__image"
                />
              </div>
              <div className="solution-card__content">
                <div className="solution-card__text">
                  <p className="solution-card__title">{solution.title}</p>
                  <p className="solution-card__description">{solution.description}</p>
                </div>
                <p className="solution-card__learn-more">Learn more</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
