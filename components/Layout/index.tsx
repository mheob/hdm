import { ReactNode } from "react"
import Head from "next/head"

import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

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
  return (
    <div className="antialiased">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/ci/hdm-logo.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap"
        />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
