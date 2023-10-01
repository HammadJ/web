import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <div id="bbody" className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
                <Header />
                {children}
                <Footer />
            </div>

            <script src="assets/vendor/purecounter/purecounter_vanilla.js" defer />
            <script src="assets/vendor/aos/aos.js" defer />
            <script src="assets/js/main.js" defer />

        </>
    )
}