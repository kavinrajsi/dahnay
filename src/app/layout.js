import localFont from "next/font/local";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsentBanner from "@/components/layout/ConsentBanner";
import UtmCapture from "@/components/UtmCapture";
import "./globals.scss";

const avenir = localFont({
  src: [
    { path: "../fonts/Avenir-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Avenir-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Avenir-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Avenir-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Avenir-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-avenir",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | DahNAY",
    default: "DahNAY — Global Logistics Solutions",
  },
  description:
    "Industry-specific logistics solutions powered by expertise, technology, and a global network. Air freight, sea freight, customs clearance, and more.",
  openGraph: {
    siteName: "DahNAY",
    type: "website",
    images: [
      {
        url: "/images/banners/banner-desktop-about-us.png",
        width: 1200,
        height: 630,
        alt: "DahNAY — Global Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dahnay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const isOnVercel = Boolean(process.env.VERCEL);
const shouldLoadGTM = Boolean(gtmId) && !isOnVercel;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={avenir.variable}>
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          });`}
      </Script>
      {shouldLoadGTM && <GoogleTagManager gtmId={gtmId} />}
      <body>
        <UtmCapture />
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
