import axios from "axios";
import { setCookies } from "../../utils";
import { setRegisterUserEmail } from "../reducers/register";
import { setUserData } from "../reducers/user";

const basePath = "http://localhost:3002";//here you may use backend url

export const register = (info) => async (dispatch) => {
  try {
    const {email, password} = info
    const data = {
      email,
      password
    }
    const response = await axios.post(`${basePath}/auth/signup`, data)
    dispatch(setUserData(response?.data?.data))
    dispatch(setRegisterUserEmail(response?.data?.data));
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
    setCookies('user',response?.data?.data)
    dispatch(setUserData(response?.data?.data))
    
    dispatch(setRegisterUserEmail(response?.data?.data));
    return response?.data
  } catch (err) {
    return {
      error: err,
    };
  }
};

