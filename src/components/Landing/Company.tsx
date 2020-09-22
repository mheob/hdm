import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "grid-item-1"
    "grid-item-2";
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-areas: "grid-item-1 grid-item-2";
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }

  & > :nth-child(1) {
    grid-area: grid-item-1;
  }

  & > :nth-child(2) {
    grid-area: grid-item-2;
  }
`

type Props = {
  className?: string
}

const Company: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section
      className={`bg-gray-100 lg:bg-transparent mt-10 pt-10 lg:max-w-1400 mx-auto overflow-x-hidden lg:mt-24 ${className}`}
    >
      <header className="container lg:mt-16 lg:ml-24">
        <h2 className="text-4xl font-bold lg:text-5xl">Unternehmen</h2>
      </header>

      <div className="relative mt-12 lg:mt-16 pb-16/9">
        <iframe
          className="absolute w-full h-full"
          src="https://www.youtube-nocookie.com/embed/-7ki7fK1prA?rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>

      <div className="lg:bg-gray-100">
        <Grid className="container pt-10 pb-20 lg:pt-20">
          <div>
            <h3 className="font-bold text-hdm lg:text-xl">
              Holz Design Moers GmbH ist strategischer Partner für Baumarktgruppen, Baufachmärkte und den Fachhandel.
            </h3>

            <p className="mt-8 lg:mt-16 lg:text-lg lg:ml-24">
              Als Vollsortimenter für den Innenausbau bietet das Unternehmen seinen Handelspartnern ein umfangreiches
              Portfolio zur Verkleidung und Gestaltung von Boden, Wand und Decke: Laminat- und Designböden, Wand- und
              Deckenpaneele, dazu ein großes Massivholz- und Holzwerkstoffsortiment: Leisten sowie Regalböden und
              Möbelbauplatten.
            </p>
            <p className="mt-8 lg:text-lg lg:ml-24">
              Das Angebot wird durch ein umfassendes Zubehörprogramm ergänzt und komplettiert.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <p className="lg:text-lg lg:mx-12">
              Bereits <strong className="text-hdm">1968</strong> präsentierte Firmengründer Arnold Dammers in Moers das
              weltweit erste Dekorpaneel.
            </p>
            <p className="mt-8 lg:text-lg lg:mx-12">
              <strong className="text-hdm">1981</strong> entwickelte Dammers die dekorativ ummantelte Leiste, die sich
              heute als UMA®-Leiste im Markt etabliert hat. HDM gilt als Erfinder der beiden trendsetzenden Produkte für
              den dekorativen Innenausbau.
            </p>
            <p className="mt-8 lg:text-lg lg:mx-12">
              <strong className="text-hdm">1989</strong> folgte die Entwicklung einer Elektronenstrahlgehärteten
              Flächenveredlung, die unter dem Markennamen ELESGO® eingeführt wurde. Die besonders kratzfeste Oberfläche
              veredelt unter anderem Labortische, Möbelfronten und liefert die Ideen für viele weitere Anwendungen.
            </p>
            <p className="mt-8 lg:text-lg lg:mx-12">
              Im Jahr <strong className="text-hdm">2000</strong> lancierte das Moerser Unternehmen den ersten
              Superglanz- Laminatboden mit Elesgo-Oberfläche.
            </p>
          </div>
        </Grid>
      </div>
    </section>
  )
}

export default Company
