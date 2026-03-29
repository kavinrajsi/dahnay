import SectionHeader from "./SectionHeader";
import IconCard from "../ui/IconCard";

export default function WhyDahnay({
  tag,
  title,
  titleAccent,
  content,
  items = [],
}) {
  return (
    <section className="why-dahnay">
      <div className="container">
        <SectionHeader
          tag={tag}
          title={title}
          titleAccent={titleAccent}
          content={content}
        />
        <div className="why-dahnay__grid">
          {items.map((item, index) => (
            <IconCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
