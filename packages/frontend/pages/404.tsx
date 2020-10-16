import Layout from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Error404() {
  const router = useRouter()
  const mail = () => {
    const address = 'a.boehm@hsv-neuwied.de'
    const error = '404 - Page not found'
    return encodeURI(`mailto:${address}?subject=Error on "${router.pathname}": ${error}`)
  }

  return (
    <Layout title="Oops … die Seite konnte nicht gefunden werden :( &mdash; HSV Neuwied">
      <div className="container py-20 text-2xl text-center">
        <h1 className="text-5xl">
          Oops …<br />
          die Seite konnte nicht gefunden werden :( <br />
          Das tut uns leid!
        </h1>
        <p className="mt-10 text-2xl">
          Gehe zu der{' '}
          <Link href="/">
            <a className="text-hsv-base hover:text-hsv-light active:text-hsv-light">Startseite</a>
          </Link>
          , um unser weiteres Angebot zu sehen!
        </p>
        <p className="mt-10 text-2xl">
          Informiere unseren{' '}
          <a className="text-hsv-base hover:text-hsv-light active:text-hsv-light" href={mail()}>
            Administrator
          </a>{' '}
          &uuml;ber das Problem, <br />
          sollte diese Seite wiederholt angezeigt werden.
        </p>
        <p className="mt-10 text-2xl">
          Die Fehlermeldung f&uuml;r mehr Informationen ist: <br />
          <code className="text-gray-600">404 - Seite nicht gefunden</code>
        </p>
      </div>
    </Layout>
  )
}
