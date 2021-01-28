import { act, fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useWindowDimensions } from './use-window-dimensions'

describe('useWindowDimensions hook', () => {
  it('should set the initial width and height', () => {
    global.innerWidth = 999
    global.innerHeight = 888

    const { result } = renderHook(() => useWindowDimensions())

    expect(result.current.width).toBe(999)
    expect(result.current.height).toBe(888)
  })

  it('should set the resized width and height', () => {
    const { result } = renderHook(() => useWindowDimensions())

    act(() => {
      global.innerWidth = 555
      global.innerHeight = 444
    })
    fireEvent(window, new Event('resize'))

    expect(result.current.width).toBe(555)
    expect(result.current.height).toBe(444)
  })
})
