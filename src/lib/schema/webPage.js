import { absoluteUrl, siteUrl } from "./helpers";

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
  dateModified,
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    ...(description && { description }),
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteUrl()}/#website` },
    ...(dateModified && { dateModified }),
  };
}
