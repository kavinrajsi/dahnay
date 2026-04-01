import Image from "next/image";
import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import CareerJobsSection from "@/components/sections/CareerJobsSection";
import CareerFormSection from "@/components/sections/CareerFormSection";

export const metadata = {
  title: "Careers",
  description:
    "Join DahNAY and shape the future of logistics. Explore career opportunities across freight, technology, operations, and sales.",
  openGraph: {
    title: "Careers | DahNAY",
    description:
      "Join DahNAY and shape the future of logistics. Explore career opportunities across freight, technology, operations, and sales.",
    images: [{ url: "/images/banners/banner-desktop-careers.png", width: 1200, height: 630 }],
  },
};

const CULTURE_CARDS = [
  {
    id: 1,
    image: "/images/careers/culture-people-first.png",
    title: "People-First Culture",
    description:
      "We believe our people are our greatest asset. Every decision we make puts employee wellbeing, growth, and fulfilment at the centre.",
  },
  {
    id: 2,
    image: "/images/careers/culture-one-team.png",
    title: "One Team, Many Voices",
    description:
      "Diversity drives innovation. We celebrate different perspectives, backgrounds, and ideas — because the best solutions come from inclusive teams.",
  },
  {
    id: 3,
    image: "/images/careers/culture-growth.png",
    title: "Growth & Opportunity",
    description:
      "From day one, you'll have access to mentorship, training, and pathways to advance. Your ambition shapes your career at DahNAY.",
  },
];

export default function CareersPage() {
  return (
    <div className="page page--careers">
      <Banner
        title="Careers"
        desktopImage="/images/banners/banner-desktop-careers.png"
      />

      {/* Great Place to Work strip */}
      <div className="gptw-strip">
        <div className="gptw-strip__inner container">
          <Image
            src="/images/careers/gptw-badge.png"
            alt="Great Place To Work Certified"
            width={80}
            height={80}
            className="gptw-strip__badge"
          />
          <div className="gptw-strip__text-group">
            <span className="gptw-strip__label">Certified™ 2024–2025</span>
            <span className="gptw-strip__title">
              We are Great Place To Work® Certified™
            </span>
          </div>
          <Image
            src="/images/logo.svg"
            alt="DahNAY"
            width={120}
            height={32}
            className="gptw-strip__logo"
          />
        </div>
      </div>

      {/* Culture section */}
      <section className="career-culture container">
        <div className="career-culture__header">
          <SectionHeader
            tag="OUR CULTURE"
            title="Life at"
            titleAccent="DahNAY"
          />
        </div>
        <div className="career-culture__grid">
          {CULTURE_CARDS.map((card) => (
            <div key={card.id} className="culture-card">
              <div className="culture-card__image-wrapper">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="culture-card__image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="culture-card__content">
                <h3 className="culture-card__title">{card.title}</h3>
                <p className="culture-card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job listings */}
      <CareerJobsSection />

      {/* Career contact form */}
      <CareerFormSection />
    </div>
  );
}
