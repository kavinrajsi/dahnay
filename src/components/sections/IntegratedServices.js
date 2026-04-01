import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Sea Freight",
    description: "Efficient and reliable sea freight solutions that deliver your cargo across the globe.",
    image: "/images/home/services/sea-freight.png",
    href: "/service/sea-freight",
  },
  {
    title: "Air Freight",
    description: "Fast, secure air freight services ensuring timely deliveries, no matter the destination.",
    image: "/images/home/services/air-freight.png",
    href: "/service/air-freight",
  },
  {
    title: "Road Transportation",
    description: "Efficient road logistics connecting ports, warehouses, and final destinations.",
    image: "/images/home/services/road-transportation.png",
    href: "/service/road-transportation",
  },
  {
    title: "Container Freight Station",
    description: "Optimised CFS services for seamless cargo handling, storage and distribution with speed and efficiency.",
    image: "/images/home/services/cfs.png",
    href: "/solutions/ports-infra#cfs",
  },
  {
    title: "Free Trade Warehousing Zone",
    description: "Secure, scalable warehousing solutions that keep your inventory closer, smarter and ready to move.",
    image: "/images/home/services/ftwz.png",
    href: "/solutions/ports-infra#ftwz",
  },
  {
    title: "Project Logistics",
    description: "Specialised project logistics solutions for seamless execution of large and complex shipments.",
    image: "/images/home/services/project-logistics.png",
    href: "/service/project-logistics",
  },
  {
    title: "E-commerce Fulfilment Support",
    description: "Effortless fulfilment, returns and reverse movement that close the loop without slowing you down.",
    image: "/images/home/services/ecommerce-fulfillment.png",
    href: "/service/ecommerce-fulfilment",
  },
];

export default function IntegratedServices() {
  return (
    <section className="integrated-services">
      <div className="container integrated-services__container">
        <div className="integrated-services__sidebar">
          <div className="integrated-services__sidebar-content">
            <span className="integrated-services__tag">Services We Offer</span>
            <h2 className="integrated-services__title">Integrated logistics solutions</h2>
            <p className="integrated-services__desc">
              From factory door to retail store, benefit from seamless, end-to-end logistics solutions tailored to your needs. We plan, we strategise, we move and we make it happen. Start to finish.
            </p>
          </div>
          <Link href="/solutions/logistics" className="integrated-services__btn">
            Our Services
          </Link>
        </div>

        <div className="integrated-services__cards">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="integrated-services__card">
              <div className="integrated-services__card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="integrated-services__card-img"
                  sizes="(max-width: 767px) 100vw, 550px"
                />
              </div>
              <div className="integrated-services__card-body">
                <div className="integrated-services__card-info">
                  <h3 className="integrated-services__card-title">{service.title}</h3>
                  <p className="integrated-services__card-desc">{service.description}</p>
                </div>
                <span className="integrated-services__card-link">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
