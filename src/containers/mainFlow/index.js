import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing page/LandingPage";




export default function MainFlow() {


  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        {/* <Route path="/imageSwap" exact element={<ImageSwap />} />
        <Route path="/videoSwap" exact element={<VideoSwap />} />
        <Route path="/gifSwap" exact element={<GifSwap />} /> */}
        {/* <Route path="/termsAndCondition" exact element={<TermsAndCondition />} />
        <Route path="/refundPolicy" exact element={<RefundPolicy />} />
        <Route path="/locker" exact element={<RequireSubscription><Gallery /></RequireSubscription>} /> */}
      </Routes>
      </>
  );
}
