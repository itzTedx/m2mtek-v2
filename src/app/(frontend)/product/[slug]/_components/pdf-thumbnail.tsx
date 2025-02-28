"use client";

import { Document, Page, pdfjs } from "react-pdf";

// Define the type for the component's props
interface PDFThumbnailProps {
  fileUrl: string;
}

export default function PDFThumbnail({ fileUrl }: PDFThumbnailProps) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <Document file={fileUrl}>
      <Page pageNumber={1} />
    </Document>
  );
}
