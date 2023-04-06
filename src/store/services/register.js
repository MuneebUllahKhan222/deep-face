import axios from "axios";
import { setCookies } from "../../utils";
import {  setRegisterUserEmail } from "../reducers/register";
import { setUserData } from "../reducers/user";

const basePath = "http://localhost:3002";//here you may use backend url
// const basePath = 'http://164.90.160.58:3002'
// const basePath = 'https://deepduck.ai/web-backend'

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
    console.log(response, 'res of login')
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
    console.log(email, 'api called')
    const response = await axios.post(`${basePath}/auth/verifyEmailForPass`, data)
    console.log(response?.data)
    // if (response?.data?.status === 200) {
    // setCookies('user',response?.data?.data, {
    //   path:'/'
    // })  
      
    // dispatch(setRegisterUserEmail(response?.data?.data)); 
    // }
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const verifyOTP = (info) => async (dispatch) => {
  try {
    console.log(info, 'verify')
    const {email, val:OTPcode }= info
    // dispatch(setOTPEmail(email)) 
    const data = {
      email,
      OTPcode
    }
    console.log(data, 'api called')
    const response = await axios.post(`${basePath}/auth/verifyOTP`, data)
    console.log(response?.data)
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};


export const updatePassword = (info) => async (dispatch) => {
  try {
    console.log(info, 'verify')
    const {newPassword:password, confirmPassword:newPassword, email }= info
    // dispatch(setOTPEmail(email)) 
    const data = {
      newPassword,
      password,
      email
    }
    console.log(data, 'api called')
    const response = await axios.post(`${basePath}/auth/updatePassword`, data)
    console.log(response?.data)
    return response?.data
    
  } catch (err) {
    return {
      error: err,
    };
  }
};

