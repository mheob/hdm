import NavLink from "next/link"
import { Link } from "react-scroll"
import Sticky from "react-stickynode"
import styled from "styled-components"

import { useWindowDimensions } from "@/hooks/useWindowDimensions"

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
  const { width = 0 } = useWindowDimensions()

  return (
    <header className={`relative overflow-x-hidden lg:h-600 ${className}`}>
      <div className="justify-between mt-6 lg:container lg:flex">
        <h1 className="pt-8 mb-10 lg:mb-0">
          <NavLink href="/">
            <a>
              <img className="w-56 mx-auto" src="/ci/hdm-logo.svg" alt="Logo der HDM GmbH" />
              <span className="sr-only">HDM - Holz Design Moers GmbH</span>
            </a>
          </NavLink>
        </h1>

        <Sticky enabled={width < 1024} innerZ="101">
          <nav className="flex justify-between py-3 font-semibold bg-white lg:bg-transparent lg:text-lg lg:container lg:mb-0 lg:space-x-12 lg:justify-end lg:mt-10 lg:py-0">
            <Link
              to="produkte"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Produkte
            </Link>
            <Link
              to="unternehmen"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Unternehmen
            </Link>
            <Link
              to="kontakt"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1200}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Kontakt
            </Link>
          </nav>
        </Sticky>
      </div>

      <Section className="container pt-12 pb-20 lg:pt-32 lg:pb-24">
        <p className="text-xl leading-10 lg:text-3xl lg:max-w-3xl lg:ml-24">
          <strong>Produkt. Idee. Erfolg.</strong> Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in
          Zukunft abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.
        </p>
      </Section>

      <Sticky enabled={width >= 1024} innerZ="101" activeClass="sticky-nav">
        <nav className="justify-around hidden px-20 py-4 text-lg font-semibold lg:flex">
          <Link
            to="crossflex"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={600}
            className="px-4 py-2 my-2 hover:text-hdm"
          >
            Crossflex
          </Link>
          <Link
            to="purity"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-25}
            duration={700}
            className="px-4 py-2 my-2 hover:text-hdm"
          >
            Purity
          </Link>
          <Link
            to="cerastar"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={900}
            className="px-4 py-2 my-2 hover:text-hdm"
          >
            Cerastar
          </Link>
          <Link
            to="massivholztueren"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
            className="px-4 py-2 my-2 hover:text-hdm"
          >
            Massivholztüren
          </Link>
          <Link
            to="accessories"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={1100}
            className="px-4 py-2 my-2 hover:text-hdm"
          >
            Möbelbauplatten / Dazu Zubehör
          </Link>
        </nav>
      </Sticky>
    </header>
  )
}

export default Header
