import { SearchContryEngineProvider } from '@/context/SearchCountryEngineProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <SearchContryEngineProvider>
 
  <Component {...pageProps} />
  </SearchContryEngineProvider>
  )
}
