import { render } from '@/test/test-utils'

import Header from './Header'

describe('Header component', () => {
  it('matches snapshot', () => {
    const { container, getByTestId } = render(<Header />)
    expect(getByTestId(/main-logo/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the `links` and `utils`
