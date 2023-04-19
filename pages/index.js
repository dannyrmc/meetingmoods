//Home page for Meeting Moods
//Created by Daniel McNamara | 2023

import styles from "../styles/Home.module.css";
import GoatButton from "../components/button-goat-scream";
import PartyButton from "../components/button-party-yay";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1
        className={`font-sans font-bold	text-gray-900 text-[32px] leading-[110%] tracking-[-0.01em] text-center select-none antialiased`}
      >
        <span className="bg-emerald-200">Cheer</span>
        {" & "}
        <span className="bg-amber-200">Delight</span>
        <br />
        for your next meeting
      </h1>

      <div className={styles.grid}>
        <PartyButton />
        <GoatButton />
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
