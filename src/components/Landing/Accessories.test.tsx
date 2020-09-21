import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Accessories from "./Accessories"

describe("Accessories Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Accessories />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
