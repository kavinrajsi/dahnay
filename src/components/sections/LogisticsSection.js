import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sea Freight",
    description: "Efficient and reliable sea freight solutions that deliver your cargo across the globe.",
    image: "/images/logistics/sea-freight.png",
    href: "/service/sea-freight",
  },
  {
    title: "Air Freight",
    description: "Fast, secure air freight services ensuring timely deliveries, no matter the destination.",
    image: "/images/logistics/air-freight.png",
    href: "/service/air-freight",
  },
  {
    title: "Road Transportation",
    description: "Efficient road logistics connecting ports, warehouses, and final destinations.",
    image: "/images/logistics/road-transportation.png",
    href: "/service/road-transportation",
  },
  {
    title: "Time Critical Delivery",
    description: "Fast, reliable delivery for time-sensitive cargo when every minute matters.",
    image: "/images/logistics/time-critical-delivery.png",
    href: "/service/time-critical-delivery",
  },
  {
    title: "Project Logistics",
    description: "Specialised project logistics solutions for seamless execution of large and complex shipments.",
    image: "/images/logistics/project-logistics.png",
    href: "/service/project-logistics",
  },
  {
    title: "Reverse Logistics",
    description: "Effortless fulfilment, returns and reverse movement that close the loop without slowing you down.",
    image: "/images/logistics/reverse-logistics.png",
    href: "/service/reverse-logistics",
  },
  {
    title: "Customs Clearance",
    description: "Expert customs clearance ensuring compliant, efficient and hassle-free cargo movement with minimal delays.",
    image: "/images/logistics/customs-clearance.png",
    href: "/service/customs-clearance",
  },
  {
    title: "Domestic Trucking",
    description: "We keep your cargo moving like clockwork with dependable trucking and real-time coordination.",
    image: "/images/logistics/domestic-trucking.png",
    href: "/service/domestic-trucking",
  },
  {
    title: "Last Mile Delivery",
    description: "From the final hub to the customer's doorstep, we handle the last mile with care, coordination and on-time.",
    image: "/images/logistics/last-mile-delivery.png",
    href: "/service/last-mile-delivery",
  },
  {
    title: "E-commerce Fulfillment Support",
    description: "Every order, picked, packed and delivered with precision - so your customers keep coming back",
    image: "/images/logistics/ecommerce-fulfillment.png",
    href: "/service/ecommerce-fulfilment",
  },
];

export default function LogisticsSection() {
  return (
    <section className="logistics-section">
      <div className="container">
        <div className="logistics-section__header">
          <div className="logistics-section__header-left">
            <span className="logistics-section__tag">Our Services</span>
            <h2 className="logistics-section__title">
              Solutions that move your cargo forward
            </h2>
            <p className="logistics-section__description">
            From global freight movement to warehousing and supply chain solutions, our services are designed to keep your cargo moving efficiently across markets. With strong networks, reliable infrastructure and experienced teams, we deliver logistics solutions you can depend on.
          </p>
          </div>
          <Link href="/contact" className="logistics-section__btn">
            Talk to us
           </Link>
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
                  sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
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
