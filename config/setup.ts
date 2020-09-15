/* eslint-disable @typescript-eslint/no-var-requires */
import enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

enzyme.configure({ adapter: new Adapter() })

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}
Object.defineProperty(window, "scrollTo", { value: noop, writable: true })

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: function () {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: function () {},
    }
  }
