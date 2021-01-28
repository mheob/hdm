import styled from '@emotion/styled'

import Modal from '@/components/UI/Modal'

interface ModalVideoProps extends React.HTMLAttributes<HTMLElement> {
  videoName: string
  isOpen: boolean
  onClose?: () => void
  onVideoClick?: (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => void
}

export default function ModalVideo({ videoName, isOpen, onClose, onVideoClick, className = '' }: ModalVideoProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} data-testid="modalVideo">
      <VideoContainer className={`${className} flex items-center justify-center m-auto`}>
        <video className="outline-none" controls autoPlay onClick={onVideoClick}>
          <source src={`/videos/${videoName}.webm`} type="video/webm" />
          <source src={`/videos/${videoName}.mp4`} type="video/mp4" />
        </video>
      </VideoContainer>
    </Modal>
  )
}

const VideoContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 60%;
  }
`
