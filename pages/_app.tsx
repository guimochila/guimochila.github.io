import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../layouts/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I'm passionate about computers. I started as Sysadmin, Security and now I finally found my path in this world which is programming. I enjoy creating and fixing applications in Javascript whether is frontend or backend. I love to work in a fast pace environment. A versatile engineer with interests in Software Engineering. Adaptable and self motivated learner. Interested in new programming technologies, and continuous self improvement."
        />
        <meta
          name="google-site-verification"
          content="w0ueRxB64qnLVpUuVQLAHhDoXBV0a_34Uamai8hqXHc"
        />
        <meta name="author" content="Guilherme Scaldelai" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="static/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
