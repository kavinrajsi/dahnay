import SectionHeader from "./SectionHeader";
import FAQ from "../ui/FAQ";

export default function FAQSection({
  tag = "FAQs",
  title = "Frequently Asked",
  titleAccent = "Questions",
  content,
  items = [],
}) {
  return (
    <section className="faq-section">
      <div className="container faq-section__container">
        <div className="faq-section__left">
          <SectionHeader
            tag={tag}
            title={title}
            titleAccent={titleAccent}
            content={content}
          />
        </div>
        <div className="faq-section__right">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}
