import { render } from '@/test/test-utils'

import Company from './Company'

describe('Downloads component', () => {
  it('matches snapshot', () => {
    const { container, getByText } = render(<Company />)
    expect(getByText('Unternehmen')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})

// TODO: Remove the no more needed tests

// describe('Company Testings', () => {
//   const stubElement = window.HTMLMediaElement.prototype

//   test('matches snapshot', () => {
//     const wrapper = shallow(<Company />)
//     expect(toJSON(wrapper)).toMatchSnapshot()
//   })

//   test('simulate a click on the video element to play the video', () => {
//     const playStub = jest.spyOn(stubElement, 'play').mockImplementation(async () => {})

//     mount(<Company />)
//       .find('video')
//       .simulate('click')

//     expect(playStub).toHaveBeenCalled()
//   })

//   test('simulate a click on the video element to pause the video', () => {
//     const pauseStub = jest.spyOn(stubElement, 'pause').mockImplementation(() => {})
//     Object.defineProperty(stubElement, 'paused', { value: false })

//     mount(<Company />)
//       .find('video')
//       .simulate('click')

//     expect(pauseStub).toHaveBeenCalled()
//   })
// })
