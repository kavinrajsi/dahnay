import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sea Freight",
    description: "Full and less-than-container load solutions connecting major ports worldwide.",
    image: "/images/logistics/sea-freight.png",
    href: "/solutions/logistics#sea-freight",
  },
  {
    title: "Air Freight",
    description: "Fast, reliable air cargo services for time-sensitive and high-value shipments.",
    image: "/images/logistics/air-freight.png",
    href: "/solutions/logistics#air-freight",
  },
  {
    title: "Road Transportation",
    description: "Flexible overland freight solutions for regional and cross-border cargo movement.",
    image: "/images/logistics/road-transportation.png",
    href: "/solutions/logistics#road-transportation",
  },
  {
    title: "Time Critical Delivery",
    description: "Express and priority shipment services engineered for urgent cargo requirements.",
    image: "/images/logistics/time-critical-delivery.png",
    href: "/solutions/logistics#time-critical-delivery",
  },
  {
    title: "Project Logistics",
    description: "End-to-end logistics management for complex, oversized and heavy-lift projects.",
    image: "/images/logistics/project-logistics.png",
    href: "/solutions/logistics#project-logistics",
  },
  {
    title: "Reverse Logistics",
    description: "Efficient returns management and reverse supply chain solutions for businesses.",
    image: "/images/logistics/reverse-logistics.png",
    href: "/solutions/logistics#reverse-logistics",
  },
  {
    title: "Customs Clearance",
    description: "Expert customs brokerage ensuring compliant and smooth cross-border trade.",
    image: "/images/logistics/customs-clearance.png",
    href: "/solutions/logistics#customs-clearance",
  },
  {
    title: "Domestic Trucking",
    description: "Comprehensive inland trucking network covering full-truckload and part-load needs.",
    image: "/images/logistics/domestic-trucking.png",
    href: "/solutions/logistics#domestic-trucking",
  },
  {
    title: "Last Mile Delivery",
    description: "Reliable final-leg delivery services ensuring cargo reaches its destination on time.",
    image: "/images/logistics/last-mile-delivery.png",
    href: "/solutions/logistics#last-mile-delivery",
  },
  {
    title: "E-commerce Fulfillment Support",
    description: "Integrated fulfilment and delivery solutions tailored for online retail operations.",
    image: "/images/logistics/ecommerce-fulfillment.png",
    href: "/solutions/logistics#ecommerce-fulfillment",
  },
  {
    title: "Green Logistics",
    description: "Sustainable shipping practices that reduce carbon footprint across the supply chain.",
    image: "/images/logistics/green-logistics.png",
    href: "/solutions/logistics#green-logistics",
  },
];

export default function LogisticsSection() {
  return (
    <section className="logistics-section">
      <div className="container">
        <div className="logistics-section__header">
          <div className="logistics-section__header-left">
            <span className="logistics-section__tag">Services we offer</span>
            <h2 className="logistics-section__title">
              Solutions that move<br />your cargo forward
            </h2>
          </div>
          <p className="logistics-section__description">
            From ocean and air freight to last-mile delivery and green logistics, DahNAY delivers end-to-end solutions across every mode of transport — keeping your supply chain moving with precision and reliability.
          </p>
        </div>

        <div className="logistics-section__grid">
          {services.map((service) => (
            <div key={service.href} className="logistics-card">
              <div className="logistics-card__image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={360}
                  height={170}
                  className="logistics-card__image"
                />
              </div>
              <div className="logistics-card__content">
                <div className="logistics-card__text">
                  <p className="logistics-card__title">{service.title}</p>
                  <p className="logistics-card__desc">{service.description}</p>
                </div>
                <Link href={service.href} className="logistics-card__link">
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
