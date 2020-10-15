import IndexPage from '@/components/Layout/index'
import { mount } from 'enzyme'
import React from 'react'

describe('Accessibility Testings', () => {
  test('fire the initFocusRingOnlyOnTab function', () => {
    jest.resetModules()
    const map = {}
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback
    })

    const wrapper = mount(<IndexPage />)

    map['keydown']({ key: 'Tab' })
    wrapper.update()
    map['mousedown']()
    wrapper.update()
    map['keydown']({ key: 'XXX' })
  })
})
