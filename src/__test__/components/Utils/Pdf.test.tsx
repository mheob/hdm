import Pdf from "@/components/Utils/Pdf"
import { shallow, ShallowWrapper } from "enzyme"
import toJSON from "enzyme-to-json"

jest.mock("react-pdf/dist/esm/entry.webpack", () => {
  return {
    pdfjs: {
      GlobalWorkerOptions: {
        workerSrc: "abc",
      },
    },
    Outline: null,
    /* eslint-disable react/display-name */
    Page: () => <div>page</div>,
    Document: ({ onLoadSuccess = (pdf = { numPages: 4 }) => pdf.numPages }) => {
      return <div>{onLoadSuccess({ numPages: 4 })}</div>
    },
    /* eslint-enable react/display-name */
  }
})

describe("Pdf Testings", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Pdf filename="" title="" />)
  })

  test("matches snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  // TODO: write more test for the functionalities
})
