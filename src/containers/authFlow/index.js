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
          <Route path="/signin" exact element={<RequireNoAuth><div className="background-signin"><Signin/></div></RequireNoAuth>} />
          <Route path="/signup" exact element={<RequireNoAuth><div className="background-signin"><Signup /></div></RequireNoAuth>} />
          <Route path="/forgetPassword" exact element={<RequireNoAuth><div className="background-signin"><ForgetPassword/></div></RequireNoAuth>} />
          <Route path="/otp" exact element={<RequireNoAuth><div className="background-signin"><OTP/></div></RequireNoAuth>} />
          <Route path="/newPassword" exact element={<RequireNoAuth><div className="background-signin"><NewPassword/></div></RequireNoAuth>} />
        </Routes>
    </>
  );
}
