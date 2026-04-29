import { absoluteUrl, siteUrl } from "./helpers";
import { COMPANY } from "./company";

export function jobPostingSchema(job) {
  if (!job?.title) return null;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    ...(job.postedAt && { datePosted: job.postedAt }),
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: COMPANY.brandName,
      sameAs: siteUrl(),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Chennai",
        addressCountry: job.country || "India",
      },
    },
    ...(job.slug && { url: absoluteUrl(`/careers/${job.slug}`) }),
  };
}
