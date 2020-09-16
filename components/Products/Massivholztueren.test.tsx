import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Massivholztueren from "./Massivholztueren"

describe("Massivholztueren Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Massivholztueren />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
