import Image from 'next/image'
import styled from '@emotion/styled'

export default function Accessories({ className = '' }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id="accessories" className={`bg-gray-100 overflow-x-hidden lg:mt-24 ${className}`}>
      <BackgroundImage>
        <div className="container py-20">
          <header className="lg:mt-16 lg:ml-32">
            <h2 className="text-4xl font-bold lg:text-5xl">
              DAZU<sup className="font-normal">&reg;</sup>
            </h2>
            <p className="mt-4 text-xl leading-snug lg:text-2xl">Das Zubehörprogramm</p>
          </header>

          <div className="lg:justify-between lg:ml-32 lg:flex lg:mt-8">
            <div className="lg:w-1/3 lg:-mt-4 lg:mr-12">
              <div className="mt-12 lg:-mx-24">
                <Image
                  src="/images/hdm-dazu-zubehoer.jpg"
                  alt="Möbelbauplatten - modernen Regalböden und Möbelbauplatten"
                  width={768}
                  height={432}
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <p className="mt-12 lg:text-lg">
                Alles was zum Anbringen von Dekorpaneele, zur Bodenverlegung, zum Bau von Mobiliar oder dem dekorativen
                Innenausbau notwendig ist, hat Holz Design Moers im DAZU<sup>&reg;</sup>-Zubehörprogramm.
              </p>
              <p className="mt-12 lg:text-lg">
                Verlegung und Montage einfach gemacht - mit dem DAZU<sup>&reg;</sup>-Zubehörprogramm.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

const BackgroundImage = styled.div`
  @media (min-width: 1024px) {
    background-image: linear-gradient(rgba(247, 250, 252, 0.95), rgba(247, 250, 252, 0.95)), url(/ci/hdm-bg.svg);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100% auto;
  }
`
