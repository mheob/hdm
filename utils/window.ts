/**
 * Returns the window dimensions.
 */
export function getWindowDimensions() {
  if (process.browser) {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }

  return {}
}
