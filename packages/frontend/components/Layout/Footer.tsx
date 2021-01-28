import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { animateScroll } from 'react-scroll'
import styled from '@emotion/styled'

export default function Footer({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter()

  return (
    <FooterStyled id="kontakt" className={`lg:mt-40 pb-10 ${className}`}>
      <section className="container lg:flex lg:justify-between lg:space-x-6">
        <h2 className="py-16 text-4xl font-bold leading-10 lg:pt-0">
          Nehmen Sie <br />
          Kontakt mit <br />
          uns auf
        </h2>

        <Address>
          Holz Design Moers GmbH <br />
          Am Schürmannshütt 23 <br />
          47441 Moers
        </Address>

        <Address className="mt-6 lg:mt-0">
          Telefon:{' '}
          <a className="underline hover:text-hdm-dark" href="tel:+4928411401101">
            +49 2841 1401 101
          </a>
          <br />
          Telefax: +49 2841 1401 180 <br />
          E-Mail:{' '}
          <a className="underline hover:text-hdm-dark" href="mailto:info@hdm.gmbh">
            info@hdm.gmbh
          </a>
        </Address>

        <div className="mt-24 lg:mt-0">
          {router && router.pathname === '/' ? (
            <button
              className="w-48"
              id="logo"
              onClick={() => animateScroll.scrollToTop({ duration: 800 })}
              type="button"
              aria-label="HDM Logo"
            >
              <Image src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" width={192} height={49} />
            </button>
          ) : (
            <Link href="/">
              <a className="w-48">
                <Image src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" width={192} height={49} />
              </a>
            </Link>
          )}
        </div>
      </section>

      <section className="container mt-6 text-lg leading-10 lg:flex lg:justify-center">
        <p>&copy; 2020 Holz Design Moers GmbH</p>
        <nav className="flex flex-col mt-2 leading-8 lg:mt-0 lg:flex-row">
          <Link href="/downloads">
            <a className="underline lg:ml-8 hover:text-hdm-dark">Downloads</a>
          </Link>
          <Link href="/impressum">
            <a className="underline lg:ml-8 hover:text-hdm-dark">Impressum</a>
          </Link>
          <Link href="/datenschutz">
            <a className="underline lg:ml-8 hover:text-hdm-dark">Datenschutz</a>
          </Link>
        </nav>
      </section>

      <div className="container my-10 text-right lg:text-center">
        <button
          type="button"
          id="back-to-top-button"
          onClick={() => animateScroll.scrollToTop({ duration: 800 })}
          aria-label="Go to top"
        >
          <svg
            className="inline-block w-6 transform -rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24.242 45"
          >
            <path
              d="M126.031,21.266,105.252.486A1.732,1.732,0,0,0,102.8,2.935L122.359,22.49,102.8,42.045a1.731,1.731,0,0,0,2.448,2.448l20.779-20.779A1.732,1.732,0,0,0,126.031,21.266Z"
              transform="translate(-102.297 0)"
              fill="#0084b0"
            />
          </svg>
        </button>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  position: relative;

  @media (min-width: 1024px) {
    background-image: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/ci/hdm-bg.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`

const Address = styled.address`
  font-size: 1.125rem;
  font-style: normal;
  line-height: 2.5rem;
`
