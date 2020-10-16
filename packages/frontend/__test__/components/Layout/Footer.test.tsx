import Footer from '@/components/Layout/Footer'
import { withTestRouter } from '@/__test__/__hoc__/withTestRouter'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

describe('Footer Testings', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Footer />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test('render one button component with the id #logo', () => {
    const wrapper = mount(withTestRouter(<Footer />, { pathname: '/' }))
    const button = wrapper.find('#logo')
    button.simulate('click')
    expect(button).toHaveLength(1)
  })

  test("don't render an button component with the id #logo", () => {
    const wrapper = mount(withTestRouter(<Footer />, { pathname: '/abc' }))
    expect(wrapper.find('#logo')).toHaveLength(0)
  })

  test('simulate a click on the button with he id #back-to-top-button', () => {
    const wrapper = mount(withTestRouter(<Footer />, { pathname: '/' }))
    const button = wrapper.find('#back-to-top-button')
    button.simulate('click')
    expect(button).toHaveLength(1)
  })
})
