// Figma: node-id=687-6251
import Banner from "@/components/sections/Banner";
import Overview from "@/components/sections/Overview";
import Expertise from "@/components/sections/Expertise";
import WhyDahnay from "@/components/sections/WhyDahnay";
import Certifications from "@/components/sections/Certifications";
import FAQSection from "@/components/sections/FAQSection";
import GrowForm from "@/components/sections/GrowForm";

export const metadata = { title: "Project Logistics - DahNAY" };

export default function ProjectLogisticsPage() {
  return (
    <div className="page page--service">
      <Banner
        title="Project Logistics"
        desktopImage="/images/banners/banner-desktop-project-logistics.png"
      />
      <Overview
        tag="Overview"
        title="Engineered for"
        titleAccent="complexity."
        descriptions={[
          "Oversized, heavy-lift and high-value cargo demands more than standard logistics. DahNAY delivers end-to-end project logistics with route surveys, specialised equipment and regulatory coordination.",
          "From energy infrastructure to industrial machinery, we plan and execute large-scale shipments that leave nothing to chance.",
        ]}
        image="/images/overview/project-logistics.png"
        imageAlt="Heavy cargo transport"
        ctaText="Get started"
        ctaHref="/contact"
      />
      <Expertise
        tag="Expertise"
        title="Core and value added services"
        content="From planning to delivery, our logistics experts manage every detail with precision. Your cargo moves safely, efficiently, and on time, every time."
        items={[
          { image: "/images/overview/project-logistics.png", title: "Route & Feasibility Surveys", description: "Site assessments, Road surveys, Bridge and clearance analysis, Permit requirements mapping" },
          { image: "/images/overview/sea-freight.png", title: "Heavy-Lift & Oversized Cargo", description: "Crane and rigging coordination, Specialised trailers and vessels, Multi-modal heavy transport" },
          { image: "/images/overview/customs-clearance.png", title: "Regulatory Coordination", description: "Government and port authority liaison, Customs pre-clearance, Environmental compliance documentation" },
          { image: "/images/overview/road-transportation.png", title: "On-Site Logistics Management", description: "Dedicated project managers, Milestone tracking and reporting, Risk assessment and mitigation" },
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
