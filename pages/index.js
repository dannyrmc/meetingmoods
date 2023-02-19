//Home page for Meeting Moods
//Created by Daniel McNamara | 2023

import Head from "next/head";
import styles from "../styles/Home.module.css";

import GoatButton from "../components/button-goat-scream";
import PartyButton from "../components/button-party-yay";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meeting Moods</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Bring cheer and delight to your next meeting."
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="bg-emerald-200">Cheer</span> &{" "}
          <span className="bg-amber-200">Delight</span>
          <br />
          for your next meeting
        </h1>

        <div className={styles.grid}>
          <PartyButton />
          <GoatButton />
        </div>
      </main>

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
