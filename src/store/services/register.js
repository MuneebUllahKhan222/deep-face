import axios from "axios";
import { setCookies, updateCookie } from "../../utils";
import {  setRegisterUserEmail } from "../reducers/register";
import { setUserData } from "../reducers/user";

// const basePath = "http://localhost:3002";//here you may use backend url
// const basePath = 'http://164.90.160.58:3002'
const basePath = 'https://deepduck.ai/web-backend'

export const register = (info) => async (dispatch) => {
  try {
    const {emailSignup:email, passwordSignup:password} = info
    const data = {
      email,
      password
    }
    const response = await axios.post(`${basePath}/auth/signup`, data)

    if (response?.data?.status === 200) {
      setCookies('user',response?.data?.data, {
        path:'/'
      })  
      setCookies('credits',{credits:response?.data?.data.credits}, {
        path:'/'
      })
        dispatch(setUserData(response?.data?.data)) 
      dispatch(setRegisterUserEmail(response?.data?.data)); 
      }
    return response?.data
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const login = (info) => async (dispatch) => {
  try {
    const {email, password} = info
    const data = {
      email,
      password
    }
    const response = await axios.post(`${basePath}/auth/login`, data)
    if (response?.data?.status === 200) {
    setCookies('user',response?.data?.data, {
      path:'/'
    })  
    setCookies('credits',{credits:response?.data?.data.credits}, {
      path:'/'
    })
      dispatch(setUserData(response?.data?.data)) 
    dispatch(setRegisterUserEmail(response?.data?.data)); 
    }
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const sendOTPEmail = (info) => async (dispatch) => {
  try {
    const {forgetEmail:email }= info
    // dispatch(setOTPEmail(email)) 
    const data = {
      email,
    }
    const response = await axios.post(`${basePath}/auth/verifyEmailForPass`, data)
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const verifyOTP = (info) => async (dispatch) => {
  try {
    const {email, val:OTPcode }= info
    // dispatch(setOTPEmail(email)) 
    const data = {
      email,
      OTPcode
    }
    const response = await axios.post(`${basePath}/auth/verifyOTP`, data)
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const updatePassword = (info) => async (dispatch) => {
  try {
    const {newPassword:password, confirmPassword:newPassword, email }= info
    // dispatch(setOTPEmail(email)) 
    const data = {
      newPassword,
      password,
      email
    }
    const response = await axios.post(`${basePath}/auth/updatePassword`, data)
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const changeStatus = (uid, token) => async (dispatch) => {
  try {
    const data = {
      uid,
      token
    }
    const response = await axios.post(`${basePath}/auth/changeStatus`, data)
    if (response?.data?.status === 200) {
      const saveObj = {
        ...response?.data?.data?.data,token:response?.data?.data?.token
      }
      delete saveObj.hash
      delete saveObj.__v
    updateCookie('user',saveObj, {
      path:'/'
    })  
    }
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};

