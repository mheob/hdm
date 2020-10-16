import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

export default function Cerastar({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  const Pdf = dynamic(() => import('@/components/Utils/Pdf'), { ssr: false })

  return (
    <section
      id="cerastar"
      className={`container relative lg:grid lg:grid-cols-2 lg:gap-32 mt-32 pt-20 pb-24 lg:mt-24 ${className}`}
    >
      <BackgroundImage />

      <header>
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">Cerastar</h2>
          <p className="mt-4 text-xl leading-snug lg:text-2xl">
            Der neue Star unter <br />
            den Bodenbelägen
          </p>
        </div>

        <picture className="block mt-16 -mx-6 lg:-ml-20 lg:-mr-8">
          <source srcSet="/images/hdm-cerastar.webp" type="image/webp" />
          <source srcSet="/images/hdm-cerastar.png" type="image/png" />
          <img src="/images/hdm-cerastar.png" alt="Cerastar - der neue Star unten den Bodenbelägen" />
        </picture>
      </header>

      <div className="lg:mt-32 lg:pr-16">
        <h3 className="mt-12 font-bold lg:text-lg">
          Cerastar heißt der neue Designbodenbelag mit keramischer Nanocoat Oberflächenversiegelung.
        </h3>
        <p className="mt-8 lg:text-lg">
          1,2 Mio. feinste Keramikpartikel pro Quadratzentimeter machen die Oberfläche von Cerastar – gegenüber
          Oberflächen vergleichbarer Bodenbeläge – bis zu dreimal kratzfester und strapazierfähiger.
        </p>
        <p className="mt-8 lg:text-lg">
          So entsteht eine äußerst abriebfeste Schutzschicht, die deutlich resistenter gegen Mikrokratzer ist. Zugleich
          verleiht die hochtransparente Versiegelung den Dekoren eine einzigartige brillante Farbtiefe und eleganten
          Glanz.
        </p>
        <p className="mt-8 lg:text-lg">
          Weitere Informationen finden Sie unter{' '}
          <a className="underline text-hdm hover:text-hdm-dark" href="https://cerastar.eu">
            cerastar.eu
          </a>
          .
        </p>

        <div className="mt-16 text-center lg:text-left lg:mt-24">
          <Pdf title="Cerastar Katalog" filename="/documents/hdm-cerastar.pdf" />
        </div>
      </div>
    </section>
  )
}

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  overflow-x: hidden;
  background-color: #f8efef;

  &::before {
    position: absolute;
    top: 3rem;
    left: 45%;
    z-index: -1;
    width: 581px;
    height: 409px;
    background: url(/images/hdm-cerastar-muster.png) no-repeat;
    opacity: 0.7;
    content: '';
  }

  @media (min-width: 1024px) {
    &::before {
      top: 5rem;
    }
  }
`
