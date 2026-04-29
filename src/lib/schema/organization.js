import { COMPANY } from "./company";
import { absoluteUrl, siteUrl } from "./helpers";

function postalAddress(office) {
  return {
    "@type": "PostalAddress",
    streetAddress: office.address,
    addressLocality: office.city.replace(/\s*\(HQ\)\s*$/, ""),
    addressCountry: office.country,
  };
}

// Site-wide Organization schema. Pass `offices` to also emit `location[]` and
// per-office contactPoint entries — typically used on the contact page.
export function organizationSchema({ offices = [] } = {}) {
  const hq = offices.find((o) => /\(HQ\)/.test(o.city));
  const contactPoints = offices
    .filter((o) => o.phone || o.email)
    .map((o) => ({
      "@type": "ContactPoint",
      contactType: /\(HQ\)/.test(o.city) ? "headquarters" : "customer service",
      areaServed: o.country,
      ...(o.phone && { telephone: o.phone }),
      ...(o.email && { email: o.email }),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl()}/#organization`,
    name: COMPANY.brandName,
    legalName: COMPANY.legalName,
    url: siteUrl(),
    logo: absoluteUrl(COMPANY.logoPath),
    description: COMPANY.description,
    ...(COMPANY.foundingYear && { foundingDate: String(COMPANY.foundingYear) }),
    ...(COMPANY.founder && {
      founder: { "@type": "Person", name: COMPANY.founder },
    }),
    sameAs: COMPANY.social,
    ...(hq && { address: postalAddress(hq) }),
    ...(contactPoints.length && { contactPoint: contactPoints }),
    ...(offices.length && {
      location: offices.map((o) => ({
        "@type": "Place",
        name: o.city,
        address: postalAddress(o),
      })),
    }),
  };
}
