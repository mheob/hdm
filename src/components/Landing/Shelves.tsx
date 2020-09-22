type Props = {
  className?: string
}

const Shelves: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section id="shelves" className={`py-20 lg:mt-24 ${className}`}>
      <div className="container">
        <header className="lg:ml-32">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Regalböden / Möbelbauplatten</h2>
        </header>

        <div className="mt-8 lg:justify-between lg:ml-32 lg:flex">
          <div className="lg:w-1/3 lg:-mt-4 lg:mr-12">
            <picture className="block mt-12 lg:-mx-24">
              <source srcSet="/images/hdm-moebelbauplatten.webp" type="image/webp" />
              <source srcSet="/images/hdm-moebelbauplatten.jpeg" type="image/jpeg" />
              <img
                src="/images/hdm-moebelbauplatten.webp"
                alt="Möbelbauplatten - modernen Regalböden und Möbelbauplatten"
              />
            </picture>
          </div>

          <div className="lg:w-1/2 lg:mt-16">
            <p className="mt-12 lg:text-lg">
              Mit modernen Regalböden und Möbelbauplatten, in vielen Abmessungen und dem richtigen Zubehör, lässt sich
              einfach und schnell frischer Wind in alle Räume bringen.
            </p>
            <p className="mt-8 lg:text-lg">
              Ihrer Kreativität können Sie mit dem Holzzuschnitt-Programm von Holz Design Moers freien Lauf lassen.
            </p>
            <picture className="block mt-12 lg:mx-18">
              <source srcSet="/images/hdm-holzzuschnitt.webp" type="image/webp" />
              <source srcSet="/images/hdm-holzzuschnitt.png" type="image/png" />
              <img
                src="/images/hdm-holzzuschnitt.webp"
                alt="Möbelbauplatten - modernen Regalböden und Möbelbauplatten"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shelves
