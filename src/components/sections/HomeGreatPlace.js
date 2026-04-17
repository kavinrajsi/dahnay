import Image from "next/image";
import Link from "next/link";

export default function HomeGreatPlace() {
  return (
    <section className="home-gptw">
      <Image
        src="/images/home/gptw-bg.png"
        alt="Great Place to Work"
        width={1200}
        height={630}
        sizes="100vw"
        className="home-gptw__bg"
        priority={false}
      />
      <div className="home-gptw__overlay" />
      <div className="container home-gptw__container">
        <div className="home-gptw__content">
          <h2 className="home-gptw__title">
            Great Place to Work
            <br />
            Greater Place to Grow.
          </h2>
          <Link href="/careers" className="home-gptw__btn">
            Start your journey
          </Link>
        </div>
        <div className="home-gptw__badges">
          <Image
            src="/images/home/gptw-badges.png"
            alt="Great Place To Work Certified"
            width={112}
            height={158}
            className="home-gptw__badge-img"
          />
          <Image
            src="/images/home/gptw-cert-strip.png"
            alt="Great Place To Work Certified 2026"
            width={92}
            height={158}
            className="home-gptw__badge-img"
          />
        </div>
      </div>
    </section>
  );
}
