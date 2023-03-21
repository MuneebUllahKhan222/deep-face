import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import './authFlow.css'
// import ProtectedRoute from "../../components/general/ProtectedRoute";



export default function AuthFlow() {


  return (
    <>
      
        <Routes>
          <Route path="/signin" element={<div className="background-signin"><Signin /></div>} />
          {/* <Route path="/signup" element={<ProtectedRoute><div className="background-signin"><Signup /></div></ProtectedRoute>} /> */}
          <Route path="/signup" element={<div className="background-signin"><Signup /></div>} />
        </Routes>
      {/* </div> */}
    </>
  );
}
