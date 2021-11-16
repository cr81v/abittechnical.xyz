import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
