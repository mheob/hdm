/* eslint-disable @typescript-eslint/no-empty-function */
import { shallow, mount } from "enzyme"
import toJSON from "enzyme-to-json"

import Company from "@/components/Landing/Company"

describe("Company Testings", () => {
  const stubElement = window.HTMLMediaElement.prototype

  test("matches snapshot", () => {
    const wrapper = shallow(<Company />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test("simulate a click on the video element to play the video", () => {
    const playStub = jest.spyOn(stubElement, "play").mockImplementation(async () => {})

    mount(<Company />)
      .find("video")
      .simulate("click")

    expect(playStub).toHaveBeenCalled()
  })

  test("simulate a click on the video element to pause the video", () => {
    const pauseStub = jest.spyOn(stubElement, "pause").mockImplementation(() => {})
    Object.defineProperty(stubElement, "paused", { value: false })

    mount(<Company />)
      .find("video")
      .simulate("click")

    expect(pauseStub).toHaveBeenCalled()
  })
})
