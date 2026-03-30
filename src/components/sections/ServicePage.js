import Banner from "@/components/sections/Banner";
import Overview from "@/components/sections/Overview";
import ServiceExpertise from "@/components/sections/ServiceExpertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";
import serviceData from "@/data/services/index.json";
import {
  GlobalNetworkIcon,
  RegulatoryExpertiseIcon,
  RealTimeVisibilityIcon,
  DedicatedSupportIcon,
} from "@/components/icons/ServiceIcons";

const iconMap = {
  GlobalNetworkIcon,
  RegulatoryExpertiseIcon,
  RealTimeVisibilityIcon,
  DedicatedSupportIcon,
};

export default function ServicePage({ slug }) {
  const { shared } = serviceData;
  const data = serviceData[slug];

  const whyItems = shared.whyDahnay.items.map((item) => {
    const Icon = iconMap[item.icon];
    return { ...item, icon: <Icon /> };
  });

  return (
    <div className="page page--service">
      <Banner {...data.banner} />
      <Overview {...data.overview} />
      <ServiceExpertise
        {...shared.expertise}
        items={data.expertiseItems}
      />
      <WhyDahnay
        title={shared.whyDahnay.title}
        content={shared.whyDahnay.content}
        items={whyItems}
      />
      <Certifications {...shared.certifications} />
      <FAQSection {...shared.faq} />
      <GrowForm />
    </div>
  );
}
