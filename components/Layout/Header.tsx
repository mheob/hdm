import Link from "next/link"
import styled from "styled-components"

const Section = styled.section`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    background-color: #f7fafc;
    content: "";
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: calc(2.9333 * 90%);
    height: 90%;
    background-image: url(/ci/hdm-bg.svg);
    background-repeat: no-repeat;
    opacity: 0.05;
    content: "";
  }

  @media (min-width: 768px) {
    position: static;

    &::after {
      left: 6rem;
      width: calc(2.9333 * 100%);
      height: 100%;
    }
  }
`

type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <header className={`relative overflow-x-hidden ${className}`}>
      <div className="container justify-between my-6 lg:flex">
        <h1 className="pt-8">
          <img className="w-56 mx-auto" src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" />
          <span className="sr-only">HDM - Holz Design Moers GmbH</span>
        </h1>

        <nav className="flex justify-between my-16 font-semibold lg:text-lg lg:container lg:mb-0 lg:space-x-12 lg:justify-end">
          <Link href="/#produkte">
            <a>Produkte</a>
          </Link>
          <Link href="/#unternehmen">
            <a>Unternehmen</a>
          </Link>
          <Link href="/#kontakt">
            <a>Kontakt</a>
          </Link>
        </nav>
      </div>

      <Section className="container pt-12 pb-20 lg:py-40">
        <p className="text-xl leading-10 lg:text-3xl lg:max-w-3xl lg:ml-24">
          <strong>Produkt. Idee. Erfolg.</strong> Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in
          Zukunft abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.
        </p>
      </Section>

      <nav className="justify-around hidden px-20 my-8 text-lg font-semibold lg:flex">
        <Link href="/#crossflex">
          <a className="px-2">Crossflex</a>
        </Link>
        <Link href="/#purity">
          <a className="px-2">Purity</a>
        </Link>
        <Link href="/#cerastar">
          <a className="px-2 border-b-4 border-hdm">Cerastar</a>
        </Link>
        <Link href="/#massivholztueren">
          <a className="px-2">Massivholztüren</a>
        </Link>
        <Link href="/#moebelbauplatten">
          <a className="px-2">Möbelbauplatten</a>
        </Link>
        <Link href="/#dazu-zubehoer">
          <a className="px-2">Dazu Zubehör</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
