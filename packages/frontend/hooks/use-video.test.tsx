import { render, RenderResult } from '@/test/test-utils'
import userEvent from '@testing-library/user-event'

import UseVideoMock from './use-video.mock'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const playStub = jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(async () => {})

describe('useVideo hook', () => {
  let screen: RenderResult

  beforeEach(() => {
    screen = render(<UseVideoMock />)
  })

  it('should have the modal not open', () => {
    expect(screen.getByTestId(/isModalOpen/i)).toHaveTextContent('isModalOpen: false')
  })

  it('should open the modal after click on `handleModalOpen`', () => {
    userEvent.click(screen.getByTestId(/handleModalOpen/i))
    expect(screen.getByTestId(/isModalOpen/i)).toHaveTextContent('isModalOpen: true')
  })

  it('should close the modal after click on `handleModalClose`', () => {
    userEvent.click(screen.getByTestId(/handleModalClose/i))
    expect(screen.getByTestId(/isModalOpen/i)).toHaveTextContent('isModalOpen: false')
  })

  it('should play the video after click on `handleVideoClick`', () => {
    userEvent.click(screen.getByTestId(/handleVideoClick/i))
    expect(playStub).toHaveBeenCalled()
    playStub.mockRestore()
  })

  // TODO: Add a test for pause the video if is not paused
})
