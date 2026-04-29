import Banner from "@/components/sections/Banner";
import Overview from "@/components/sections/Overview";
import ServiceExpertise from "@/components/sections/ServiceExpertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";
import IndustriesSlider from "@/components/sections/IndustriesSlider";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { LAST_REVIEWED_DISPLAY, LAST_REVIEWED_ISO } from "@/lib/site-meta";
import serviceData from "@/data/services/index.json";

export default function ServicePage({ slug }) {
  const data = serviceData[slug];

  const path = `/service/${slug}`;
  const description = Array.isArray(data.overview?.descriptions)
    ? data.overview.descriptions.join(" ")
    : data.overview?.content;
  const schemas = [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Services", path: "/" },
      { name: data.banner.title, path },
    ]),
    serviceSchema({
      name: data.banner.title,
      description,
      image: data.banner.desktopImage,
      path,
      serviceType: data.banner.title,
    }),
    webPageSchema({
      name: data.banner.title,
      description,
      path,
      dateModified: LAST_REVIEWED_ISO,
    }),
    faqSchema(data.faq?.items),
  ];

  return (
    <div className="page page--service">
      <JsonLd data={schemas} />
      <Banner {...data.banner} />
      <p className="service-page__last-reviewed container">
        Last reviewed:{" "}
        <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_DISPLAY}</time>
      </p>
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
