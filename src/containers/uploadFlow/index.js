import React from "react";
import { Routes, Route } from "react-router-dom";
import UploadGif from "./gifUpload/UploadGif";
import UploadImage from "./imageUpload/UploadImage";
import UploadVideo from "./videoUpload/UploadVideo";




export default function UploadFlow() {


  return (
    <>
      <Routes>
        <Route path="/imageSwap/upload" element={<UploadImage />} />
        <Route path="/gifSwap/upload" element={<UploadGif />} />
        <Route path="/videoSwap/upload" element={<UploadVideo />} />
      </Routes>
      </>
  );
}
