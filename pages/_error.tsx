import { NextPage } from "next"
import Layout from "@/components/Layout"

interface Props {
  statusCode?: number
  websiteUrl?: string
}

const Error: NextPage<Props> = ({ statusCode, websiteUrl }: Props) => {
  const mail = () => {
    const address = "a.boehm@hsv-neuwied.de"
    const error = `${statusCode} - ${statusCode === 404 ? "Page not found" : "undefined"}`
    return encodeURI(`mailto:${address}?subject=Error on "${websiteUrl}": ${error}`)
  }

  return (
    <Layout title="Oops … da ist ein Fehler aufgetreten :( &mdash; HSV Neuwied">
      <div className="container py-20 text-2xl text-center">
        <h1 className="text-5xl">
          Oops …<br />
          da ist ein Fehler aufgetreten :( <br />
          Das tut uns leid!
        </h1>
        <p className="mt-10 text-2xl">
          Gehe zu der{" "}
          <a className="text-red-600 hover:text-red-800 active:text-red-800" href="/">
            ganz sicher laufenden Startseite
          </a>
          !
        </p>
        <p className="mt-10 text-2xl">
          Informiere unseren{" "}
          <a className="text-hsv-base hover:text-hsv-light active:text-hsv-light" href={mail()}>
            Administrator
          </a>{" "}
          &uuml;ber das Problem, <br />
          sollte diese Seite wiederholt angezeigt werden.
        </p>
        <p className="mt-10 text-2xl">
          Die Fehlermeldung f&uuml;r mehr Informationen ist: <br />
          <code className="text-gray-600">
            {statusCode}
            {statusCode === 404 && " - Seite nicht gefunden"}
          </code>
        </p>
      </div>
    </Layout>
  )
}

Error.getInitialProps = async ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const websiteUrl = req
    ? req.headers.host + "" + req.url
    : window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "")

  return { statusCode, websiteUrl }
}

export default Error
