import dynamic from 'next/dynamic'
// import Image from 'next/image'
import styled from '@emotion/styled'

export default function Massivholztueren({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  const Pdf = dynamic(() => import('@/components/Utils/Pdf'), { ssr: false })

  return (
    <section id="massivholztueren" className={`overflow-x-hidden relative lg:mt-24 ${className}`}>
      <Grid className="container pt-20 pb-20 bg-gray-100">
        <header className="lg:ml-32 lg:mt-8 first">
          <h2 className="text-4xl font-bold lg:text-5xl">Massivholztüren</h2>
          <p className="mt-4 text-xl leading-snug lg:text-2xl">
            Das Lamellen- und <br /> Gittertüren Programm
          </p>
        </header>

        {/* TODO: `Image` is currently not available in SSG */}
        {/* <div className="mt-16 -mx-6 lg:ml-0 lg:-mr-32 lg:mt-0 second">
          <Image
            src="/images/hdm-massivholztueren.png"
            alt="Massivholztüren - Sorglos die Schönheit massiven Holzes genießen"
            width={768}
            height={779}
          />
        </div> */}
        <picture className="block mt-16 -mx-6 lg:ml-0 lg:-mr-32 lg:mt-0 second">
          <source srcSet="/images/hdm-massivholztueren.webp" type="image/webp" />
          <source srcSet="/images/hdm-massivholztueren.png" type="image/png" />
          <img
            src="/images/hdm-massivholztueren.png"
            alt="Massivholztüren - Sorglos die Schönheit massiven Holzes genießen"
            loading="lazy"
          />
        </picture>

        <div className="lg:-mt-16 lg:ml-32 third">
          <p className="mt-12 lg:text-lg">
            Sorglos die Schönheit massiven Holzes genießen. Denn Holz ist pure Natur und bringt eine angenehme,
            freundliche Atmosphäre ins Haus, unterstrichen von ruhigen Licht- und Schattenspielen der offenen Lamellen-
            und Gittertüren.
          </p>

          <p className="mt-8 lg:text-lg">Massivholz sorgt für behagliche Wärme und ist nie langweilig.</p>

          <div className="mt-16 text-center lg:text-left lg:mt-24">
            <Pdf title="Massivholztüren Katalog" filename="/documents/hdm-massivholztueren.pdf" />
          </div>
        </div>
      </Grid>
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'grid-item-1'
    'grid-item-2'
    'grid-item-3';
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-areas:
      'grid-item-1 grid-item-2'
      'grid-item-3 grid-item-2';
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
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
`
