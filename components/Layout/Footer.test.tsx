import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Footer from "./Footer"

describe("Footer Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
