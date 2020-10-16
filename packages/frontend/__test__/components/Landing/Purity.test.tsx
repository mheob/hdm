import Purity from '@/components/Landing/Purity'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Purity Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Purity />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
