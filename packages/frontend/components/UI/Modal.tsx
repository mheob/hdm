import { useEffect, useState } from 'react'
import { Overlay } from 'react-portal-overlay'
import { css } from '@emotion/react'

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose, className = '', children }: ModalProps) {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(isOpen)
  }, [isOpen])

  const handleModalClose = () => {
    setIsOpenState(false)
    onClose()
  }

  return (
    <Overlay
      className={`modal ${className}`}
      open={isOpenState}
      onClose={handleModalClose}
      closeOnClick
      css={css`
        position: fix;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 105, 153, 0.5);
      `}
    >
      {children}
    </Overlay>
  )
}
