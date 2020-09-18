import { ReactNode, useEffect } from "react"
import Head from "next/head"

import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

import { initFocusRingOnlyOnTab } from "@/utils/accessibility"

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
  description = "Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in Zukunft abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.",
}: Props) => {
  useEffect(() => {
    initFocusRingOnlyOnTab()
  }, [])

  return (
    <div className="antialiased">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="shortcut icon" href="/ci/hdm-bg.svg" type="image/svg+xml" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
