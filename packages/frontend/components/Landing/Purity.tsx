import dynamic from 'next/dynamic'
// import Image from 'next/image'
import styled from '@emotion/styled'

import PlayIcon from '@/components/UI/Icons/PlayIcon'
import ModalVideo from '@/components/UI/ModalVideo'
import { useVideo } from '@/hooks/use-video'

export default function Purity({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  const Pdf = dynamic(() => import('@/components/Utils/Pdf'), { ssr: false })

  const [isModalOpen, handleModalOpen, handleModalClose, handleVideoClick] = useVideo()

  return (
    <section id="purity" className={`lg:relative overflow-x-hidden mt-12 lg:mt-32 pt-20 lg:pb-20 ${className}`}>
      <BackgroundImage />
      <header className="container mt-6">
        <div className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">Purity</h2>
          <p className="mt-4 text-xl leading-snug lg:text-2xl">
            Laminatboden <br /> Bio Selection
          </p>
        </div>
      </header>

      <GridBio className="lg:container">
        <div className="relative mt-10 ml-6 lg:mt-16 lg:-ml-6 first">
          {/* TODO: `Image` is currently not available in SSG */}
          {/* <Image
            src="/images/hdm-purity-bio-selection.png"
            alt="Purity - Natürlich, sauber, rein"
            width={768}
            height={900}
          />
          <Badge className="hidden lg:block">
            <Image
              src="/certificates/hdm-oekosiegel.png"
              alt="HDM - Verantwortung für Mensch und Natur"
              width={231}
              height={231}
            />
          </Badge> */}
          <picture>
            <source srcSet="/images/hdm-purity-bio-selection.webp" type="image/webp" />
            <source srcSet="/images/hdm-purity-bio-selection.png" type="image/png" />
            <img src="/images/hdm-purity-bio-selection.png" alt="Purity - Natürlich, sauber, rein" loading="lazy" />
          </picture>
          <Badge
            className="hidden lg:block"
            src="/certificates/hdm-oekosiegel.png"
            alt="HDM - Verantwortung für Mensch und Natur"
          />
        </div>
        <div className="container lg:-mt-4 lg:px-0 second">
          <h3 className="text-xl font-bold">Bio ... Logisch!</h3>

          <p className="mt-8 lg:text-lg">
            Natürlich, sauber, rein – Bei den hochwertigen Purity Laminatböden der Bio-Selection ist der Name Programm.
            Rund 96&nbsp;% FSC-zertifiziertes Holz, die faktisch formaldehydfreie E0-Qualität und die Schadstofffreiheit
            dieser Böden sprechen für sich. Die Auszeichnung mit dem Blauen Engel bestätigt es.
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
                Ein Dielenformat von fast 25 cm Breite kennzeichnet diese Bigboards. Highlight ist die
                Oberflächenstruktur, die für außergewöhnliche Lichtbrechungen auf der Oberfläche sorgt. Kräftige
                Fugenlinien zeichnen das markante und individuelle Bild der verlegten Fläche.
              </p>
            </div>

            <p className="mt-8 font-semibold">
              Ein gutes Stück Natur: <br /> Laminatfußböden aus der Purity Bio Selection.
            </p>
          </div>
        </div>
        {/* TODO: `Image` is currently not available in SSG */}
        {/* <div className="container flex justify-between h-24 -mt-4 space-x-3 lg:space-x-6 lg:-mt-16 lg:-ml-6 lg:px-0 third">
          <Image src="/certificates/hdm-blauer-engel-176.png" alt="Blauer Engel 176" width={144} height={96} />
          <Image src="/certificates/hdm-fsc.png" alt="FSC - zertifiziertes Holz" width={82} height={96} />
          <Image src="/certificates/hdm-formaldehydfrei.png" alt="ohne Formaldehyd" width={96} height={96} />
          <Image src="/certificates/hdm-e0.svg" alt="E0 - DIN EN 717-1" width={96} height={96} />
        </div> */}
        <div className="container flex justify-between -mt-4 lg:space-x-6 lg:-mt-16 lg:-ml-6 lg:px-0 third">
          <img
            className="hidden h-24 lg:inline-block"
            src="/certificates/hdm-blauer-engel-176.png"
            alt="Blauer Engel 176"
            loading="lazy"
          />
          <img
            className="h-20 lg:h-24"
            src="/certificates/hdm-fsc.png"
            alt="FSC - zertifiziertes Holz"
            loading="lazy"
          />
          <img
            className="h-20 lg:h-24"
            src="/certificates/hdm-formaldehydfrei.png"
            alt="ohne Formaldehyd"
            loading="lazy"
          />
          <img className="h-20 lg:h-24" src="/certificates/hdm-e0.svg" alt="E0 - DIN EN 717-1" loading="lazy" />
        </div>
        <div className="container flex flex-col self-end text-center sm:flex-row lg:text-left lg:-mt-6 lg:px-0 fourth">
          <Pdf title="Purity Bio Selection" filename="/documents/hdm-purity-bio-selection.pdf" />
          <button
            className="inline-block px-6 py-3 mt-4 text-sm text-white rounded-full sm:mt-0 sm:ml-10 bg-hdm hover:bg-hdm-dark"
            onClick={handleModalOpen}
          >
            <PlayIcon /> Video ansehen
          </button>
          <ModalVideo
            videoName="hdm-purity"
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onVideoClick={handleVideoClick}
          />
        </div>
      </GridBio>

      <div className="mt-40">
        <header className="container mt-6">
          <div className="lg:ml-32">
            <h2 className="text-4xl font-bold lg:text-5xl">Purity</h2>
            <p className="mt-4 text-xl leading-snug lg:text-2xl">
              Laminatboden <br /> Home Selection
            </p>
          </div>
        </header>

        <GridHome className="lg:container lg:mb-12">
          {/* TODO: `Image` is currently not available in SSG */}
          {/* <div className="mt-10 ml-6 lg:-mt-16 first">
            <Image
              src="/images/hdm-purity-home-selection.png"
              alt="Purity - Natürlich, sauber, rein"
              width={768}
              height={900}
            />
          </div> */}
          <picture className="mt-10 ml-6 lg:-mt-16 first">
            <source srcSet="/images/hdm-purity-home-selection.webp" type="image/webp" />
            <source srcSet="/images/hdm-purity-home-selection.png" type="image/png" />
            <img src="/images/hdm-purity-home-selection.png" alt="Purity - Natürlich, sauber, rein" />
          </picture>
          <div className="container mt-24 lg:grid lg:mt-20 second">
            <p className="lg:text-lg">
              In der Home-Selection der Purity-Laminatbodenbeläge by HDM zeichnet sich BLOOM durch beeindruckende
              Dekorbilder und eine feine Glattkante aus. <br /> <br /> Die Schadstofffreiheit dieser Böden spricht für
              sich, belegt durch die Auszeichnung mit dem Blauen Engel. Die einfache und schnelle Verlegung ist neben
              den idealen Pflegeeigenschaften ein weiteres Argument.
            </p>
            <h3 className="mt-8 text-xl font-bold">BLOOM – Einfach natürlich</h3>
          </div>
          {/* TODO: `Image` is currently not available in SSG */}
          {/* <div className="container flex justify-between h-24 mt-12 lg:mt-16 lg:space-x-6 third">
            <Image src="/certificates/hdm-blauer-engel-176.png" alt="Blauer Engel 176" width={144} height={96} />
            <Image src="/certificates/hdm-fsc.png" alt="FSC - zertifiziertes Holz" width={82} height={96} />
            <Image src="/certificates/hdm-e1.svg" alt="E1 - DIN EN 16156" width={96} height={96} />
          </div> */}
          <div className="container flex justify-between mt-12 lg:mt-16 lg:space-x-6 third">
            <img
              className="h-20 lg:h-24"
              src="/certificates/hdm-blauer-engel-176.png"
              alt="Blauer Engel 176"
              loading="lazy"
            />
            <img
              className="h-20 lg:h-24"
              src="/certificates/hdm-fsc.png"
              alt="FSC - zertifiziertes Holz"
              loading="lazy"
            />
            <img className="h-20 lg:h-24" src="/certificates/hdm-e1.svg" alt="E1 - DIN EN 16156" loading="lazy" />
          </div>
          <div className="container flex flex-col mt-16 text-center sm:flex-row lg:text-left lg:mt-24 fourth">
            <Pdf title="Purity Home Selection" filename="/documents/hdm-purity-home-selection.pdf" />
            <button
              className="inline-block px-6 py-3 mt-4 text-sm text-white rounded-full sm:mt-0 sm:ml-10 bg-hdm hover:bg-hdm-dark"
              onClick={handleModalOpen}
            >
              <PlayIcon /> Video ansehen
            </button>
            <ModalVideo
              videoName="hdm-purity"
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onVideoClick={handleVideoClick}
            />
          </div>
        </GridHome>
      </div>
    </section>
  )
}

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
      content: '';
    }
  }
`

const GridBio = styled.div`
  display: grid;
  grid-template-areas:
    'grid-item-1'
    'grid-item-2'
    'grid-item-3'
    'grid-item-4';
  grid-template-columns: 1fr;
  gap: 6rem;

  @media (min-width: 1024px) {
    grid-template-areas:
      'grid-item-1 grid-item-2'
      'grid-item-3 grid-item-4';
    grid-template-columns: 1.1fr 0.9fr;
  }

  & > .first {
    grid-area: grid-item-1;
  }

  & > .second {
    grid-area: grid-item-2;
  }

  & > .third {
    grid-area: grid-item-3;
  }

  & > .fourth {
    grid-area: grid-item-4;
  }
`

const GridHome = styled.div`
  display: grid;
  grid-template-areas:
    'grid-item-1'
    'grid-item-2'
    'grid-item-3'
    'grid-item-4';
  grid-template-columns: 1fr;
  column-gap: 6rem;

  @media (min-width: 1024px) {
    grid-template-areas:
      'grid-item-2 grid-item-1'
      'grid-item-3 grid-item-1'
      'grid-item-4 grid-item-1';
    grid-template-columns: 0.9fr 1.1fr;
  }

  & > .first {
    grid-area: grid-item-1;
  }

  & > .second {
    grid-area: grid-item-2;
  }

  & > .third {
    grid-area: grid-item-3;
  }

  & > .fourth {
    grid-area: grid-item-4;
    align-self: flex-end;
  }
`

// const Badge = styled.div`
const Badge = styled.img`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
`
