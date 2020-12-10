import NavLink from 'next/link'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'
import Sticky from 'react-stickynode'
import styled from '@emotion/styled'

import { useWindowDimensions } from '@/hooks/use-window-dimensions'

export default function Header({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter()
  const { width = 0 } = useWindowDimensions()

  return (
    <header className={`relative overflow-x-hidden ${className}`}>
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
          {router && router.pathname === '/' ? (
            <nav
              id="landing-main-nav"
              className="flex justify-between py-3 font-semibold bg-white sm:justify-around lg:bg-transparent lg:text-lg lg:container lg:mb-0 lg:space-x-12 lg:justify-end lg:mt-10 lg:py-0"
            >
              <Link
                to="produkte"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-120}
                duration={1000}
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
                duration={1000}
                className="px-4 py-2 my-2 hover:text-hdm"
              >
                Kontakt
              </Link>
            </nav>
          ) : (
            <nav className="flex justify-between py-3 font-semibold bg-white lg:bg-transparent lg:text-lg lg:container lg:mb-0 lg:space-x-12 lg:justify-end lg:mt-10 lg:py-0">
              <NavLink href="/#produkte">
                <a className="px-4 py-2 my-2 hover:text-hdm">Produkte</a>
              </NavLink>
              <NavLink href="/#unternehmen">
                <a className="px-4 py-2 my-2 hover:text-hdm">Unternehmen</a>
              </NavLink>
              <NavLink href="/#kontakt">
                <a className="px-4 py-2 my-2 hover:text-hdm">Kontakt</a>
              </NavLink>
            </nav>
          )}
        </Sticky>
      </div>

      <Section className="container pt-12 pb-20 lg:flex lg:flex-row lg:justify-between lg:pt-32 lg:pb-24">
        <p className="text-xl leading-10 lg:text-3xl lg:max-w-3xl lg:ml-24">
          <strong>Produkt. Idee. Erfolg.</strong> Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in
          Zukunft abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.
        </p>
        {router && router.pathname === '/' ? (
          <Link to="purity" activeClass="active" spy={true} smooth={true} offset={-25} duration={700}>
            <figure id="landing-eco" className="hidden -mt-16 text-center group lg:block">
              <img
                className="w-56 transition-all duration-500 transform -rotate-10 group-hover:rotate-0"
                src="/certificates/hdm-oekosiegel-header.png"
                alt="HDM - Verantwortung für Mensch und Natur"
                title="Mehr über die den BIO ... logischen Laminatboden erfahren"
              />
            </figure>
          </Link>
        ) : (
          <figure className="hidden -mt-16 text-center lg:block">
            <img
              className="w-56"
              src="/certificates/hdm-oekosiegel-header.png"
              alt="HDM - Verantwortung für Mensch und Natur"
              title="Mehr über die den BIO ... logischen Laminatboden erfahren"
            />
          </figure>
        )}
      </Section>

      {router && router.pathname === '/' && (
        <Sticky enabled={width >= 1024} innerZ="101" activeClass="sticky-nav">
          <nav className="justify-around hidden h-24 px-20 py-4 text-lg font-semibold lg:flex">
            <Link
              to="crossflex"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Dekorpaneele
            </Link>
            <Link
              to="purity"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-25}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Laminatb&ouml;den
            </Link>
            <Link
              to="cerastar"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-40}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Designb&ouml;den
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
              Massivholzt&uuml;ren
            </Link>
            <Link
              to="shelves"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Möbelbauteile
            </Link>
            <Link
              to="strips"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              Leisten
            </Link>
            <Link
              to="accessories"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              className="px-4 py-2 my-2 hover:text-hdm"
            >
              {!process.browser ? 'DAZU-Zubehör' : width < 1280 ? 'Zubehör' : 'DAZU-Zubehör'}
            </Link>
          </nav>
        </Sticky>
      )}
    </header>
  )
}

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
    content: '';
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
    content: '';
  }

  @media (min-width: 1024px) {
    position: static;

    &::after {
      left: 6rem;
      width: calc(2.9333 * 100%);
      height: 100%;
    }
  }
`
