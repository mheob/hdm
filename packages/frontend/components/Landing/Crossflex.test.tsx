import { render } from '@/test/test-utils'

import Crossflex from './Crossflex'

describe('Crossflex component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Crossflex />)
    expect(getByText('Crossflex')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the `Modal` and `Hooks`
