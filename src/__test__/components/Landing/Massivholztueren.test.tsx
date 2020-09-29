import Massivholztueren from "@/components/Landing/Massivholztueren"
import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Massivholztueren Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Massivholztueren />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
