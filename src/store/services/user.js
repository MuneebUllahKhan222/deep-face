import axios from "axios";
import { setUserEmail } from "../reducers/user";

const baseAiPath = "http://192.168.100.14:5000";//here you may use backend url

export const UserData = () => async (dispatch) => {
  try {

    // dispatch(setUserEmail({email:email}));
    return {
      success: 'success',
    }; 
  } catch (err) {
    return {
      error: err,
    };
  }
};
export const imageUploader = (source, target, id) => async (dispatch) => {
    try {
        console.log(source, target, id, 'data')

        const data = new FormData();
        data.append("source", source); // input img
        data.append("target", target); // base img
        data.append("id", id);
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(data, 'formdata')
        const response = await axios.post(`${baseAiPath}/Generate_Image`, data)
        console.log(await response, 'response of image uploader, servicessss')
        return response
    } catch (error) {
        
    }
}


export const gifUploader = (source, target, id) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      data.append("id", id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Gif`, data)
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}


export const videoUploader = (source, target, id) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      data.append("id", id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Video`, data)
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}