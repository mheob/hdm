import { render } from '@/test/test-utils'

import Shelves from './Shelves'

describe('Shelves component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Shelves />)
    expect(getByText('Regalböden / Möbelbauplatten')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
