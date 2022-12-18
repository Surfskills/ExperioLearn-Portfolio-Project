import Header from './components/Header'
import Footer from './components/Footer'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </div>
 
)
}

export default MyApp