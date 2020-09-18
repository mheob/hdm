import { shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Imprint from "./Imprint"

describe("Imprint Testings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Imprint />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
