import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function CaseStudy() {
  return (
    <section className="container case-study">
      <div className="case-study__container">
        <SectionHeader
          tag="CASE STUDY"
          title="Lorem ipsum dolor sit amet consectetur."
          content="Lorem ipsum dolor sit amet consectetur. Enim et pulvinar condimentum vel quis tincidunt lorem at tincidunt. Ipsum egestas at ut in lectus nisl elementum. Etiam tortor nisl tellus quisque amet iaculis tristique quis. Viverra nisl non purus quis ut in in viverra. In morbi viverra tempus id. Pellentesque id congue leo viverra faucibus. Id risus pulvinar hendrerit curabitur metus nibh gravida adipiscing. Fringilla rhoncus tempus netus egestas id."
        />

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
