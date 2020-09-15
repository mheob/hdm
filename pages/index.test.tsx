import { shallow } from "enzyme"

import IndexPage from "./index"

describe("IndexPage Testings", () => {
  test("render one div element", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find("div")).toHaveLength(1)
  })
})
