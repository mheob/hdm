import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Strips from "./Strips"

describe("Strips Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Strips />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
