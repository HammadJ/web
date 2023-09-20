import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Home - Append Bootstrap Template</title>

          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Fonts */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="assets/css/main.css" rel="stylesheet" />
        </Head>
        <body className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
          <Main />
          <NextScript />

          <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer />
          <script src="assets/vendor/glightbox/js/glightbox.min.js" defer />
          <script src="assets/vendor/purecounter/purecounter_vanilla.js" defer />
          <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" defer />
          <script src="assets/vendor/swiper/swiper-bundle.min.js" defer />
          <script src="assets/vendor/aos/aos.js" defer />
          <script src="assets/vendor/php-email-form/validate.js" defer />

          <script src="assets/js/main.js" defer />
        </body>
      </Html>
    );
  }
}
