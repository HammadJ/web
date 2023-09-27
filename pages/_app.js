// import '../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/styles.pure.css'
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
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
