import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__inner">
          <div className="home-about__left">
            <span className="home-about__tag">Why DahNAY</span>
            <h2 className="home-about__title">
              20 years. One purpose:{" "}
              <span className="home-about__title-accent">Growth</span>
            </h2>
            <p className="home-about__body">
              Built on trust and expertise, DahNAY empowers businesses with seamless logistics across borders and sectors.
            </p>
            <Link href="/about" className="button">
              Get to know us
            </Link>
          </div>
          <div className="home-about__right">
            <Image
              src="/images/home/about-dahnay.png"
              alt="About DahNAY"
              width={712}
              height={400}
              className="home-about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
