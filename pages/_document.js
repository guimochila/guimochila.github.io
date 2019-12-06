import Document, { Head, Main, NextScript } from 'next/document';
import GlobalStyles from '../layouts/global';

export default class extends Document {
  render() {
    return (
      <html>
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta
            name="msapplication-config"
            content="static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:300,400,900"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-125393370-1"
          ></script>
        </Head>
        <body>
          <GlobalStyles />
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-125393370-1");
    `,
            }}
          ></script>
        </body>
      </html>
    );
  }
}
