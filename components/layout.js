import HeadData from "./head-data";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <HeadData />
      <main className={styles.main}>{children}</main>
    </>
  );
}
