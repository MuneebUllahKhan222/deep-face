import React from "react";
import { Routes, Route } from "react-router-dom";
import Section1 from "../mainFlow/GifSwap page/Section1.gif";
import UploadImage from "./imageUpload/UploadImage";




export default function UploadFlow() {


  return (
    <>
      <Routes>
        <Route path="/imageSwap/upload" element={<UploadImage />} />
        {/* <Route path="/videoSwap" element={<VideoSwap />} />
        <Route path="/gifSwap" element={<GifSwap />} /> */}
      </Routes>
      </>
  );
}
