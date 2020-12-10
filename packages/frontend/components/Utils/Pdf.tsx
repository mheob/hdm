import React, { useState } from 'react'
import { PDFDocumentProxy } from 'pdfjs-dist'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import Modal from '@/components/UI/Modal'
import { useWindowDimensions } from '@/hooks/use-window-dimensions'
import { downloadFile } from '@/utils/files'

interface PdfProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  filename: string
  buttonStyleLight?: boolean
  buttonWidthFull?: boolean
}

export default function Pdf({
  title,
  filename,
  buttonStyleLight = false,
  buttonWidthFull = false,
  className = '',
}: PdfProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const { width = 0 } = useWindowDimensions()

  const buttonStyle = buttonStyleLight
    ? 'text-lg lg:text-xl text-hdm-dark hover:text-white border border-hdm-dark hover:bg-hdm-dark'
    : 'text-white rounded-full bg-hdm hover:bg-hdm-dark'

  const handleDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumPages(numPages)
  }

  const goToPreviousPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1)
  }

  const goToNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1)
  }

  return (
    <>
      {width < 1024 ? (
        <a
          className={`inline-block px-6 py-3 text-sm ${buttonStyle}${buttonWidthFull ? ' w-full' : ''}`}
          href={filename}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => setIsOpen(true)}
        >
          {pdfIcon} {title}
        </a>
      ) : (
        <>
          <button
            className={`inline-block px-6 py-3 text-sm ${buttonStyle}${buttonWidthFull ? ' w-full' : ''}`}
            onClick={() => setIsOpen(true)}
          >
            {pdfIcon} {title}
          </button>

          {process.browser && (
            <Modal className={`${className}`} isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <button
                className={`p-4 ml-32 rounded-full bg-hdm hover:bg-hdm-dark prev ${pageNumber <= 1 ? 'invisible' : ''}`}
                disabled={pageNumber <= 1}
                onClick={goToPreviousPage}
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <Document file={filename} onLoadSuccess={handleDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>

              <button
                className={`p-4 mr-32 rounded-full bg-hdm hover:bg-hdm-dark next ${
                  pageNumber >= numPages ? 'invisible' : ''
                }`}
                disabled={pageNumber >= numPages}
                onClick={goToNextPage}
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                className="absolute top-0 right-0 px-6 py-3 m-8 text-sm text-white rounded-full bg-hdm hover:bg-hdm-dark"
                onClick={() => downloadFile(filename)}
              >
                <svg
                  className="inline-block w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {title} downloaden
              </button>
            </Modal>
          )}
        </>
      )}
    </>
  )
}

const pdfIcon = (
  <svg className="inline-block w-5 h-5 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.588 17.47">
    <path
      d="M112.359,182.379a1.787,1.787,0,0,1-1.21-.524,2.06,2.06,0,0,1-.565-1.936,1.589,1.589,0,0,1,.686-1.008,19,19,0,0,1,4.113-2.3,44.427,44.427,0,0,0,2.419-5.041,11.514,11.514,0,0,1-1.29-3.75,3.57,3.57,0,0,1,.121-1.613c.4-1.29,1.29-1.331,1.653-1.29.081,0,1.492.2,1.734,2.218a10.9,10.9,0,0,1-.927,4.4,14,14,0,0,0,3.145,3.71,18.613,18.613,0,0,1,4.557.524,1.715,1.715,0,0,1,.927.565,1.5,1.5,0,0,1,.282,1.573h0a1.675,1.675,0,0,1-.323.565,1.558,1.558,0,0,1-1.976.444,21.456,21.456,0,0,1-3.871-2.54,16.963,16.963,0,0,0-5.565,1.169c-.686,1.25-1.532,2.621-2.5,4.153a1.7,1.7,0,0,1-.766.645h0C112.722,182.339,112.521,182.379,112.359,182.379Zm1.976-4.073a15.061,15.061,0,0,0-2.379,1.492c-.121.121-.242.242-.242.363a.956.956,0,0,0,.323.887.574.574,0,0,0,.484.121h0a.331.331,0,0,0,.2-.2C113.287,180.04,113.851,179.153,114.335,178.306Zm9.4-1.936a22.573,22.573,0,0,0,2.419,1.452.385.385,0,0,0,.484-.121,1.115,1.115,0,0,0,.161-.282c.081-.2.081-.282-.04-.4a.78.78,0,0,0-.363-.2A15.283,15.283,0,0,0,123.731,176.371Zm-5.242-3.589c-.4.927-.887,1.976-1.532,3.186a18.4,18.4,0,0,1,3.549-.726A20.147,20.147,0,0,1,118.489,172.782Zm-.4-6.775c-.161,0-.282.161-.4.524a2.408,2.408,0,0,0-.081,1.089,10.078,10.078,0,0,0,.686,2.339,8.044,8.044,0,0,0,.524-2.742c-.121-1.089-.686-1.21-.726-1.21Z"
      transform="translate(-110.524 -164.909)"
    />
  </svg>
)
