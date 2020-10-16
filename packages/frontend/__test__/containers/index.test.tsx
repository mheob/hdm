import Accessories from '@/components/Landing/Accessories'
import Cerastar from '@/components/Landing/Cerastar'
import Company from '@/components/Landing/Company'
import Crossflex from '@/components/Landing/Crossflex'
import Massivholztueren from '@/components/Landing/Massivholztueren'
import Purity from '@/components/Landing/Purity'
import IndexPage from '@/containers/index'
import { shallow, ShallowWrapper } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('IndexPage Testings', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<IndexPage />)
  })

  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test('render one Crossflex component', () => {
    expect(wrapper.find(Crossflex)).toHaveLength(1)
  })

  test('render one Purity component', () => {
    expect(wrapper.find(Purity)).toHaveLength(1)
  })

  test('render one Cerastar component', () => {
    expect(wrapper.find(Cerastar)).toHaveLength(1)
  })

  test('render one Massivholztueren component', () => {
    expect(wrapper.find(Massivholztueren)).toHaveLength(1)
  })

  test('render one Accessories component', () => {
    expect(wrapper.find(Accessories)).toHaveLength(1)
  })

  test('render one Company component', () => {
    expect(wrapper.find(Company)).toHaveLength(1)
  })
})
