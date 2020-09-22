import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Shelves from "@/components/Landing/Shelves"

describe("Shelves Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Shelves />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
