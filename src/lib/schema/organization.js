import { COMPANY } from "./company";
import { absoluteUrl, siteUrl } from "./helpers";

function postalAddress() {
  return { "@type": "PostalAddress", ...COMPANY.primaryAddress };
}

function contactPoint() {
  return { "@type": "ContactPoint", ...COMPANY.primaryContact };
}

function placeFromOffice(office) {
  return {
    "@type": "Place",
    name: office.city,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city.replace(/\s*\(HQ\)\s*$/, ""),
      addressCountry: office.country,
    },
    ...(office.phone && { telephone: office.phone }),
    ...(office.email && { email: office.email }),
  };
}

// Site-wide Organization schema. Pass `offices` to also emit `location[]`
// (typically used on the contact page for multi-office presence).
export function organizationSchema({ offices = [] } = {}) {
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
    address: postalAddress(),
    contactPoint: contactPoint(),
    ...(offices.length && { location: offices.map(placeFromOffice) }),
  };
}

// LocalBusiness for the HQ — emit on pages that represent the physical
// business (homepage, contact). Distinct @id keeps it separate from the
// global Organization entity above.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl()}/#hq`,
    name: COMPANY.brandName,
    image: absoluteUrl(COMPANY.logoPath),
    url: siteUrl(),
    telephone: COMPANY.primaryContact.telephone,
    address: postalAddress(),
    parentOrganization: { "@id": `${siteUrl()}/#organization` },
  };
}
