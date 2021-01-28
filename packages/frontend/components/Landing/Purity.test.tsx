import { render } from '@/test/test-utils'

import Purity from './Purity'

describe('Purity component', () => {
  it('matches snapshot', () => {
    const { container, getAllByText } = render(<Purity />)
    expect(getAllByText('Purity')[0]).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the `Modal` and `Hooks`
