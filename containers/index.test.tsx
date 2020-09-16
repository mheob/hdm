import { shallow } from "enzyme"

import IndexPage from "./index"
import Crossflex from "@/components/Layout/Products/Crossflex"

describe("IndexPage Testings", () => {
  test("render one div element", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find(Crossflex)).toHaveLength(1)
  })
})
