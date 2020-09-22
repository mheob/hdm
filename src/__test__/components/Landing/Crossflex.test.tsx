import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Crossflex from "@/components/Landing/Crossflex"

describe("Crossflex Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Crossflex />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
