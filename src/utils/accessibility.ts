/**
 * Initialize an event listener for using the focusring only for the keyboard navigation.
 */
export function initFocusRingOnlyOnTab() {
  /**
   * Adds a `user-is-tabbing` class to the body and handles the first click on the `tab`key.
   *
   * @param keyDownEvent The event fired when a key is pressed
   */
  function handleFirstTab(keyDownEvent: KeyboardEvent) {
    if (keyDownEvent.key === "Tab") {
      document.body.classList.add("user-is-tabbing")

      window.removeEventListener("keydown", handleFirstTab)
      window.addEventListener("mousedown", handleMouseDownOnce)
    }
  }

  /**
   * Removes the `user-is-tabbing` class from the body and resets the event listener state back to search for a key
   * input.
   */
  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing")

    window.removeEventListener("mousedown", handleMouseDownOnce)
    window.addEventListener("keydown", handleFirstTab)
  }

  window.addEventListener("keydown", handleFirstTab)

  return true
}
