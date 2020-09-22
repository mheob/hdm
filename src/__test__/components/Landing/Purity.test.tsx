import { ShallowWrapper, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

import Purity from "@/components/Landing/Purity"

describe("Purity Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Purity />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
