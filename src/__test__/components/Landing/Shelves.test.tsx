import Shelves from '@/components/Landing/Shelves'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Shelves Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Shelves />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
