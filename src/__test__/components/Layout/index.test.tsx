import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import IndexPage from "@/components/Layout/index"

describe("IndexPage Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<IndexPage />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
