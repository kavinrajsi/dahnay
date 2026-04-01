import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ image, title, description, href }) {
  return (
    <div className="service-card">
      <div className="service-card__image-wrapper">
        <Image
          src={image}
          alt={title}
          width={360}
          height={216}
          sizes="(min-width: 992px) 360px, (min-width: 768px) 50vw, 100vw"
          className="service-card__image"
        />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <Link href={href} className="service-card__link">
          Learn more
        </Link>
      </div>
    </div>
  );
}
