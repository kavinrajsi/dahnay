import Image from "next/image";

export default function Banner({ desktopImage, alt, title }) {
  const imgAlt = alt || title;

  return (
    <section className="banner">
      <Image
        className="banner__image"
        src={desktopImage}
        alt={imgAlt}
        width={1440}
        height={580}
        priority
      />
    </section>
  );
}
