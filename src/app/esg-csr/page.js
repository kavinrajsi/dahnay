// Figma: node-id=710-7471
import Banner from "@/components/sections/Banner";
import CenteredIntro from "@/components/sections/CenteredIntro";
import ContentBlock from "@/components/sections/ContentBlock";
import TrustCTA from "@/components/sections/TrustCTA";

export const metadata = {
  title: "ESG & CSR",
  description:
    "DahNAY's commitment to sustainability — our environmental, social, and governance initiatives for a responsible logistics future.",
  openGraph: {
    title: "ESG & CSR | DahNAY",
    description:
      "DahNAY's commitment to sustainability — our environmental, social, and governance initiatives for a responsible logistics future.",
    images: [{ url: "/images/banners/banner-desktop-esg-csr.png", width: 1200, height: 630 }],
  },
};

export default function EsgCsrPage() {
  return (
    <div className="page page--esg-csr">
      <Banner
        title="ESG &amp; CSR"
        desktopImage="/images/banners/banner-desktop-esg-csr.png"
      />
      <CenteredIntro
        title="Moving forward, responsibly"
        descriptions={[
          "At DahNAY, responsibility is built into how we move, manage and grow. From improving the efficiency of our operations to supporting meaningful initiatives on the ground, we focus on creating impact through consistent, deliberate action.",
          "Because progress is about how responsibly any movement happens.",
        ]}
      />
      <ContentBlock
        title="Environmental"
        description="Our sustainability efforts focus on improving operational efficiency — optimising routes, maximising load utilisation, and reducing empty runs through network partnerships to cut fuel use. We are also introducing electric equipment like EV reach stackers to lower emissions at key handling points, while supporting renewable and alternative energy supply chains, including solar and CNG cargo."
        image="/images/esg-csr/environmental.png"
        imageAlt="EV reach stacker for sustainable logistics"
      />
      <ContentBlock
        title="Social"
        description="We believe responsible logistics extends to the people and ecosystems around us. DahNAY focuses on safe working practices, fair engagement across our workforce and partner network, and contributing meaningfully to the communities we operate in."
        image="/images/esg-csr/social.jpg"
        imageAlt="DahNAY social responsibility initiatives"
        reverse
      />
      <ContentBlock
        title="Governance"
        description="Our operations are guided by strong compliance, transparency and accountability. From documentation accuracy to adherence to global trade regulations, we maintain structured processes that ensure reliability, ethical practices and trust across stakeholders."
        image="/images/esg-csr/governance.png"
        imageAlt="Governance and compliance at DahNAY"
      />
      <TrustCTA
        title="For a Beautiful World"
        description="Partner with DahNAY for smarter logistics: transparent pricing, proactive support and solutions designed to fit your growth."
        ctaText="Join us"
        ctaHref="/contact"
        image="/images/esg-csr/beautiful-world-bg.png"
        imageAlt="For a beautiful world"
      />
      <ContentBlock
        title="Supporting conservation efforts"
        description="DahNAY contributes to environmental conservation through initiatives such as supporting the safe transportation of turtle hatchlings. By assisting in their movement to safer habitats, we play a small but meaningful role in protecting fragile ecosystems."
        image="/images/esg-csr/conservation.png"
        imageAlt="Conservation efforts by DahNAY"
        reverse
      />
    </div>
  );
}
