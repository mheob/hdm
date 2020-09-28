import Header from "@/components/Layout/Header"
import { withTestRouter } from "@/__test__/__hoc__/withTestRouter"
import { mount, shallow } from "enzyme"
import toJSON from "enzyme-to-json"

describe("Header Testings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test("render one component with the id #landing-main-nav and #landing-eco", () => {
    const wrapper = mount(withTestRouter(<Header />, { pathname: "/" }))
    expect(wrapper.find("#landing-main-nav")).toHaveLength(1)
    expect(wrapper.find("#landing-eco")).toHaveLength(1)
  })

  test("don't render a component with the id #landing-main-nav and #landing-eco", () => {
    const wrapper = mount(withTestRouter(<Header />, { pathname: "/abc" }))
    expect(wrapper.find("#landing-main-nav")).toHaveLength(0)
    expect(wrapper.find("#landing-eco")).toHaveLength(0)
  })
})
