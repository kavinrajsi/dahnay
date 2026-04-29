import { COMPANY } from "./company";
import { siteUrl } from "./helpers";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl()}/#website`,
    url: siteUrl(),
    name: COMPANY.brandName,
    description: COMPANY.description,
    publisher: { "@id": `${siteUrl()}/#organization` },
  };
}
