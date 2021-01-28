import { render } from '@/test/test-utils'

import Layout from '.'

describe('Layout component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Layout />)
    expect(getByText(/Produkt. Idee. Erfolg./i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the `links` and `utils`
