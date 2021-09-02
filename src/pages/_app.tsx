import App from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { NextComponentType, NextPageContext } from 'next'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { StylesProvider as MaterialStylesProvider } from '@material-ui/styles'
import NProgress from 'nprogress'
import Router from 'next/router'

import theme from '../core/theme'
import GlobalStyle from '../core/GlobalStyle'
import 'nprogress/nprogress.css'

import '../../styles/globals.css'

const AppWithContext = (props: {
  Component: NextComponentType<NextPageContext, any>
  pageProps: any
}) => {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <MaterialThemeProvider theme={theme.mui}>
          <MaterialStylesProvider injectFirst>
            <StyledThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </StyledThemeProvider>
          </MaterialStylesProvider>
        </MaterialThemeProvider>
    </>
  )
}

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export class MyApp extends App {
  render() {
    return <AppWithContext {...this.props} />
  }
}

export default MyApp
