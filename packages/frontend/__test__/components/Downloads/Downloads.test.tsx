import Downloads from '@/components/Downloads/Downloads'
import { IFiles } from '@/models/files'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

const dummyFiles: IFiles[] = [
  {
    id: '1',
    displayName: 'DUMMY NAME',
    path: 'DUMMY PATH',
  },
]

describe('IndexPage Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Downloads title="FSC / PEFC" files={dummyFiles} />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  // test('render one Crossflex component', () => {
  //   expect(wrapper.find(Downloads)).toHaveLength(2)
  // })
})
