import { render } from '@/test/test-utils'

import ModalVideo from './ModalVideo'

describe('ModalVideo component', () => {
  it('matches snapshot', () => {
    const { container, getByTestId } = render(<ModalVideo isOpen={true} videoName="" />)
    expect(getByTestId(/modalVideo/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the functions
