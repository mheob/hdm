import { useRef, useEffect } from 'react'
import { Portal } from 'react-portal'
import { CSSTransition } from 'react-transition-group'
import { css } from '@emotion/react'

function lockScroll(state: boolean) {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = state ? 'hidden' : ''
}

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean
  closeOnClick?: boolean
  animationConfiguration?: { duration: number; easing: string }
  onClose?(): void
}

export default function Modal({
  isOpen,
  closeOnClick = true,
  onClose = () => null,
  animationConfiguration = { duration: 300, easing: 'ease' },
  children,
  ...rest
}: ModalProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const portal: any = useRef(null)

  if (portal?.current) {
    portal.current.defaultNode.style['position'] = 'relative'
    portal.current.defaultNode.style['zIndex'] = 999
  }

  useEffect(() => {
    const onEscPressed = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onEscPressed)
    return document.removeEventListener('keydown', onEscPressed)
  }, [])

  useEffect(() => {
    lockScroll(isOpen)
  }, [isOpen])

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!closeOnClick) return
    event.preventDefault()
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <Portal ref={portal}>
      <CSSTransition in={isOpen} classNames="overlay" unmountOnExit timeout={animationConfiguration.duration}>
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: scroll;
            background: rgba(0, 105, 153, 0.5);
            transition: opacity ${animationConfiguration.duration}ms ${animationConfiguration.easing};
            -webkit-overflow-scrolling: touch;

            &.overlay-enter-done {
              opacity: 1;
            }
            &.overlay-exit,
            &.overlay-enter {
              opacity: 0;
            }
          `}
          onClick={handleModalClose}
          {...rest}
        >
          {children}
        </div>
      </CSSTransition>
    </Portal>
  )
}
