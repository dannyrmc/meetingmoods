import HeadData from "./head-data";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
import { Poppins } from 'next/font/google';

const gilroy = localFont({
  src: "../public/fonts/Gilroy-Bold.woff2",
  variable: "--font-gilroy-bold",
  weight: "700",
  display: "swap",
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: "700",
  display: 'swap'
});

//Poppins

export default function Layout({ children }) {
  return (
    <>
      <HeadData />
      <main className={`${styles.main} ${gilroy.variable} ${poppins.variable}`}>{children}</main>
    </>
  );
}
