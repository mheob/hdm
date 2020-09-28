import styled from "styled-components"

const BackgroundImage = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    background-color: #f7fafc;

    &::before {
      position: absolute;
      top: 5%;
      right: -50%;
      z-index: -1;
      width: calc(2.9333 * 90%);
      height: 90%;
      background: url(/ci/hdm-bg.svg) no-repeat;
      opacity: 0.05;
      content: "";
    }
  }
`

const GridLeft = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2";
  grid-template-columns: 1fr;
  gap: 6rem;

  @media (min-width: 1024px) {
    grid-template-areas: "grid-item-1 grid-item-2";
    grid-template-columns: 1.1fr 0.9fr;
  }

  & > :nth-child(1) {
    grid-area: grid-item-1;
  }

  & > :nth-child(2) {
    grid-area: grid-item-2;
  }

  & > :nth-child(3) {
    grid-area: grid-item-3;
  }

  & > :nth-child(4) {
    grid-area: grid-item-4;
  }
`

const GridRight = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2"
    "grid-item-3"
    "grid-item-4";
  grid-template-columns: 1fr;
  column-gap: 6rem;

  @media (min-width: 1024px) {
    grid-template-areas:
      "grid-item-2 grid-item-1"
      "grid-item-3 grid-item-1"
      "grid-item-4 grid-item-1";
    grid-template-columns: 0.9fr 1.1fr;
  }

  & > :nth-child(1) {
    grid-area: grid-item-1;
  }

  & > :nth-child(2) {
    grid-area: grid-item-2;
  }

  & > :nth-child(3) {
    grid-area: grid-item-3;
  }

  & > :nth-child(4) {
    grid-area: grid-item-4;
  }
`

type Props = {
  className?: string
}

const Shelves: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section id="shelves" className={`lg:relative overflow-x-hidden mt-12 lg:mt-32 lg:pt-20 lg:pb-20 ${className}`}>
      <BackgroundImage />
      <header className="container mt-6">
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold leading-snug lg:text-5xl">Regalböden / Möbelbauplatten</h2>
        </div>
      </header>

      <GridLeft className="lg:container">
        <div className="relative mt-10 ml-6 lg:mt-16 lg:-ml-6">
          <picture>
            <source srcSet="/images/hdm-moebelbauplatten.webp" type="image/webp" />
            <source srcSet="/images/hdm-moebelbauplatten.png" type="image/png" />
            <img src="/images/hdm-moebelbauplatten.png" alt="Purity - Natürlich, sauber, rein" />
          </picture>
        </div>

        <div className="container lg:mt-16 lg:px-0">
          <p className="lg:mt-8 lg:text-lg">
            Mit modernen Regalböden und Möbelbauplatten, in vielen Abmessungen und dem richtigen Zubehör, lässt sich
            einfach und schnell frischer Wind in alle Räume bringen. Mit Möbelbauplatten lassen sich von der Kommode
            über den Raumteiler bis zur kompletten Schrankwand viele Möbel zur Inneneinrichtung bauen.
          </p>

          <p className="mt-8 text-lg">
            Die offenen, anpassungsfähigen Regalsysteme bringen Stauraum und ermöglichen eine optimale Raumnutzung oder
            sehen einfach nur schick aus.
          </p>

          <p className="mt-8 text-lg">
            Möbelbauplatten und Regalböden bietet Holz Design Moers mit schönen Dekoren, in 19 mm Stärke und zahlreichen
            Abmessungen. Die Möbelbauplatten werden in Ausführung mit gerader oder runder Kante angeboten und sind an
            zwei Sichtkanten umleimt.
          </p>

          <p className="mt-8 text-lg">
            Auch die Regalböden gibt es mit gerader oder runder Kante, zwei- oder vierseitig umleimt. Mit modernen
            Regalböden in vielen Abmessungen und dem richtigen Zubehör lässt sich einfach und schnell frischer Wind in
            alle Räume bringen.
          </p>
        </div>
      </GridLeft>

      <div className="mt-20 lg:mt-40">
        <header className="container mt-6">
          <div className="lg:ml-32">
            <h2 className="text-4xl font-bold lg:text-5xl">Zuschnitte</h2>
          </div>
        </header>

        <GridRight className="lg:container lg:mb-12">
          <picture className="mt-10 ml-6 lg:-mt-16">
            <source srcSet="/images/hdm-zuschnitt.webp" type="image/webp" />
            <source srcSet="/images/hdm-zuschnitt.png" type="image/png" />
            <img src="/images/hdm-zuschnitt.png" alt="Zuschnitte - bei HDM alles aus einer Hand" />
          </picture>

          <div className="container mt-24 lg:grid lg:mt-20">
            <p className="lg:text-lg">
              Ob Loch- oder MDF-Platte, Sperrholz, ob OSB- oder Multiplex, Siebdruck- oder Dämmplatten oder mit
              attraktiven Dekoren beschichtete Spanplatten... das Holzzuschnitt-Programm von Holz Design Moers bietet
              alle Möglichkeiten.
            </p>

            <p className="mt-8 text-lg">
              Persönlicher Geschmack ist einzigartig. Mit der Zuschnittware von Holz Design Moers lässt sich ein
              Kulissenwechsel für jeden Raum im Handumdrehen maßgenau realisieren. Leben Sie Ihre Kreativität aus.
            </p>
          </div>
        </GridRight>
      </div>
    </section>
  )
}

export default Shelves
