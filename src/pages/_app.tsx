import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class" >
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
