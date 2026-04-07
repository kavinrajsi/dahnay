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
    href: "/solutions/ports-infra",
  },
  {
    title: "Free Trade Warehousing Zone",
    description: "Secure, scalable warehousing solutions that keep your inventory closer, smarter and ready to move.",
    image: "/images/home/services/ftwz.png",
    href: "/solutions/ports-infra",
  },
  {
    title: "Project Logistics",
    description: "Specialised project logistics solutions for seamless execution of large and complex shipments.",
    image: "/images/home/services/project-logistics.png",
    href: "/service/project-logistics",
  },
  {
    title: "E-commerce Fulfillment Support",
    description: "Effortless fulfilment, returns and reverse movement that close the loop without slowing you down.",
    image: "/images/home/services/ecommerce-fulfillment.png",
    href: "/service/ecommerce-fulfilment",
  },
];

export default function HomeServices() {
  return (
    <section className="home-services">
      <div className="container">
        <div className="home-services__inner">
          <div className="home-services__left">
            <span className="home-services__tag">Services we offer</span>
            <h2 className="home-services__title">
              Integrated logistics solutions
            </h2>
            <p className="home-services__body">
              From factory door to retail store, benefit from seamless, end-to-end logistics solutions tailored to your needs. We plan, we strategise, we move and we make it happen. Start to finish.
            </p>
            <Link href="/service" className="button">
              Our Services
            </Link>
          </div>

          <div className="home-services__cards">
            {services.map((service, index) => (
              <Link key={service.href + service.title} href={service.href} className="home-service-card">
                <div className="home-service-card__image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={550}
                    height={260}
                    sizes="(min-width: 992px) 550px, 100vw"
                    className="home-service-card__image"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <div className="home-service-card__content">
                  <div className="home-service-card__text">
                    <p className="home-service-card__title">{service.title}</p>
                    <p className="home-service-card__desc">{service.description}</p>
                  </div>
                  <span className="home-service-card__link">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
