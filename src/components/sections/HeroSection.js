import Image from "next/image";

export default function HeroSection({ image, alt, children }) {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <Image
          src={image}
          alt={alt}
          width={1440}
          height={580}
          priority
          sizes="100vw"
          className="hero__image"
        />
      </div>
      {children && <div className="hero__overlay">{children}</div>}
    </section>
  );
}
