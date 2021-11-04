import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store, StoreContext } from '../stores/store'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  ) 
}
export default MyApp
