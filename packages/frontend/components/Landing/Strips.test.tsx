import { render } from '@/test/test-utils'

import Strips from './Strips'

describe('Strips component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Strips />)
    expect(getByText('Massivholzleisten')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
