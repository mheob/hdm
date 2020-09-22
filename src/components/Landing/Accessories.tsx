import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2";
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-areas: "grid-item-1 grid-item-2";
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
  }

  & > :nth-child(1) {
    grid-area: grid-item-1;
  }

  & > :nth-child(2) {
    grid-area: grid-item-2;
  }
`

const BackgroundImage = styled.div`
  @media (min-width: 768px) {
    background-image: linear-gradient(rgba(247, 250, 252, 0.95), rgba(247, 250, 252, 0.95)), url(/ci/hdm-bg.svg);
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 100% auto;
  }
`

type Props = {
  className?: string
}

const Accessories: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section id="accessories" className={`lg:bg-gray-100 overflow-x-hidden lg:mt-24 ${className}`}>
      <BackgroundImage>
        <Grid className="container pt-20 lg:pb-20">
          <div className="lg:max-w-md">
            <header className="mt-16 lg:ml-32">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Regalböden / Möbelbauplatten</h2>
            </header>

            <picture className="block mt-12 lg:-mx-24">
              <source srcSet="/images/hdm-moebelbauplatten.webp" type="image/webp" />
              <source srcSet="/images/hdm-moebelbauplatten.jpg" type="image/jpeg" />
              <img
                src="/images/hdm-moebelbauplatten.webp"
                alt="Möbelbauplatten - modernen Regalböden und Möbelbauplatten"
              />
            </picture>

            <div className="">
              <p className="mt-12 lg:text-lg">
                Mit modernen Regalböden und Möbelbauplatten, in vielen Abmessungen und dem richtigen Zubehör, lässt sich
                einfach und schnell frischer Wind in alle Räume bringen.
              </p>
              <p className="mt-8 lg:text-lg">
                Ihrer Kreativität können Sie mit dem Holzzuschnitt-Programm von Holz Design Moers freien Lauf lassen.
              </p>
            </div>
          </div>

          <div className="lg:max-w-md">
            <header className="mt-16 lg:ml-32">
              <h2 className="text-4xl font-bold lg:text-5xl">
                DAZU<sup className="font-normal">&reg;</sup>
              </h2>
              <p className="mt-4 text-xl leading-snug lg:text-2xl">Das Zubehörprogramm</p>
            </header>

            <picture className="block mt-12 lg:-mx-24">
              <source srcSet="/images/hdm-dazu-zubehoer.webp" type="image/webp" />
              <source srcSet="/images/hdm-dazu-zubehoer.webp" type="image/jpeg" />
              <img src="/images/hdm-dazu-zubehoer.webp" alt="DAZU-Zubehörprogramm" />
            </picture>

            <div className="">
              <p className="mt-12 lg:text-lg">
                Alles was zum Anbringen von Dekorpaneele, zur Bodenverlegung, zum Bau von Mobiliar oder dem dekorativen
                Innenausbau notwendig ist, hat Holz Design Moers im DAZU<sup>&reg;</sup>-Zubehörprogramm. Verlegung und
                Montage einfach gemacht - mit dem DAZU<sup>&reg;</sup>-Zubehörprogramm.
              </p>
            </div>
          </div>
        </Grid>
      </BackgroundImage>
    </section>
  )
}

export default Accessories
