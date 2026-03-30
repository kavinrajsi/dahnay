import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    title: "Automotive",
    description: "Driving global supply chains with reliable, time-sensitive automotive logistics.",
    image: "/images/industries/cards/automotive.png",
    href: "/industries/automotive",
  },
  {
    title: "Renewables",
    description: "Ensuring safe and secure transport of solar panels, inverters and renewable equipment.",
    image: "/images/industries/cards/renewables.png",
    href: "/industries/renewables",
  },
  {
    title: "Machinery",
    description: "Precision logistics for heavy machinery, oversized cargo and industrial equipment.",
    image: "/images/industries/cards/machinery.png",
    href: "/industries/machinery",
  },
  {
    title: "Retail & Apparel",
    description: "Powering fashion supply chains with time-sensitive, season-aligned logistics.",
    image: "/images/industries/cards/retail-apparel.png",
    href: "/industries/retail-apparel",
  },
  {
    title: "Natural Rubber",
    description: "Efficient plantation-to-port logistics for bulk rubber commodity export.",
    image: "/images/industries/cards/natural-rubber.png",
    href: "/industries/natural-rubber",
  },
  {
    title: "White Goods",
    description: "Protecting high-cubic appliance cargo from factory to distribution network.",
    image: "/images/industries/cards/white-goods.png",
    href: "/industries/white-goods",
  },
  {
    title: "Energy, Oil & Gas",
    description: "Handling energy, oil and gas cargo with the expertise and precision it demands.",
    image: "/images/industries/cards/energy-oil-gas.png",
    href: "/industries/energy-oil-gas",
  },
  {
    title: "Food & Agro",
    description: "Ensuring fresh and secure transport of food and agricultural products with efficiency.",
    image: "/images/industries/cards/food-agro.png",
    href: "/industries",
  },
  {
    title: "FMCG",
    description: "High-speed FMCG logistics built to meet demand and maintain consistent flow.",
    image: "/images/industries/cards/fmcg.png",
    href: "/industries/fmcg",
  },
  {
    title: "Paper & Pulp",
    description: "Keeping paper and pulp moving smoothly with reliable handling and consistent delivery.",
    image: "/images/industries/cards/paper-pulp.png",
    href: "/industries/paper-pulp",
  },
  {
    title: "Construction Materials",
    description: "Efficient movement of construction materials to keep projects on schedule and on track.",
    image: "/images/industries/cards/construction-materials.png",
    href: "/industries/construction-materials",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="industries-grid">
      <div className="container">
        <div className="industries-grid__grid">
          {industries.map((industry) => (
            <Link key={industry.href + industry.title} href={industry.href} className="industry-card">
              <div className="industry-card__image-wrapper">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={265}
                  height={180}
                  className="industry-card__image"
                />
              </div>
              <div className="industry-card__content">
                <div className="industry-card__text">
                  <p className="industry-card__title">{industry.title}</p>
                  <p className="industry-card__description">{industry.description}</p>
                </div>
                <p className="industry-card__learn-more">Learn more</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
