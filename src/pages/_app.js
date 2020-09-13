import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/Global'
import Theme from 'styles/Theme'
import { StateProvider } from 'store'
import '../styles/FontFaces.css'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <StateProvider>
        <ThemeProvider theme={Theme.light}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StateProvider>
    )
  }
}
