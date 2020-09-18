import { shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Privacy from "./Privacy"

describe("Privacy Testings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Privacy />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
