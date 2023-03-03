import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
