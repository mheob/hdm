// Type definitions for react-pdf 5.0
// Project: https://github.com/wojtekmaj/react-pdf/
// Definitions by: CodeDaraW <https://github.com/CodeDaraW>
//                 Nathan Hardy <https://github.com/nhardy>
//                 Alexander Böhm <https://github.com/mheob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

declare module 'react-pdf/dist/esm/entry.webpack' {
  import Document from './dist/Document'
  import Outline from './dist/Outline'
  import Page from './dist/Page'
  import pdfjs from './dist/pdfjs-dist'

  export { pdfjs, Document, Page, Outline }
}
