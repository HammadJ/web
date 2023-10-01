import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="assets/img/favicon.webp" rel="icon" />
        </Head>
        <body className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
