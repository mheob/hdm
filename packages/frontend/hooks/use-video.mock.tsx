import { useVideo } from './use-video'

export default function UseVideoMock() {
  const [isModalOpen, handleModalOpen, handleModalClose, handleVideoClick] = useVideo()

  return (
    <>
      <div data-testid="isModalOpen">isModalOpen: {String(isModalOpen)}</div>
      <button data-testid="handleModalOpen" onClick={handleModalOpen}>
        handleModalOpen
      </button>
      <button data-testid="handleModalClose" onClick={handleModalClose}>
        handleModalClose
      </button>
      <video data-testid="handleVideoClick" onClick={handleVideoClick}>
        handleVideoClick
      </video>
    </>
  )
}
