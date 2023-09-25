import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <style jsx global>{`
    :root {
      --default-font: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --heading-font: "Montserrat", sans-serif;
      --nav-font: "Lato", sans-serif;
    }

    /* Global Colors */
    :root {
      --background-color: #ffffff;
      --background-color-rgb: 255, 255, 255;
      --default-color: #212529;
      --default-color-rgb: 33, 37, 41;
      --primary-color: #e84545;
      --primary-color-rgb: 232, 69, 69;
      --secondary-color: #32353a;
      --secondary-color-rgb: 50, 53, 58;
      --contrast-color: #ffffff;
      --contrast-color-rgb: 255, 255, 255;
    }

    /* Nav Menu Colors */
    :root {
      --nav-color: #3a3939;
      --nav-hover-color: #e84545;
      --nav-dropdown-color: #3a3939;
      --nav-dropdown-hover-color: #e84545;
      --nav-dropdown-background-color: #ffffff;
      --nav-mobile-background-color: #ffffff;
    }

    /* Smooth scroll */
    :root {
      scroll-behavior: smooth;
    }

    /*--------------------------------------------------------------
    # General
    --------------------------------------------------------------*/
    body {
      color: var(--default-color);
      background-color: var(--background-color);
      font-family: var(--default-font);
    }

    a {
      color: var(--primary-color);
      text-decoration: none;
      transition: 0.3s;
    }

    a:hover {
      color: rgba(var(--primary-color-rgb), 0.7);
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--secondary-color);
      font-family: var(--heading-font);
    }

    section {
      color: var(--default-color);
      background-color: var(--background-color);
      padding: 60px 0;
      overflow: clip;
    }


      `}</style>


            <div id="bbody" className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
                {/* <Preloader /> */}
                <Header />
                {/* <PortfolioDetails/> */}
                {children}
                <Footer />

                { /* Scroll Top Button */}
                <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>



            </div>

            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer />
            <script src="assets/vendor/glightbox/js/glightbox.min.js" defer />
            <script src="assets/vendor/purecounter/purecounter_vanilla.js" defer />
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" defer />
            <script src="assets/vendor/swiper/swiper-bundle.min.js" defer />
            <script src="assets/vendor/aos/aos.js" defer />
            <script src="assets/vendor/php-email-form/validate.js" defer />

            <script src="assets/js/main.js" defer />

        </>
    )
}