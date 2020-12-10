import { useState } from 'react'

export function useVideo(): [
  boolean,
  () => void,
  () => void,
  (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => void
] {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    event.preventDefault()
    const element = event.currentTarget
    if (element.paused) element.play()
    else element.pause()
  }

  return [isModalOpen, handleModalOpen, handleModalClose, handleVideoClick]
}
