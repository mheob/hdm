import { render } from '@/test/test-utils'

import Accessories from './Accessories'

describe('Accessories component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Accessories />)
    expect(getByText('DAZU')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
