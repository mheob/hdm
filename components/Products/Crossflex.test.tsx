import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Crossflex from "./Crossflex"

describe("Crossflex Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Crossflex />)
  })

  test("matches snapshot", () => {
    console.log(wrapper.debug())
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
