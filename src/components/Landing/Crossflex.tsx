import dynamic from 'next/dynamic'
import styled from 'styled-components'

const Header = styled.header`
  display: grid;
  grid-template-areas:
    'grid-item-1'
    'grid-item-2'
    'grid-item-3';
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-areas:
      'grid-item-1 grid-item-3'
      'grid-item-2 grid-item-2';
    grid-template-columns: 1fr 1fr;
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
`

type Props = {
  className?: string
}

const Crossflex: React.FC<Props> = ({ className = '' }: Props) => {
  const Pdf = dynamic(() => import('@/components/Utils/Pdf'), { ssr: false })

  return (
    <section id="crossflex" className={className}>
      <Header className="container grid mt-6 lg:mt-32">
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">Crossflex</h2>
          <p className="mt-4 text-xl leading-snug lg:text-2xl">
            Dekorpaneele für <span className="lg:block">Wand und Decke</span>
          </p>
        </div>

        <picture className="mt-4 -ml-6 -mr-6 lg:mt-16">
          <source srcSet="/images/hdm-crossflex.webp" type="image/webp" />
          <source srcSet="/images/hdm-crossflex.jpg" type="image/jpeg" />
          <img src="/images/hdm-crossflex.jpg" alt="Crossflex - Dekorpaneele für Wand und Decke" />
        </picture>

        <p className="mt-8 lg:mt-0 lg:-ml-24 lg:mr-8 lg:text-lg">
          Mit hochglänzenden bis hin zu supermatten Oberflächen, unterschiedlichen Fugenbreiten und einer Vielfalt an
          Dekoren, Formaten und Stärken sind der modernen und kreativen Raumgestaltung keine Grenzen gesetzt. <br /> Der
          Begriff Paneele neu gedacht: Das Dekorpaneel als großflächige oder partielle Wandverkleidung, ansprechendes
          Design-Element oder nur ein Akzent. <br /> <br />
          Das Crossflex Dekorpaneel: Wand- und Deckenpaneele der neuen Genenration.
        </p>
      </Header>

      <div className="container lg:grid lg:gap-x-16 lg:grid-cols-2 lg:mt-20">
        <div className="lg:ml-24">
          <div>
            <h3 className="mt-8 font-bold ">Crossflex Hydro - Besonders Feuchtraum-geeignet</h3>
            <p>Die spezielle Zusammensetzung des Trägers garantiert besondere Beständigkeit gegen Feuchtigkeit.</p>
          </div>

          <div>
            <h3 className="mt-8 font-bold">Crossflex Essential - Ein Dekor in vielen Formaten</h3>
            <p>Zehn verschiedene Formate bringen die Vielfalt dieser Kollektion zum Ausdruck.</p>
          </div>

          <div>
            <h3 className="mt-8 font-bold">Crossflex Advance - Besondere Optik durch 4-seitige V-Fuge</h3>
            <p>Advance überzeugt durch die umlaufende Fase auf ganzer Linie.</p>
          </div>
        </div>

        <div className="lg:mr-24">
          <div>
            <h3 className="mt-8 font-bold">Crossflex Swift - Einfach und schnell.</h3>
            <p>Verlegen Sie Swift herkömmlich oder schnell und mühelos durch simples Tackern der Paneele.</p>
          </div>

          <div>
            <h3 className="mt-8 font-bold">Crossflex Level - Beeindruckende 3D-Optik</h3>
            <p>
              Durch die Kombination von zwei Paneelstärken – 6 und 10 mm – ergibt sich ein beeindruckend
              dreidimensionales Verlegebild.
            </p>
          </div>

          <div>
            <h3 className="mt-8 font-bold">Crossflex Space - Optische Distanz von 10 mm</h3>
            <p>Die betont große Fuge gibt der typischen Paneeloptik Raum.</p>
          </div>
        </div>
      </div>

      <div className="container mt-12 text-center lg:mt-24">
        <Pdf title="Crossflex Katalog" filename="/documents/hdm-crossflex.pdf" />
      </div>
    </section>
  )
}

export default Crossflex
