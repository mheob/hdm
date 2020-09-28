import Strips from "@/components/Landing/Strips"
import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Strips Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Strips />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
