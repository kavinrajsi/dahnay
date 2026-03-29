// Figma: node-id=680-9117
import Banner from "@/components/sections/Banner";
import Overview from "@/components/sections/Overview";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";

export const metadata = { title: "Road Transportation - DahNAY" };

export default function RoadTransportationPage() {
  return (
    <div className="page page--service">
      <Banner
        title="Road Transportation"
        desktopImage="/images/banners/banner-desktop-road-transportation.png"
      />
      <Overview
        tag="Overview"
        title="Reliable routes."
        titleAccent="Real results."
        descriptions={[
          "Road freight is the backbone of regional trade. DahNAY manages cross-border and domestic road transportation with fleet reliability, route optimisation and full shipment visibility.",
          "From full truckloads to less-than-truckload consignments, we keep your supply chain moving on schedule across every terrain and corridor.",
        ]}
        image="/images/overview/road-transportation.png"
        imageAlt="Fleet of trucks on highway"
        ctaText="Get started"
        ctaHref="/contact"
      />
      <Expertise
        tag="Expertise"
        title="Core and value added services"
        content="From planning to delivery, our logistics experts manage every detail with precision. Your cargo moves safely, efficiently, and on time, every time."
        items={[
          { image: "/images/overview/road-transportation.png", title: "Full Truckload (FTL)", description: "Dedicated fleet for large shipments, Direct point-to-point delivery, Real-time GPS tracking" },
          { image: "/images/overview/domestic-trucking.png", title: "Less Than Truckload (LTL)", description: "Cost-effective shared capacity, Scheduled consolidation runs, Multi-drop distribution" },
          { image: "/images/overview/project-logistics.png", title: "Cross-Border Transport", description: "Multi-country corridor management, Customs documentation support, Transit permit coordination" },
          { image: "/images/overview/sea-freight.png", title: "Specialised Vehicles", description: "Temperature-controlled transport, Flatbed and low-loader for heavy cargo, ADR-compliant hazardous goods vehicles" },
        ]}
      />
      <WhyDahnay
        title="Why DahNAY"
        content="We combine deep industry knowledge with operational discipline to deliver logistics you can rely on."
        items={[
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FFF0EE" />
                <path d="M24 14L34 20V32L24 38L14 32V20L24 14Z" stroke="#EF4230" strokeWidth="2" />
              </svg>
            ),
            title: "Global Network",
            content: "Strategic partnerships across major trade corridors worldwide.",
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FFF0EE" />
                <path d="M16 24L22 30L34 18" stroke="#EF4230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            title: "Regulatory Expertise",
            content: "Deep compliance knowledge across jurisdictions and cargo types.",
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FFF0EE" />
                <path d="M24 16V24L30 28" stroke="#EF4230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="10" stroke="#EF4230" strokeWidth="2" />
              </svg>
            ),
            title: "Real-Time Visibility",
            content: "End-to-end tracking and milestone monitoring for every shipment.",
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FFF0EE" />
                <path d="M18 30L24 18L30 30H18Z" stroke="#EF4230" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            ),
            title: "Dedicated Support",
            content: "Single point of contact with proactive communication throughout.",
          },
        ]}
      />
      <Certifications
        tag="Certifications"
        title="Certified for"
        titleAccent="excellence."
        descriptions={[
          "DahNAY holds internationally recognised certifications that reflect our commitment to quality, safety and operational integrity across every service we deliver.",
        ]}
        image="/images/overview/sea-freight.png"
        imageAlt="DahNAY certifications"
      />
      <FAQSection
        tag="FAQ's"
        title="Frequently Asked"
        titleAccent="Questions"
        content="Find answers to common questions about our logistics services and how we can support your supply chain."
        items={[
          { question: "What regions do you operate in?", answer: "DahNAY operates across major international trade corridors spanning Asia, the Middle East, Africa, Europe and the Americas." },
          { question: "How do I get a quote?", answer: "Contact our team through the website or email us directly. We provide tailored quotes based on your cargo type, volume and destination." },
          { question: "Do you handle customs clearance?", answer: "Yes, we provide end-to-end customs clearance services including documentation, tariff classification and compliance management." },
          { question: "What types of cargo do you handle?", answer: "We handle everything from standard containerised cargo to oversized, heavy-lift, hazardous and temperature-controlled shipments." },
        ]}
      />
      <GrowForm />
    </div>
  );
}
