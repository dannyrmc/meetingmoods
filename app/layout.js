import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { siteConfig } from "../config/site";
import { Analytics } from "config/analytics";

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
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Meeting", "Standup", "Team Culture", "Brainstorm", "Fun"],
  authors: [
    {
      name: "Danny Mc",
      url: "https://dannymc.dev",
    },
  ],
  creator: "Danny Mc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dannyismc",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${gilroy.variable} ${poppins.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
