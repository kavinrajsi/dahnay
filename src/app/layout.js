import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export const metadata = {
  title: "DahNAY - Global Logistics Solutions",
  description:
    "Industry-specific efficiency with our powerful, unified freight tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={avenir.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
