import Image from "next/image";
import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeader from "@/components/sections/SectionHeader";
import CareerJobsSection from "@/components/sections/CareerJobsSection";
import CareerFormSection from "@/components/sections/CareerFormSection";
import CareerApplyForm from "@/components/sections/CareerApplyForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, jobPostingSchema, webPageSchema } from "@/lib/schema";
import { JOBS } from "@/data/careers/jobs";

export const metadata = {
  title: "Join DahNAY - Logistics, Freight & Supply Chain Careers",
  description:
    "Build your career in freight forwarding, 3PL, and supply chain management at DahNAY - a fast-growing global logistics company across multiple domains.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Join DahNAY - Logistics, Freight & Supply Chain Careers",
    description:
      "Build your career in freight forwarding, 3PL, and supply chain management at DahNAY - a fast-growing global logistics company across multiple domains.",
    images: [{ url: "/images/banners/banner-desktop-careers.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
    title: "Join DahNAY - Logistics, Freight & Supply Chain Careers",
    description:
      "Build your career in freight forwarding, 3PL, and supply chain management at DahNAY - a fast-growing global logistics company across multiple domains.",
    images: ["/images/banners/banner-desktop-careers.png"],
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

const trail = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
];

const careersSchemas = [
  breadcrumbList(trail),
  webPageSchema({
    name: "Careers at DahNAY",
    description: metadata.description,
    path: "/careers",
  }),
  ...JOBS.map(jobPostingSchema),
];

export default function CareersPage() {
  return (
    <div className="page page--careers">
      <JsonLd data={careersSchemas} />
      <Banner
        title="Careers"
        desktopImage="/images/banners/banner-desktop-careers.png"
      />
      <Breadcrumb trail={trail} />

      {/* Great Place to Work strip */}
      <div className="gptw-strip">
        <Image
          src="/images/careers/great-place-to-work.png"
          alt="We are Great Place To Work® Certified™ 2024–2026"
          width={1120}
          height={230}
          className="gptw-strip__image"
        />
      </div>

      {/* Culture section */}
      <section className="career-culture container">
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

      {/* Job listings when there are openings, else show the apply form */}
      {JOBS.length > 0 ? (
        <CareerJobsSection />
      ) : (
        <div className="container">
          <CareerApplyForm />
        </div>
      )}

    </div>
  );
}
