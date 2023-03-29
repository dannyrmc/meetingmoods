import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Meeting Moods</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Bring cheer and delight to your next meeting."
        />

        {/* Open Graph */}
        <meta property="og:site_name" content="Meeting Moods" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmoods.app/" />
        <meta property="og:title" content="Meeting Moods" />
        <meta
          property="og:description"
          content="Bring cheer and delight to your next meeting."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/8pBln6UhTXWeT8XuUaRV"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://meetingmoods.app/" />
        <meta property="twitter:title" content="Meeting Moods" />
        <meta
          property="twitter:description"
          content="Bring cheer and delight to your next meeting."
        />
        <meta name="twitter:site" content="@dannyismc" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
