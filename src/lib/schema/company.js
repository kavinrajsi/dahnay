// Single source of truth for company identity used across all schemas.
// Edit values here — schema files read from this constant.
export const COMPANY = {
  // TODO: confirm registered legal entity name (e.g. "DahNAY Logistics Private Limited")
  legalName: "DahNAY Logistics Private Limited",
  brandName: "DahNAY Logistics",
  // TODO: set founding year (number, e.g. 1998). Until set, foundingDate is omitted.
  foundingYear: null,
  founder: "Mr. Murali Babu",
  logoPath: "/images/logo.svg",
  description:
    "Industry-specific logistics solutions powered by expertise, technology, and a global network. Air freight, sea freight, customs clearance, and more.",
  email: "info@dahnay.com",
  social: [
    "https://www.facebook.com/DahnayLogisticsofficial/",
    "https://www.linkedin.com/company/dahnaylogistics/",
    "https://www.instagram.com/dahnaylogisticsofficial/",
    "https://x.com/dahnaylogistics/"
  ],
  primaryAddress: {
    streetAddress: "K.G.N Towers, Ethiraj Salai, Egmore",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600008",
    addressCountry: "IN",
  },
  primaryContact: {
    telephone: "04440422888",
    contactType: "customer service",
    availableLanguage: ["English", "Tamil"],
  },
};
