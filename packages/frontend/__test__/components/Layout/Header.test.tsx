import Header from '@/components/Layout/Header'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Header Testings', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
