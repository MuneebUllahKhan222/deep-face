import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Gallery page/Gallery";
import GifSwap from "./GifSwap page/GifSwap";
import ImageSwap from "./ImageSwap page/ImageSwap";
import LandingPage from "./Landing page/LandingPage";
import TermsAndCondition from "./Terms page/TermsAndCondition";
import VideoSwap from "./VideoSwap page/VideoSwap";
import RequireSubscription from "../../components/ProtectedRoutes/RequireSubscription";
import RefundPolicy from "./Terms page/RefundPolicy";



export default function MainFlow() {


  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/imageSwap" exact element={<ImageSwap />} />
        <Route path="/videoSwap" exact element={<VideoSwap />} />
        <Route path="/gifSwap" exact element={<GifSwap />} />
        <Route path="/termsAndCondition" exact element={<TermsAndCondition />} />
        <Route path="/refundPolicy" exact element={<RefundPolicy />} />
        <Route path="/gallery" exact element={<RequireSubscription><Gallery /></RequireSubscription>} />
      </Routes>
      </>
  );
}
