import Banner from "@/components/sections/Banner";
import SectionHeader from "@/components/sections/SectionHeader";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import CaseStudy from "@/components/sections/CaseStudy";
import RelatedBlogs from "@/components/sections/RelatedBlogs";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import industryData from "@/data/industries/index.json";
import {
  ContinuityIcon,
  MaterialIntegrityIcon,
  HighVolumeIcon,
  MultimodalIcon,
} from "@/components/icons/WhyDahnayIcons";

const iconMap = { ContinuityIcon, MaterialIntegrityIcon, HighVolumeIcon, MultimodalIcon };

export default function IndustryPage({ slug }) {
  const { shared } = industryData;
  const data = industryData[slug];

  const whyItems = shared.whyDahnay.items.map((item) => {
    const Icon = iconMap[item.icon];
    return { ...item, icon: <Icon /> };
  });

  return (
    <div className="page page--industry">
      <Banner {...data.banner} />

      <section className="container industry-overview">
        <div className="industry-overview__container">
          <SectionHeader
            tag={data.overview.tag}
            title={data.overview.title}
            content={data.overview.content}
          />
          <a href="/contact" className="button">Talk to us</a>
        </div>
      </section>

      <Expertise
        tag={shared.expertise.tag}
        title={shared.expertise.title}
        content={data.expertise.content}
        items={data.expertise.items}
        layout="grid"
      />

      <WhyDahnay
        title={shared.whyDahnay.title}
        items={whyItems}
      />

      <CaseStudy />

      <IndustriesSlider currentSlug={slug} />

      <RelatedBlogs />

      <FAQSection
        tag={shared.faq.tag}
        title={shared.faq.title}
        titleAccent={shared.faq.titleAccent}
        content={shared.faq.content}
        items={data.faq.items}
      />

      <ContactFormSection />
    </div>
  );
}
