import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Dry cargo",
    description: "Secure, weather-tight and versatile solutions for transporting general cargo across global routes.",
    image: "/images/lines/dry-cargo.png",
    href: "/solutions/lines#dry-cargo",
  },
  {
    title: "Refrigerated cargo",
    description: "With precise temperature control systems, we keep perishable and sensitive cargo fresh, safe and intact throughout transit.",
    image: "/images/lines/refrigerated-cargo.png",
    href: "/solutions/lines#refrigerated-cargo",
  },
  {
    title: "Specialised Cargo",
    description: "Open Top for over-height cargo, Flat Rack for heavy machinery and industrial structures, and Platform, Transportable Tank, and other custom options for specialised cargo needs.",
    image: "/images/lines/specialised-cargo.png",
    href: "/solutions/lines#specialised-cargo",
  },
];

export default function LinesSection() {
  return (
    <section className="lines-section">
      <div className="container">
        <div className="lines-section__header">
          <div className="lines-section__header-left">
            <span className="lines-section__tag">Our Services</span>
            <h2 className="lines-section__title">
              Seamlessly connecting your cargo to the world
            </h2>
          <p className="lines-section__description">
           Through DahNAY Lines, we bring together our core NVOCC capabilities, LCL consolidation, efficient documentation, and dedicated customer service, to ensure smooth and reliable container movement across global trade routes.
          </p>
          <p className="lines-section__description" style={{ padding: "10px 0 0" }}>
           From consolidating smaller shipments to managing the paperwork and keeping customers informed at every stage, DahNAY Lines simplifies ocean freight with dependable coordination and end-to-end support.
          </p>
          </div>
          <Link href="/contact" className="logistics-section__btn">
            Talk to us
           </Link>
        </div>

        <div className="lines-section__grid">
          {services.map((service) => (
            <div key={service.href} className="lines-card">
              <div className="lines-card__image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={360}
                  height={170}
                  sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="lines-card__image"
                />
              </div>
              <div className="lines-card__content">
                <div className="lines-card__text">
                  <p className="lines-card__title">{service.title}</p>
                  <p className="lines-card__desc">{service.description}</p>
                </div>
                {/* <Link href={service.href} className="lines-card__link">
                  Learn more
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
