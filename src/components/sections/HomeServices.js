import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "<strong>DahNAY</strong> Logistics",
    image: "/images/home/services/solution-dahnay-logistics.png",
    href: "/solutions/logistics",
  },
  {
    title: "<strong>DahNAY</strong> Lines",
    image: "/images/home/services/solution-dahnay-lines.png",
    href: "/solutions/lines",
  },
  {
    title: "<strong>DahNAY</strong> Ports & Infra",
    image: "/images/home/services/solution-dahnay-ports-infra.png",
    href: "/solutions/ports-infra",
  },
];

export default function HomeServices() {
  return (
    <section className="home-services">
      <div className="container">
        <div className="home-services__inner">
          <div className="home-services__left">
            <span className="home-services__tag">Our SOLUTIONS</span>
            <h2 className="home-services__title">
              Integrated logistics solutions
            </h2>
            <p className="home-services__body">
              From factory door to retail store, benefit from seamless, end-to-end logistics solutions tailored to your needs. We plan, we strategise, we move and we make it happen. Start to finish.
            </p>
            {/* <Link href="/service" className="button">
              Our Services
            </Link> */}
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
                    <p className="home-service-card__title" dangerouslySetInnerHTML={{ __html: service.title }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
