import { render } from '@/test/test-utils'

import Massivholztueren from './Massivholztueren'

describe('Massivholztueren component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Massivholztueren />)
    expect(getByText('Massivholztüren')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
