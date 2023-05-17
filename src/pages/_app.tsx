import store from '../store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'



const getRandomText = () => {
  function getDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return days[dayIndex];
  }

  const welcome_texts = ['hold on second...', 'gettings it ready', `happy ${getDayName()}!`]
  const randomNumber = Math.floor(Math.random() * 4)
  return welcome_texts[randomNumber]
}

export default function App({ Component, pageProps }: AppProps) {
  const [text, setText] = useState('')
  useEffect(() => {
    setText(getRandomText())
  }, [])

  return (
    <ThemeProvider defaultTheme='dark' attribute="class" >
      <Provider store={store}>
        <Layout text={text}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>

  )
}
