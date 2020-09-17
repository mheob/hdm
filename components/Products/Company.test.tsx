import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Company from "./Company"

describe("Company Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Company />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
