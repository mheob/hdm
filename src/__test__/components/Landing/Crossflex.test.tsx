import Crossflex from "@/components/Landing/Crossflex"
import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Crossflex Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Crossflex />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
