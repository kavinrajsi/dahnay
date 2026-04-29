import { absoluteUrl, siteUrl } from "./helpers";

// Generic Service builder — covers /service/[slug], /industries/[slug],
// and /solutions/* pages. Provider links to the site-wide Organization @id.
export function serviceSchema({
  name,
  description,
  image,
  path,
  serviceType,
  areaServed = "Worldwide",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    ...(image && { image: absoluteUrl(image) }),
    serviceType: serviceType || name,
    areaServed,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl()}/#organization` },
  };
}
