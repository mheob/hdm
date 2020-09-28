import Accessories from "@/components/Landing/Accessories"
import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Accessories Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Accessories />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
