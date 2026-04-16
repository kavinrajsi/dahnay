import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__inner">
          <div className="home-about__left">
            <span className="home-about__tag">WHO WE ARE</span>
            <h2 className="home-about__title">
              Twenty years. One purpose:{" "}
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
            <video
              className="home-supply-chain__video"
              src="/video/about-video.mp4"
              poster="/video/about-video.png"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
