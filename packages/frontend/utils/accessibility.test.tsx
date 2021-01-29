import { fireEvent, render } from '@/test/test-utils'

import Layout from '@/components/Layout/index'

describe('Accessibility utils', () => {
  beforeAll(() => {
    render(<Layout />)
  })

  it('adds `user-is-tabbing` class to the body, if `tab` is pressed', () => {
    fireEvent.keyDown(window, { key: 'Tab' })
    expect(document.body.classList.contains('user-is-tabbing')).toBeTruthy()
  })

  it('removes `user-is-tabbing` class to the body, if the left mouse button is pressed', () => {
    fireEvent.mouseDown(window, { button: 1 })
    expect(document.body.classList.contains('user-is-tabbing')).toBeFalsy()
  })

  it('adds nothing, if any key except `tab` is pressed', () => {
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(document.body.classList.contains('user-is-tabbing')).toBeFalsy()
  })
})
