import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Cerastar from "@/components/Landing/Cerastar"

describe("Cerastar Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Cerastar />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
