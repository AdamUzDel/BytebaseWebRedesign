"use client"; // Required for Next.js App Router

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const MenuPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Restaurant Menu</h1>
      <div className="w-full max-w-4xl h-[90vh] border border-gray-300">
        {/* Ensure the correct Worker version is used */}
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/foodmenu.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default MenuPage;
