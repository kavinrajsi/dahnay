import Image from "next/image";
import Link from "next/link";

export default function HomeGreatPlace() {
  return (
    <section className="home-gptw">
      <Image
        src="/images/home/gptw-bg.png"
        alt=""
        fill
        className="home-gptw__bg"
        sizes="100vw"
        priority={false}
      />
      <div className="home-gptw__overlay" />
      <div className="container home-gptw__container">
        <div className="home-gptw__content">
          <h2 className="home-gptw__title">
            Great Place to Work<br />
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
          <div className="home-gptw__divider" />
          <Image
            src="/images/home/gptw-cert-strip.png"
            alt="Great Place To Work Certified 2026"
            width={92}
            height={158}
            className="home-gptw__badge-img"
          />
          <div className="home-gptw__divider" />
          <svg className="home-gptw__logo" width="286" height="83" viewBox="0 0 286 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.0688 13.1538C52.7241 13.1538 49.6815 13.1744 49.6815 13.1744C49.6815 13.1744 49.7185 15.6744 49.6784 17.8261C51.5891 32.2821 46.0842 41.1589 35.4247 45.992C21.7216 52.2184 7.60349 45.5726 2.58243 34.6214C2.54751 34.4483 2.3133 34.0628 2.27221 34.034C2.0339 33.7753 1.69389 33.6084 1.31484 33.6084C0.586543 33.6084 0 34.1989 0 34.9244C0 35.1377 0.05547 35.3324 0.144838 35.5148C9.61067 60.4037 33.8705 58.3458 44.6954 50.8066C55.3127 43.4168 62.1355 27.9725 54.0688 13.1538Z" fill="white"/>
            <path d="M17.9546 3.65934C17.9895 3.65934 18.0255 3.6511 18.0604 3.64594C18.1108 3.63255 18.159 3.62224 18.2073 3.61606C21.8046 2.87409 25.0003 2.88234 27.0003 3.23889C34.1714 4.50127 38.2967 6.39431 43.8704 11.8251C43.8765 11.8364 48.3306 11.8251 48.3306 11.8251V8.98604C44.3665 4.36524 36.2751 -0.00308989 28.1405 1.63996e-06C24.6213 1.63996e-06 21.2243 0.498768 17.7471 1.88274C17.6619 1.90541 17.5838 1.93633 17.5088 1.97549C17.2397 2.13213 17.0579 2.42273 17.0579 2.75971C17.0589 3.25023 17.4616 3.65934 17.9546 3.65934Z" fill="white"/>
            <path d="M13.2891 36.128C13.3302 36.1404 13.3805 36.1486 13.4257 36.1486C13.4462 36.1486 13.4627 36.1424 13.4842 36.1404C30.005 36.9205 41.6948 28.0148 48.3317 20.7373V13.1724C48.3317 13.1724 46.7169 13.1538 45.1863 13.1538C40.4221 17.5036 28.2362 22.3367 17.0138 21.1763C16.9655 21.1681 16.9213 21.164 16.8679 21.164C16.8648 21.164 16.8617 21.166 16.8576 21.166C16.5978 21.1671 16.3769 21.3257 16.2773 21.5391C16.2403 21.6143 16.2218 21.6998 16.2156 21.7771C15.6301 24.1256 13.6609 32.0235 12.8392 35.2232C12.8094 35.2902 12.7888 35.3654 12.7827 35.4345C12.7827 35.4561 12.7765 35.4777 12.7765 35.4911C12.7755 35.8075 12.9963 36.0713 13.2891 36.128Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
