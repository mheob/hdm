import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

import IndexPage from "./index"
import Crossflex from "@/components/Products/Crossflex"
import Purity from "@/components/Products/Purity"
import Cerastar from "@/components/Products/Cerastar"
import Massivholztueren from "@/components/Products/Massivholztueren"
import Accessories from "@/components/Products/Accessories"

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

  test("render one Cerastar component", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Cerastar)).toHaveLength(1)
  })

  test("render one Massivholztueren component", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Massivholztueren)).toHaveLength(1)
  })

  test("render one Accessories component", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Accessories)).toHaveLength(1)
  })
})
