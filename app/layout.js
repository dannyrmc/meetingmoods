import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { siteConfig } from "../config/site";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";

const gilroy = localFont({
  src: "../public/fonts/Gilroy-Bold.woff2",
  variable: "--font-gilroy-bold",
  weight: "700",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "700",
  display: "swap",
});

export const metadata = {
  title: siteConfig.project.name,
  description: siteConfig.project.description,
  keywords: siteConfig.project.keywords,
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.portfolio,
    },
  ],
  creator: siteConfig.creator.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.project.url,
    title: siteConfig.project.name,
    description: siteConfig.project.description,
    siteName: siteConfig.project.name,
    images: [
      {
        url: siteConfig.project.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.project.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.project.name,
    description: siteConfig.project.description,
    images: [siteConfig.project.ogImage],
    creator: `@${siteConfig.creator.username}`,
  },
  icons: {
    icon: "/favicon.ico",
    icon: "/favicon_192x192.png",
    icon: "/favicon_512x512.png",
    apple: "/favicon_180x180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-amber-50" suppressHydrationWarning>
      <body
        className={`${gilroy.variable} ${poppins.variable} h-svh antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
