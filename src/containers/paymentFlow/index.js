import React from "react";
import { Routes, Route } from "react-router-dom";
import StripeForm from "./StripeForm";




export default function PaymentFlow() {


  return (
    <>
      <Routes>
        <Route path="/pay" element={<StripeForm />} />
      </Routes>
      </>
  );
}
