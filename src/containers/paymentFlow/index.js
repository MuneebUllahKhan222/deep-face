import React from "react";
import { Routes, Route } from "react-router-dom";
import PricingPage from "./PricingPage";




export default function PaymentFlow() {


  return (
    <>
      <Routes>
        <Route path="/pay" element={<PricingPage />} />
      </Routes>
      </>
  );
}
