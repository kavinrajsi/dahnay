import Image from "next/image";
import Link from "next/link";

export default function IndustryCard({ image, title, description, href }) {
  return (
    <div className="industry-card">
      <div className="industry-card__image-wrapper">
        <Image
          src={image}
          alt={title}
          width={360}
          height={216}
          className="industry-card__image"
        />
      </div>
      <div className="industry-card__content">
        <h3 className="industry-card__title">{title}</h3>
        <p className="industry-card__description">{description}</p>
        <Link href={href} className="industry-card__link">
          Learn more
        </Link>
      </div>
    </div>
  );
}
