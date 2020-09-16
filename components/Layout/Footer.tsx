import Link from "next/link"
import styled from "styled-components"

const FooterStyled = styled.footer`
  position: relative;

  @media (min-width: 768px) {
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

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <FooterStyled className={`lg:mt-40 pb-10 ${className}`}>
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
          Telefon:{" "}
          <a className="underline" href="tel:+49284114010">
            +49 2841 1401 0
          </a>{" "}
          <br />
          Telefax: +49 2841 1401 180 <br />
          E-Mail:{" "}
          <a className="underline" href="mailto:info@hdm.gmbh">
            info@hdm.gmbh
          </a>
        </Address>

        <div className="mt-24 lg:mt-0">
          <img className="w-48" src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" />
        </div>
      </section>

      <section className="container mt-6 text-lg leading-10 lg:flex lg:justify-center">
        <p>&copy; 2020 Holz Design Moers GmbH</p>
        <nav className="mt-2 leading-8 lg:mt-0">
          <Link href="/imprint" as="impressum">
            <a className="underline lg:ml-8">Impressum</a>
          </Link>
          <Link href="/privacy" as="datenschutz">
            <a className="ml-8 underline">Datenschutz</a>
          </Link>
        </nav>
      </section>

      <div className="container mt-10 text-right lg:text-center">
        <button>
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

export default Footer
