import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function CaseStudy({ title, content, link }) {
  return (
    <section className="container case-study">
      <div className="case-study__container">
        <div>
          <SectionHeader
            tag="CASE STUDY"
            title={title}
            content={content}
          />
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="button case-study__link">
              Read more
            </a>
          )}
        </div>

        <div className="case-study__imageWrapper">
          <Image
            src="/images/case-study/case-study.png"
            alt="Case Study"
            width={550}
            height={400}
            sizes="(min-width: 992px) 550px, 100vw"
            className="case-study__image"
          />
        </div>
      </div>
    </section>
  );
}
