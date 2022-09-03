import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Meta from '../blocks/meta'
function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <div>
    <Meta />
          <Component {...pageProps} />
        <div>
        
        
        </div>
      </div>
    </>
  )
} 

export default MyApp
