import HeadData from "./head-data";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';

const gilroy = localFont({
  src: "../public/fonts/Gilroy-Bold.woff2",
  variable: "--font-gilroy-bold",
  weight: "700",
  display: "swap",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

//Poppins

export default function Layout({ children }) {
  return (
    <>
      <HeadData />
      <main className={`${styles.main} ${gilroy.variable} ${inter.variable}`}>{children}</main>
    </>
  );
}
