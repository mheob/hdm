import Link from "next/link"
import styled from "styled-components"

const Section = styled.section`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(2.9333 * 350px);
    height: 350px;
    background: url(/ci/hdm-bg.svg) no-repeat;
    opacity: 0.07;
    content: "";
  }
`

type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <header className={`container px-6 bg-gray-100 ${className}`}>
      <img className="w-56 pt-8 m-auto" src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" />
      <nav className="flex justify-between my-12 font-semibold ">
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
      <Section className="pt-12 pb-20 text-xl leading-10">
        <strong>Produkt. Idee. Erfolg.</strong> Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in Zukunft
        abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.
      </Section>
    </header>
  )
}

export default Header
