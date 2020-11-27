import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '@/styles/index.css'

NProgress.configure({ showSpinner: false })

Router.events.on('routerChangeStart', () => NProgress.start())
Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
