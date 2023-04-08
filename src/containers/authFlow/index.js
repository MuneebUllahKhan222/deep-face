import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import './authFlow.css'
import ForgetPassword from "./forgetPassword";
import OTP from "./otp";
import NewPassword from "./newPassword";
import RequireNoAuth from "../../components/ProtectedRoutes/RequireNoAuth";



export default function AuthFlow() {


  return (
    <> 
        <Routes>
          <Route path="/signin" element={<RequireNoAuth><div className="background-signin"><Signin/></div></RequireNoAuth>} />
          <Route path="/signup" element={<RequireNoAuth><div className="background-signin"><Signup /></div></RequireNoAuth>} />
          <Route path="/forgetPassword" element={<div className="background-signin"><ForgetPassword/></div>} />
          <Route path="/otp" element={<div className="background-signin"><OTP/></div>} />
          <Route path="/newPassword" element={<div className="background-signin"><NewPassword/></div>} />
        </Routes>
    </>
  );
}
