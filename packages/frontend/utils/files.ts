/**
 * Open the 'SaveAs' dialog to download a file.
 *
 * @param fileName The file to download.
 */
export function downloadFile(fileName: string) {
  const tempWindow = window.open(fileName)

  if (!tempWindow) return

  tempWindow.document.execCommand('SaveAs')
  tempWindow.close()

  const save = document.createElement('a')
  save.href = fileName
  save.target = '_blank'
  save.download = fileName.substring(fileName.lastIndexOf('/') + 1)

  if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search('Chrome') < 0) {
    document.location.href = save.href
  } else {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    })
    save.dispatchEvent(evt)
    ;(window.URL || window.webkitURL).revokeObjectURL(save.href)
  }
}
