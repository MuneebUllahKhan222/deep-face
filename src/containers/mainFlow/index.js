import React from "react";
import { Routes, Route } from "react-router-dom";
import GifSwap from "./GifSwap page/GifSwap";
import ImageSwap from "./ImageSwap page/ImageSwap";
import LandingPage from "./Landing page/LandingPage";
import VideoSwap from "./VideoSwap page/VideoSwap";



export default function MainFlow() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/imageSwap" element={<ImageSwap />} />
        <Route path="/videoSwap" element={<VideoSwap />} />
        <Route path="/gifSwap" element={<GifSwap />} />
      </Routes>
      </>
  );
}
