import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FAQ from "../components/FAQ";
import FooterForm from "../components/FooterForm";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.dahnay.com"),
  title: {
    default: "DahNay Logistics | Global Freight Forwarding & Supply Chain Solutions",
    template: "%s | DahNay Logistics",
  },
  description:
    "DahNay Logistics offers global sea freight, air freight, project logistics, warehousing, CFS, last-mile delivery and Amazon fulfilment services across 35+ countries.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dahnay.com",
    siteName: "DahNay Logistics",
    title: "DahNay Logistics | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "DahNay Logistics offers global sea freight, air freight, project logistics, warehousing, CFS, last-mile delivery and Amazon fulfilment services across 35+ countries.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DahNay Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DahNay Logistics | Global Freight Forwarding & Supply Chain Solutions",
    description:
      "DahNay Logistics offers global sea freight, air freight, project logistics, warehousing, CFS, last-mile delivery and Amazon fulfilment services across 35+ countries.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.dahnay.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DahNay Logistics",
  url: "https://www.dahnay.com",
  logo: "https://www.dahnay.com/images/og-image.jpg",
  description:
    "Global freight forwarding and supply chain solutions provider operating across 35+ countries.",
  email: "info@dahnay.com",
  telephone: "+91-44-4856-7890",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Old No. 15, New No. 28, 3rd Floor, Rukmini Lakshmipathy Road, Egmore",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600008",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/dahnaylogistics",
    "https://www.linkedin.com/company/dahnaylogistics",
    "https://twitter.com/dahnaylogistics",
    "https://www.instagram.com/dahnaylogistics",
  ],
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "Mr. Murali Babu",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
  },
  areaServed: "Worldwide",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DahNay Logistics",
  url: "https://www.dahnay.com",
  publisher: {
    "@type": "Organization",
    name: "DahNay Logistics",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <FAQ />
        <FooterForm />
        <Footer />
      </body>
    </html>
  );
}
