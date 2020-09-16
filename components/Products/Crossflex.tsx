import styled from "styled-components"

const Header = styled.header`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2"
    "grid-item-3";
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-areas:
      "grid-item-1 grid-item-3"
      "grid-item-2 grid-item-2";
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

const Crossflex: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section className={className}>
      <Header className="container grid mt-6 lg:mt-32">
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">Crossflex</h2>
          <p className="text-xl lg:text-2xl">
            Dekorpaneele für <span className="lg:block">Wand und Decke</span>
          </p>
        </div>

        <picture className="mt-4 -ml-6 -mr-6 lg:mt-16">
          <source srcSet="images/hdm-crossflex.webp" type="image/webp" />
          <source srcSet="images/hdm-crossflex.jpg" type="image/jpeg" />
          <img src="images/hdm-crossflex.jpg" alt="Crossflex - Dekorpaneele für Wand und Decke" />
        </picture>

        <p className="mt-8 lg:mt-0 lg:mr-32 lg:text-lg">
          Mit hochglänzenden bis hin zu supermatten Oberflächen, unterschiedlichen Fugenbreiten und einer Vielfalt an
          Dekoren, Formaten und Stärken sind der modernen und kreativen Raumgestaltung keine Grenzen gesetzt.
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
            <p>Eine betont große Fuge verleiht die klassische Paneeloptik.</p>
          </div>
        </div>
      </div>

      <div className="container mt-12 text-center lg:mt-24">
        <a
          href="/documents/hdm-crossflex.pdf"
          target="_blank"
          title="Den Katalog Crossflex ansehen und herunterladen"
          className="inline-block px-6 py-3 text-sm text-white rounded-full bg-hdm"
        >
          <svg
            className="inline-block mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="17.588"
            height="17.47"
            viewBox="0 0 17.588 17.47"
          >
            <path
              d="M112.359,182.379a1.787,1.787,0,0,1-1.21-.524,2.06,2.06,0,0,1-.565-1.936,1.589,1.589,0,0,1,.686-1.008,19,19,0,0,1,4.113-2.3,44.427,44.427,0,0,0,2.419-5.041,11.514,11.514,0,0,1-1.29-3.75,3.57,3.57,0,0,1,.121-1.613c.4-1.29,1.29-1.331,1.653-1.29.081,0,1.492.2,1.734,2.218a10.9,10.9,0,0,1-.927,4.4,14,14,0,0,0,3.145,3.71,18.613,18.613,0,0,1,4.557.524,1.715,1.715,0,0,1,.927.565,1.5,1.5,0,0,1,.282,1.573h0a1.675,1.675,0,0,1-.323.565,1.558,1.558,0,0,1-1.976.444,21.456,21.456,0,0,1-3.871-2.54,16.963,16.963,0,0,0-5.565,1.169c-.686,1.25-1.532,2.621-2.5,4.153a1.7,1.7,0,0,1-.766.645h0C112.722,182.339,112.521,182.379,112.359,182.379Zm1.976-4.073a15.061,15.061,0,0,0-2.379,1.492c-.121.121-.242.242-.242.363a.956.956,0,0,0,.323.887.574.574,0,0,0,.484.121h0a.331.331,0,0,0,.2-.2C113.287,180.04,113.851,179.153,114.335,178.306Zm9.4-1.936a22.573,22.573,0,0,0,2.419,1.452.385.385,0,0,0,.484-.121,1.115,1.115,0,0,0,.161-.282c.081-.2.081-.282-.04-.4a.78.78,0,0,0-.363-.2A15.283,15.283,0,0,0,123.731,176.371Zm-5.242-3.589c-.4.927-.887,1.976-1.532,3.186a18.4,18.4,0,0,1,3.549-.726A20.147,20.147,0,0,1,118.489,172.782Zm-.4-6.775c-.161,0-.282.161-.4.524a2.408,2.408,0,0,0-.081,1.089,10.078,10.078,0,0,0,.686,2.339,8.044,8.044,0,0,0,.524-2.742c-.121-1.089-.686-1.21-.726-1.21Z"
              transform="translate(-110.524 -164.909)"
              fill="#fff"
            />
          </svg>
          Crossflex Katalog downloaden
        </a>
      </div>
    </section>
  )
}

export default Crossflex
