import Link from "next/link";

export const metadata = { title: "All Pages - DahNAY" };

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "ESG & CSR", href: "/esg-csr" },
  { label: "Industries", href: "/industries" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "POSH Policy", href: "/posh-policy" },
  { label: "Whistleblower Policy", href: "/whistleblower-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const solutions = [
  { label: "DahNAY Logistics", href: "/solutions/logistics" },
  { label: "DahNAY Lines", href: "/solutions/lines" },
  { label: "DahNAY Ports & Infra", href: "/solutions/ports-infra" },
];

const services = [
  { label: "Air Freight", href: "/service/air-freight" },
  { label: "Sea Freight", href: "/service/sea-freight" },
  { label: "Road Transportation", href: "/service/road-transportation" },
  { label: "Project Logistics", href: "/service/project-logistics" },
  { label: "Customs Clearance", href: "/service/customs-clearance" },
  { label: "Domestic Trucking", href: "/service/domestic-trucking" },
  { label: "Reverse Logistics", href: "/service/reverse-logistics" },
  { label: "Time Critical Delivery", href: "/service/time-critical-delivery" },
  { label: "Last Mile Delivery", href: "/service/last-mile-delivery" },
  { label: "E-commerce Fulfilment", href: "/service/ecommerce-fulfilment" },
];

const industries = [
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Renewables", href: "/industries/renewables" },
  { label: "Machinery", href: "/industries/machinery" },
  { label: "Retail & Apparel", href: "/industries/retail-apparel" },
  { label: "Natural Rubber", href: "/industries/natural-rubber" },
  { label: "White Goods", href: "/industries/white-goods" },
  { label: "Energy, Oil & Gas", href: "/industries/energy-oil-gas" },
  { label: "FMCG", href: "/industries/fmcg" },
  { label: "Construction Materials", href: "/industries/construction-materials" },
  { label: "Paper & Pulp", href: "/industries/paper-pulp" },
];

function LinkGroup({ title, links }) {
  return (
    <div className="test-page__group">
      <h2 className="test-page__group-title">{title}</h2>
      <ul className="test-page__list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="test-page__link">{link.label}</Link>
            <span className="test-page__href">{link.href}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="page test-page">
      <div className="container">
        <h1 className="test-page__title">All Pages</h1>
        <LinkGroup title="Main Pages" links={pages} />
        <LinkGroup title="Solutions" links={solutions} />
        <LinkGroup title="Services" links={services} />
        <LinkGroup title="Industries" links={industries} />
      </div>
    </div>
  );
}
