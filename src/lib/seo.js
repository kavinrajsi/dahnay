const SITE_NAME = "DahNAY";
const SITE_TWITTER = "@dahnay";

const DEFAULT_OG_IMAGE = {
  url: "/images/banners/banner-desktop-about-us.png",
  width: 1200,
  height: 630,
  alt: "DahNAY — Global Logistics Solutions",
};

function normalizeImage(image) {
  if (!image) return DEFAULT_OG_IMAGE;
  if (typeof image === "string") return { url: image, width: 1200, height: 630 };
  return { width: 1200, height: 630, ...image };
}

export function buildPageMetadata({
  title,
  description,
  canonical,
  image,
  ogTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}) {
  const ogImage = normalizeImage(image);
  const resolvedOgTitle = ogTitle ?? title;

  const openGraph = {
    siteName: SITE_NAME,
    type,
    title: resolvedOgTitle,
    description,
    images: [ogImage],
  };
  if (publishedTime) openGraph.publishedTime = publishedTime;
  if (modifiedTime) openGraph.modifiedTime = modifiedTime;
  if (authors) openGraph.authors = authors;

  return {
    title: title ? { absolute: title } : undefined,
    description,
    alternates: { canonical },
    openGraph,
    twitter: {
      card: "summary_large_image",
      site: SITE_TWITTER,
      title: resolvedOgTitle,
      description,
      images: [ogImage.url],
    },
  };
}
