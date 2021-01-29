import { render } from '@/test/test-utils'

import Cerastar from './Cerastar'

describe('Cerastar component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Cerastar />)
    expect(getByText('Cerastar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
