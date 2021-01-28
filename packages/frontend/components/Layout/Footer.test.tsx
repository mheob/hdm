import userEvent from '@testing-library/user-event'

import { render } from '@/test/test-utils'
import { withTestRouter } from '@/test/withTestRouter'

import Footer from './Footer'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Footer />)
    expect(getByText('Nehmen Sie Kontakt mit uns auf')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render a button component with the test id `logo`, if on homepage', () => {
    const { getByTestId } = render(withTestRouter(<Footer />, { pathname: '/' }))
    const logoButton = getByTestId(/logo/i)
    userEvent.click(logoButton)
    expect(logoButton).toBeInTheDocument()
  })

  it("don't render a button component with the test id `logo`, if not on homepage", () => {
    const { queryByTestId } = render(withTestRouter(<Footer />, { pathname: '/abc' }))
    expect(queryByTestId(/logo/i)).toBeNull()
  })

  it('render a button component with the test id `back-to-top-button`', () => {
    const { getByTestId } = render(<Footer />)
    const backToTopButton = getByTestId(/back-to-top-button/i)
    userEvent.click(backToTopButton)
    expect(backToTopButton).toBeInTheDocument()
  })
})
