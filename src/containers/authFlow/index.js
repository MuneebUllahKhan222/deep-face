import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import './authFlow.css'
import ForgetPassword from "./forgetPassword";
import OTP from "./otp";
import NewPassword from "./newPassword";
// import ProtectedRoute from "../../components/general/ProtectedRoute";



export default function AuthFlow() {


  return (
    <>
      
        <Routes>
          <Route path="/signin" element={<div className="background-signin"><Signin /></div>} />
          {/* <Route path="/signup" element={<ProtectedRoute><div className="background-signin"><Signup /></div></ProtectedRoute>} /> */}
          <Route path="/signup" element={<div className="background-signin"><Signup /></div>} />
          <Route path="/forgetPassword" element={<div className="background-signin"><ForgetPassword/></div>} />
          <Route path="/otp" element={<div className="background-signin"><OTP/></div>} />
          <Route path="/newPassword" element={<div className="background-signin"><NewPassword/></div>} />
        </Routes>
      {/* </div> */}
    </>
  );
}
