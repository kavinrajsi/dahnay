import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Warehousing",
    description: "Secure storage for efficient cargo handling and inventory management.",
    image: "/images/ports-infra/warehousing.png",
    href: "/solutions/ports-infra#warehousing",
  },
  {
    title: "Free Trade Warehousing Zone",
    description: "Duty-advantaged warehousing for smoother international trade operations.",
    image: "/images/ports-infra/ftwz.png",
    href: "/solutions/ports-infra#ftwz",
  },
  {
    title: "Container Freight Stations",
    description: "Port-side facilities for cargo consolidation, deconsolidation and customs processing.",
    image: "/images/ports-infra/cfs.png",
    href: "/solutions/ports-infra#cfs",
  },
];

export default function PortsInfraSection() {
  return (
    <section className="ports-infra-section">
      <div className="container">
        <div className="ports-infra-section__header">
          <div className="ports-infra-section__header-left">
            <span className="ports-infra-section__tag">Services we offer</span>
            <h2 className="ports-infra-section__title">
              Infrastructure at<br />key trade hubs
            </h2>
          </div>
          <p className="ports-infra-section__description">
            Strategically located infrastructure designed to support seamless cargo movement across global supply chains. From warehousing and FTWZ facilities to container freight stations, our capabilities ensure efficient storage, handling and distribution.
          </p>
        </div>

        <div className="ports-infra-section__grid">
          {services.map((service) => (
            <div key={service.href} className="ports-infra-card">
              <div className="ports-infra-card__image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={360}
                  height={170}
                  className="ports-infra-card__image"
                />
              </div>
              <div className="ports-infra-card__content">
                <div className="ports-infra-card__text">
                  <p className="ports-infra-card__title">{service.title}</p>
                  <p className="ports-infra-card__desc">{service.description}</p>
                </div>
                <Link href={service.href} className="ports-infra-card__link">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
