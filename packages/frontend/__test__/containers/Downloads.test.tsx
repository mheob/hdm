import Downloads from '@/components/Downloads/Downloads'
import DownloadContainer from '@/containers/Downloads'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('IndexPage Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<DownloadContainer />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test('render one Downloads component', () => {
    expect(wrapper.find(Downloads)).toHaveLength(2)
  })
})
