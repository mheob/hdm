import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

import IndexPage from "./index"
import Crossflex from "@/components/Products/Crossflex"
import Purity from "@/components/Products/Purity"

describe("IndexPage Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Crossflex />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test("render one Crossflex component", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Crossflex)).toHaveLength(1)
  })

  test("render one Purity component", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Purity)).toHaveLength(1)
  })
})
