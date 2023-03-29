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
        <meta property="og:image" content="https://lh3.googleusercontent.com/pw/AMWts8AL_yfKNU__4DBgx79Z6oc8ULcu8ptKDIM5dFgOwgViajja8qkHIGG_lP0GKo6c2cF9U6ozOCJcdSeUmaypo2oiUDNxhlWR3j2mPjHlHTFqaLjrX6WijsNAeGm2qVdCARJlCFVuwD_4tY29hw_ex4EsPBIhn7VlXHwQb3bg6Dz8yuwckAD6F-6oar-79dAljAoJv7bqVEKbHjp0yY5Jr3IBsKKcicM-XALOLhiqaZRfJwUBgVnP1LSRTvgbcAw710VIBiq79iWegF8oBBGdIf3wXKBlvWl8YBX6LY9HDKPwn7IeVYFto-HLnrDSS3beP34oii5hNvqd1Egwes-ftNwYyQbE4203NDctnuvQa-Xpe63dpIvWH8LwYK_zEPYWO3KeQAEKG5gpp6lIzfdLrBNfxQ8zQ13Gf3hwQsEGcUloAWmYCb0Xa_84TiRqcVpb8Z3h2ddnvVRq6vFkHeN1CxgqkF7pStpt9vJozgBPjVXQVwmxnPT_dmH24fvG9yzJHDRqaEwUW6-IPUBQFeFK1kyRGX2_eEQjn7e3LpA1h44JqRGMHRqOrla5fM9rQwYU4QlPPDTWmx1CZolsZ5S_U4MvHIy3-9npQbUXkzx4J2IIuJKMYX-SYBQdt1N-uqMzdLUpLTG8xu2hOtSU6UVCsbDPoEZH9oG2KSV9773tBf0k5_sjUwmJJHt5ng1VdTtb5FebECbf_ZZrhZU2YeqlTPDCiqNJqR0Zd3vHZA8G4G84uj1q-7h4yRH-0HpwlEu6GBAP4H2PhoDzyEBPov4TWVkk8c2PgaIfWwqiefHlth-H9nd8KalB02u0TC5d7qVHTUvBxOIpJ-lKIoQunAGLMYDOgKTo6KK0frjQW54dP2BPGz4YXFhVLMsZHGq4hkrF8k7Yfsw2seG57qIdizq5fYhVPgmounr29PNCHC2oP-L9fnIx_syvbHTuRv-5ww=w1200-h630-s-no?authuser=0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
