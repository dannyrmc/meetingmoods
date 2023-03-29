import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Meeting Moods</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:title" content="Meeting Moods" />
        <meta
          name="description"
          content="Bring cheer and delight to your next meeting."
        />
        <meta property="og:image" content="../public/images/og-image.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
