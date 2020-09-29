import Imprint from "@/containers/Imprint"
import { shallow } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Imprint Testings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Imprint />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
