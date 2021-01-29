// import Image from 'next/image'

export default function Strips({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id="strips" className={`overflow-x-hidden py-20 lg:mt-24 ${className}`}>
      <div className="container">
        <header className="lg:ml-32">
          <h2 className="text-4xl font-bold lg:text-5xl">
            UMA<sup>&reg;</sup>-Leisten
          </h2>
          <p className="mt-4 text-xl leading-snug lg:text-2xl">
            Für den nahezu dekorgleichen <br /> Wand- und Deckenabschluss
          </p>
        </header>

        <div className="flex flex-col-reverse justify-between lg:ml-32 lg:flex-row">
          <div className="lg:w-1/2">
            <p className="max-w-md mt-12 lg:text-lg">
              Ob als Abschluss für Dekorpaneele an Wand und Decke oder als Fußleiste für den sauberen Wandabschluss bei
              Bodenbelägen:
            </p>

            <p className="max-w-md mt-8 lg:text-lg">
              Die dekorativ ummantelten UMA<sup>&reg;</sup>-Leisten haben wir in zahlreichen Dekoren und verschiedenen
              Formatvarianten im Sortiment.
            </p>

            <div className="mt-16 lg:w-3/4">
              {/* TODO: `Image` is currently not available in SSG */}
              {/* <Image src="/images/hdm-fussleisten.jpg" alt="UMA - Fußleisten von HDM" width={706} height={204} /> */}
              <img
                className="mt-16 lg:w-3/4"
                src="/images/hdm-fussleisten.jpg"
                alt="UMA - Fußleisten von HDM"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:w-1/3 lg:-mt-40 lg:mr-12">
            {/* TODO: `Image` is currently not available in SSG */}
            {/* <div className="block mt-12 lg:-mx-24">
              <Image src="/images/hdm-leisten.png" alt="UMA - Leisten" width={768} height={779} />
            </div> */}
            <picture className="block mt-12 lg:-mx-24">
              <source srcSet="/images/hdm-leisten.webp" type="image/webp" />
              <source srcSet="/images/hdm-leisten.png" type="image/jpeg" />
              <img src="/images/hdm-leisten.png" alt="UMA - Leisten" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>

      <div className="container mt-24">
        <header className="lg:ml-32">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Massivholzleisten</h2>
        </header>

        <div className="flex flex-col justify-around lg:mt-40 lg:ml-32 lg:flex-row">
          <div className="lg:-mt-16 lg:w-1/3">
            {/* TODO: `Image` is currently not available in SSG */}
            {/* <div className="block mt-16 lg:-ml-32">
              <Image src="/images/hdm-leisten-massiv.png" alt="UMA - MassivholzLeisten" width={569} height={779} />
            </div> */}
            <picture className="block mt-16 lg:-ml-32">
              <source srcSet="/images/hdm-leisten-massiv.webp" type="image/webp" />
              <source srcSet="/images/hdm-leisten-massiv.png" type="image/jpeg" />
              <img src="/images/hdm-leisten-massiv.png" alt="UMA - Leisten" loading="lazy" />
            </picture>
          </div>

          <div className="mt-12 lg:-mt-16 lg:w-2/3 lg:max-w-md">
            <p className="lg:text-lg lg:-ml-20">
              Massivholzleisten bieten den letzten Schliff für die handwerkliche Perfektion. Astfreie Fichte-, Kiefer-
              und Buchenleisten - natur oder weiß lackiert - geben den perfekten Abschluss im Raum oder auch beim Bau
              von Holzmöbeln.
            </p>

            <p className="mt-12 lg:-ml-20 lg:text-lg">
              Auch das große Sortiment an Kurzleisten, Bastelleisten und Stäben überzeugt und lässt keine Wünsche offen.
            </p>

            <p className="mt-12 lg:-ml-20 lg:text-lg">
              Holz Design Moers: Leisten und Stäbe für jeden Zweck und jede Anwendung.
            </p>

            <ul className="mt-12 lg:mt-24 lg:text-lg">
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Rechteck- und Quadratleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Dreikantleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Winkelleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Hohlkehlleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Abdeck- und Tapetenleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Viertelstäbe
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Rund- und Halbrundstäbe
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                Schnitz- und Prägeleisten
              </li>
              <li>
                <svg
                  className="inline w-8 h-8 text-hdm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>{' '}
                <em>und noch mehr …</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
