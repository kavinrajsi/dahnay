import Image from "next/image";
import Link from "next/link";

export default function TrustCTA({
  title = "Need a partner you can",
  description = "Partner with DahNAY for smarter logistics: transparent pricing, proactive support and solutions designed to fit your growth.",
  ctaText = "Join us",
  ctaHref = "/contact",
  image,
  imageAlt = "",
}) {
  return (
    <section
      className="trust-cta"
      style={{ backgroundImage: image ? `url(${image})` : "none" }}
    >
      <div className="container">
        <div className="trust-cta__content">
          <h2 className="trust-cta__title">{title}</h2>

          <Link href={ctaHref} className="button">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
