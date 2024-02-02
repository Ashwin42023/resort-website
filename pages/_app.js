// import '@/styles/globals.css'
import '@/styles/style.css'

export default function App({ Component, pageProps }) {
  const getlayout = Component.getLayout || ((page) => page);
  return getlayout (<Component {...pageProps} />);
}
