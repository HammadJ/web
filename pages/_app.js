import '../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../public/assets/vendor/glightbox/css/glightbox.min.css'
import '../public/assets/vendor/swiper/swiper-bundle.min.css'
import '../public/assets/vendor/aos/aos.css'
import '../public/assets/css/main.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
