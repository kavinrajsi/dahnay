import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    tag: "News",
    date: "04/09/2025",
    title: "Logistics Cybersecurity: How to Protect Your Supply Chain from Digital Threats",
    description: "Efficient sea freight solutions with optimized routing, container management, and seamless port operations — ensuring smooth international trade.",
    image: "/images/home/newsroom-1.png",
    href: "/newsroom",
  },
  {
    tag: "News",
    date: "05/15/2025",
    title: "Navigating the Future: Insights from Industry Experts",
    description: "A series of discussions featuring leaders in technology and logistics, sharing their views on innovation and sustainability in the supply chain.",
    image: "/images/home/newsroom-2.png",
    href: "/newsroom",
  },
  {
    tag: "News",
    date: "06/20/2025",
    title: "Digital Transformation in Logistics: Strategies for Success",
    description: "An interactive session that explores the tools and methodologies for integrating digital solutions into logistics operations.",
    image: "/images/home/newsroom-3.png",
    href: "/newsroom",
  },
];

export default function HomeNewsroom() {
  return (
    <section className="home-newsroom">
      <div className="container">
        <div className="home-newsroom__header">
          <div className="home-newsroom__header-left">
            <span className="home-newsroom__tag">Newsroom</span>
            <h2 className="home-newsroom__title">
              The latest buzz at {" "}
              <span className="home-newsroom__title-accent">DahNAY</span>
            </h2>
          </div>
          <Link href="/newsroom" className="button home-newsroom__cta">
            See more
          </Link>
        </div>

        <div className="home-newsroom__grid">
          {articles.map((article, i) => (
            <Link key={i} href={article.href} className="news-card">
              <div className="news-card__image-wrapper">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={360}
                  height={216}
                  sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="news-card__image"
                />
                <span className="news-card__tag">{article.tag}</span>
              </div>
              <div className="news-card__body">
                <p className="news-card__date">{article.date}</p>
                <p className="news-card__title">{article.title}</p>
                <p className="news-card__description">{article.description}</p>
                <p className="news-card__cta">Learn more</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
