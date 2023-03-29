import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Meeting Moods</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dannyismc" />
        <meta property="og:site_name" content="Meeting Moods" />
        <meta property="og:title" content="Meeting Moods" />
        <meta
          name="description"
          content="Bring cheer and delight to your next meeting."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/ePSaabwRsGREDi7AWcd9"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
