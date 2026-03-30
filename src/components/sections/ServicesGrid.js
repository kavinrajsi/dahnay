import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Air Freight",
    description: "Fast, reliable air cargo services for time-sensitive and high-value shipments.",
    image: "/images/logistics/air-freight.png",
    href: "/service/air-freight",
  },
  {
    title: "Sea Freight",
    description: "Full and less-than-container load solutions connecting major ports worldwide.",
    image: "/images/logistics/sea-freight.png",
    href: "/service/sea-freight",
  },
  {
    title: "Road Transportation",
    description: "Flexible overland freight solutions for regional and cross-border cargo movement.",
    image: "/images/logistics/road-transportation.png",
    href: "/service/road-transportation",
  },
  {
    title: "Time Critical Delivery",
    description: "Express and priority shipment services engineered for urgent cargo requirements.",
    image: "/images/logistics/time-critical-delivery.png",
    href: "/service/time-critical-delivery",
  },
  {
    title: "Project Logistics",
    description: "End-to-end logistics management for complex, oversized and heavy-lift projects.",
    image: "/images/logistics/project-logistics.png",
    href: "/service/project-logistics",
  },
  {
    title: "Reverse Logistics",
    description: "Efficient returns management and reverse supply chain solutions for businesses.",
    image: "/images/logistics/reverse-logistics.png",
    href: "/service/reverse-logistics",
  },
  {
    title: "Customs Clearance",
    description: "Expert customs brokerage ensuring compliant and smooth cross-border trade.",
    image: "/images/logistics/customs-clearance.png",
    href: "/service/customs-clearance",
  },
  {
    title: "Domestic Trucking",
    description: "Comprehensive inland trucking network covering full-truckload and part-load needs.",
    image: "/images/logistics/domestic-trucking.png",
    href: "/service/domestic-trucking",
  },
  {
    title: "Last Mile Delivery",
    description: "Reliable final-leg delivery services ensuring cargo reaches its destination on time.",
    image: "/images/logistics/last-mile-delivery.png",
    href: "/service/last-mile-delivery",
  },
  {
    title: "E-commerce Fulfilment Support",
    description: "Integrated fulfilment and delivery solutions tailored for online retail operations.",
    image: "/images/logistics/ecommerce-fulfillment.png",
    href: "/service/ecommerce-fulfilment",
  },
  {
    title: "Green Logistics",
    description: "Sustainable shipping practices that reduce carbon footprint across the supply chain.",
    image: "/images/logistics/green-logistics.png",
    href: "/solutions/logistics#green-logistics",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="container">
        <div className="services-grid__grid">
          {services.map((service) => (
            <Link key={service.href + service.title} href={service.href} className="service-grid-card">
              <div className="service-grid-card__image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={265}
                  height={180}
                  className="service-grid-card__image"
                />
              </div>
              <div className="service-grid-card__content">
                <div className="service-grid-card__text">
                  <p className="service-grid-card__title">{service.title}</p>
                  <p className="service-grid-card__description">{service.description}</p>
                </div>
                <p className="service-grid-card__learn-more">Learn more</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
