import { render } from '@/test/test-utils'

import Pdf from './Pdf'

jest.mock('react-pdf/dist/esm/entry.webpack', () => {
  return {
    pdfjs: {
      GlobalWorkerOptions: {
        workerSrc: 'abc',
      },
    },
    Outline: null,
    /* eslint-disable react/display-name, react/prop-types */
    Page: () => <div>page</div>,
    Document: ({ onLoadSuccess = (pdf = { numPages: 4 }) => pdf.numPages }) => {
      return <div>{onLoadSuccess({ numPages: 4 })}</div>
    },
    /* eslint-enable react/display-name, react/prop-types */
  }
})

describe('Pdf component', () => {
  it('matches snapshot', () => {
    const { container, getByTestId } = render(<Pdf filename="" title="" />)
    expect(getByTestId(/open-modal/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Test the `Modal`, `links` and `utils`
