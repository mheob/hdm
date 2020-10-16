import Cerastar from '@/components/Landing/Cerastar'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Cerastar Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Cerastar />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
