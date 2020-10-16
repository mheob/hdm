import { IFiles } from '@/models/files'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

interface DownloadsProps extends React.HTMLAttributes<HTMLElement> {
  files: IFiles[]
  title: string
}

export default function Downloads({ files, title, className = '' }: DownloadsProps) {
  const Pdf = dynamic(() => import('@/components/Utils/Pdf'), { ssr: false })

  return (
    <SectionStyled id="kontakt" className={`container lg:px-32 ${className}`}>
      <h3 className="mt-24 text-2xl font-bold lg:text-3xl">{title}</h3>

      <div className="mt-8 download-list">
        {files.map(file => (
          <div key={file.id} className="lg:text-lg download-list__item">
            <Pdf title={file.displayName} filename={file.path} buttonStyleLight buttonWidthFull />
          </div>
        ))}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  display: block;

  .download-list {
    &__item {
      margin-top: 1rem;
    }

    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      &__item {
        flex: 40%;
        margin-top: 2rem;

        &:nth-of-type(even) {
          margin-left: 2rem;
        }
      }
    }
  }
`
