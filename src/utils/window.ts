/**
 * Returns the window dimensions.
 */
export function getWindowDimensions() {
  if (typeof window !== "undefined" && window.innerWidth && window.innerHeight) {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }

  return {}
}
