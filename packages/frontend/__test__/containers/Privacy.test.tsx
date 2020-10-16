import Privacy from '@/containers/Privacy'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Privacy Testings', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Privacy />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
