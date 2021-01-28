import { render } from '@/test/test-utils'

import Downloads from './Downloads'
import { IFiles } from '@/models/files'

const dummyFiles: IFiles[] = [
  {
    id: '1',
    displayName: 'DUMMY NAME',
    path: 'DUMMY PATH',
  },
]

describe('Downloads component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Downloads title="FSC / PEFC" files={dummyFiles} />)
    expect(getByText('FSC / PEFC')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
