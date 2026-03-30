import Banner from "@/components/sections/Banner";
import Overview from "@/components/sections/Overview";
import ServiceExpertise from "@/components/sections/ServiceExpertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";
import serviceData from "@/data/services/index.json";

export default function ServicePage({ slug }) {
  const data = serviceData[slug];

  return (
    <div className="page page--service">
      <Banner {...data.banner} />
      <Overview {...data.overview} />
      <ServiceExpertise
        {...data.expertise}
        items={data.expertiseItems}
      />
      <WhyDahnay
        title={data.whyDahnay.title}
        content={data.whyDahnay.content}
        items={data.whyDahnay.items}
      />
      <Certifications {...data.certifications} />
      <FAQSection {...data.faq} />
      <GrowForm />
    </div>
  );
}
