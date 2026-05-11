import Banner from "@/components/sections/Banner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Overview from "@/components/sections/Overview";
import ServiceExpertise from "@/components/sections/ServiceExpertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema, serviceSchema } from "@/lib/schema";
import serviceData from "@/data/services/index.json";

export default function ServicePage({ slug }) {
  const data = serviceData[slug];

  const path = `/service/${slug}`;
  const description = Array.isArray(data.overview?.descriptions)
    ? data.overview.descriptions.join(" ")
    : data.overview?.content;
  const trail = [
    { name: "Home", path: "/" },
    { name: data.banner.title, path },
  ];
  const schemas = [
    breadcrumbList(trail),
    serviceSchema({
      name: data.banner.title,
      description,
      image: data.banner.desktopImage,
      path,
      serviceType: data.banner.title,
    }),
    faqSchema(data.faq?.items),
  ];

  return (
    <div className="page page--service">
      <JsonLd data={schemas} />
      <Banner {...data.banner} />
      <Breadcrumb trail={trail} />
      <Overview {...data.overview} />
      <ServiceExpertise
        {...data.expertise}
        items={data.expertiseItems}
      />
      <WhyDahnay
        title={data.whyDahnay.title}
        items={data.whyDahnay.items}
      />
      {data.certifications && <Certifications {...data.certifications} />}
      <IndustriesSlider />
      <FAQSection {...data.faq} />
      <GrowForm />
    </div>
  );
}
