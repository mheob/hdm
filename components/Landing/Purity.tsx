import styled from "styled-components"

const BackgroundImage = styled.div`
  @media (min-width: 768px) {
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

const GridBio = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2"
    "grid-item-3"
    "grid-item-4";
  grid-template-columns: 1fr;
  gap: 6rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "grid-item-1 grid-item-2"
      "grid-item-3 grid-item-4";
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

const GridHome = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2"
    "grid-item-3"
    "grid-item-4";
  grid-template-columns: 1fr;
  column-gap: 6rem;

  @media (min-width: 768px) {
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

const Badge = styled.img`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
`

type Props = {
  className?: string
}

const Purity: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section id="purity" className={`lg:relative overflow-x-hidden mt-12 lg:mt-32 pt-20 lg:pb-64 ${className}`}>
      <BackgroundImage />
      <header className="container mt-6">
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">Purity</h2>
          <p className="text-xl lg:text-2xl lg:mt-4">Bio Selection</p>
        </div>
      </header>

      <GridBio className="lg:container">
        <div className="relative mt-10 ml-6 lg:mt-16 lg:-ml-6">
          <picture>
            <source srcSet="/images/hdm-purity-bio-selection.webp" type="image/webp" />
            <source srcSet="/images/hdm-purity-bio-selection.png" type="image/png" />
            <img src="/images/hdm-purity-bio-selection.png" alt="Purity - Natürlich, sauber, rein" />
          </picture>
          <Badge
            className="hidden lg:block"
            src="/certificates/hdm-oekosiegel.png"
            alt="HDM - Verantwortung für Mensch und Natur"
          />
        </div>

        <div className="container lg:mt-0 lg:px-0">
          <p className="lg:text-lg">
            Natürlich, sauber, rein – Bei den hochwertigen Purity Laminatböden der Bio-Selection ist der Name Programm.
            Rund 96% FSC-zertifiziertes Holz, die faktisch formaldehydfreie E0-Qualität und die Schadstofffreiheit
            dieser Böden sprechen für sich. Die Auszeichnung mit dem Blauen Engel bestätigt es. \
          </p>

          <p className="mt-8 text-lg">
            Die einfache und schnelle Verlegung ist neben den idealen Pflegeeigenschaften ein weiteres Argument.
          </p>

          <div>
            <div>
              <h3 className="mt-8 font-bold ">Kollektion Glow – Böden mit Ausstrahlung</h3>
              <p>
                Eine deutlich sicht- und fühlbare Oberflächenstruktur kennzeichnet die Böden der Kollektion Glow. Der
                Boden gibt Inspiration für die Neugestaltung Ihrer Räume. Die umlaufende Fuge rundet das moderne
                Verlegebild ab.
              </p>
            </div>

            <div>
              <h3 className="mt-8 font-bold">Kollektion Pulse – Am Puls der Zeit</h3>
              <p>
                Authentische und fühlbare Maserungen folgen den Linien des Holzdekors – Dafür stehen die Laminatböden
                der Kollektion Pulse. Umlaufende Fugen geben dem Bild der verlegten Fläche Halt, Kontur und einen
                zeitgemäßen Stil.
              </p>
            </div>

            <div>
              <h3 className="mt-8 font-bold">Kollektion Stream - Alles andere als Mainstream</h3>
              <p>
                Ein Dielenformat von fast 25 mm Breite kennzeichnet diese Bigboards. Highlight ist die
                Oberflächenstruktur, die für außergewöhnliche Lichtbrechungen auf der Oberfläche sorgt. Kräftige
                Fugenlinien zeichnen das markante und individuelle Bild der verlegten Fläche.
              </p>
            </div>
          </div>
        </div>

        <div className="container flex justify-between -mt-4 lg:space-x-6 lg:-mt-16 lg:-ml-6 lg:px-0">
          <img className="h-24" src="/certificates/hdm-fsc.png" alt="FSC - zertifiziertes Holz" />
          <img
            className="hidden h-24 lg:inline-block"
            src="/certificates/hdm-blauer-engel-176.png"
            alt="Blauer Engel 176"
          />
          <img className="h-24" src="/certificates/hdm-ohne-formaldehyd.png" alt="ohne Formaldehyd" />
          <img className="h-24" src="/certificates/hdm-e0.png" alt="E0 - DIN EN 717-1" />
        </div>

        <div className="container text-center lg:text-left lg:-mt-6 lg:px-0">
          <a
            href="/documents/hdm-purity-bio-selection.pdf"
            target="_blank"
            title="Den Katalog Purity Bio selection ansehen und herunterladen"
            className="inline-block px-6 py-3 text-sm text-white rounded-full bg-hdm hover:bg-hdm-dark"
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
            Purity Bio Selection downloaden
          </a>
        </div>
      </GridBio>

      <div className="mt-40">
        <header className="container mt-6">
          <div className="lg:ml-32">
            <h2 className="text-4xl font-bold lg:text-5xl">Purity</h2>
            <p className="text-xl lg:text-2xl lg:mt-4">Home Selection</p>
          </div>
        </header>

        <GridHome className="lg:container lg:mb-12">
          <picture className="mt-10 ml-6 lg:-mt-16">
            <source srcSet="/images/hdm-purity-home-selection.webp" type="image/webp" />
            <source srcSet="/images/hdm-purity-home-selection.png" type="image/png" />
            <img src="/images/hdm-purity-home-selection.png" alt="Purity - Natürlich, sauber, rein" />
          </picture>

          <div className="container mt-24 lg:grid lg:mt-20">
            <p className="lg:text-lg">
              In der Home-Selection der Purity-Laminatbodenbeläge by HDM zeichnet sich BLOOM durch beeindruckende
              Dekorbilder und eine feine Glattkante aus. <br /> <br /> Die Schadstofffreiheit dieser Böden spricht für
              sich, belegt durch die Auszeichnung mit dem Blauen Engel. Die einfache und schnelle Verlegung ist neben
              den idealen Pflegeeigenschaften ein weiteres Argument.
            </p>
            <h3 className="mt-8 font-bold ">BLOOM – Einfach natürlich</h3>
          </div>

          <div className="container flex justify-between mt-12 lg:mt-16 lg:space-x-6">
            <img className="h-24" src="/certificates/hdm-blauer-engel-176.png" alt="Blauer Engel 176" />
            <img className="h-24" src="/certificates/hdm-fsc.png" alt="FSC - zertifiziertes Holz" />
            <img className="h-24" src="/certificates/hdm-e1.png" alt="E1 - DIN EN 16156" />
          </div>

          <div className="container mt-16 text-center lg:text-left lg:mt-24">
            <a
              href="/documents/hdm-purity-home-selection.pdf"
              target="_blank"
              title="Den Katalog Purity Home selection ansehen und herunterladen"
              className="inline-block px-6 py-3 text-sm text-white rounded-full bg-hdm hover:bg-hdm-dark"
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
              Purity Home Selection downloaden
            </a>
          </div>
        </GridHome>
      </div>
    </section>
  )
}

export default Purity
