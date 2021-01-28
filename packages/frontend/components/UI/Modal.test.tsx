import { render } from '@/test/test-utils'

import Modal from './Modal'

describe('Modal component', () => {
  it('matches snapshot', () => {
    const { container, getByTestId } = render(<Modal isOpen={true} />)
    expect(getByTestId(/modal/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the functions
