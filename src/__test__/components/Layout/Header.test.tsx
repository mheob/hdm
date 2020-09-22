import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Header from "@/components/Layout/Header"

describe("Header Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
