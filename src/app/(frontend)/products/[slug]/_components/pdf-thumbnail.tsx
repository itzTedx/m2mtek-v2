"use client";

import { useEffect, useRef } from "react";

import * as pdfjsLib from "pdfjs-dist";

// Define the type for the component's props
interface PDFThumbnailProps {
  fileUrl: string;
}

export default function PDFThumbnail({ fileUrl }: PDFThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderPDFThumbnail = async () => {
      if (!canvasRef.current) return;

      // Ensure PDF.js worker is set up
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.9.155/pdf.worker.min.js";

      try {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) {
          console.error("Canvas context is not available");
          return;
        }

        // Load the PDF file
        const pdf = await pdfjsLib.getDocument(fileUrl).promise;

        // Get the first page of the PDF
        const page = await pdf.getPage(1);

        // Define the viewport and scale for rendering
        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the first page on the canvas
        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        console.log("PDF thumbnail rendered successfully!");
      } catch (error) {
        console.error("Error rendering PDF thumbnail:", error);
      }
    };

    renderPDFThumbnail();
  }, [fileUrl]);

  return <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }} />;
}
