type Props = {
  className?: string
}

const Strips: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <section id="strips" className={`bg-gray-100 overflow-x-hidden py-20 lg:mt-24 ${className}`}>
      <div className="container">
        <header className="lg:ml-32">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Leisten</h2>
        </header>

        <div className="flex flex-col-reverse justify-between lg:ml-32 lg:flex-row">
          <div className="lg:w-1/2">
            <p className="mt-12 lg:text-lg">
              Massivholzleisten bieten den letzten Schliff für die handwerkliche Perfektion. Astfreie Fichte- und
              Kieferleisten geben den perfekten und natürlichen Abschluss.
            </p>
            <p className="mt-8 lg:text-lg">
              Die dekorativ ummantelten UMA®-Leisten, für den nahezu dekorgleichen Abschluss von Bodenbelägen, gibt es
              in vier Formaten.
            </p>
            <p className="mt-8 font-semibold lg:text-lg">Leisten für jeden Zweck und jede Anwendung von HDM.</p>
          </div>

          <div className="lg:w-1/3 lg:-mt-4 lg:mr-12">
            <picture className="block mt-12 lg:-mx-24">
              <source srcSet="/images/hdm-leisten.webp" type="image/webp" />
              <source srcSet="/images/hdm-leisten.jpeg" type="image/jpeg" />
              <img src="/images/hdm-leisten.webp" alt="Möbelbauplatten - modernen Regalböden und Möbelbauplatten" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strips
