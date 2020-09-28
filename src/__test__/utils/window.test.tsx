import { getWindowDimensions } from "@/utils/window"
import "jest"

describe("Window Utils Testings", () => {
  test("return a width of 999 and a height of 888", () => {
    global.innerWidth = 999
    global.innerHeight = 888
    expect(getWindowDimensions().width).toBe(999)
    expect(getWindowDimensions().height).toBe(888)
  })

  test("returned width and height are undefined", () => {
    global.innerWidth = undefined
    global.innerHeight = undefined
    expect(getWindowDimensions().width).toBeUndefined()
    expect(getWindowDimensions().height).toBeUndefined()
  })
})
