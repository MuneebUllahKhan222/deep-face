import axios from "axios";

// const baseAiPath = "http://192.168.100.14:5000"; // transworld
// const baseAiPath = "http://192.168.18.30:5000"; // storm
const baseAiPath = "http://164.90.160.58:5000";
// const basePath = "http://localhost:3002"
const basePath = 'http://164.90.160.58:3002'


export const imageUploader = (source, target, id, _id) => async (dispatch) => {
    try {
        console.log(source, target, id, 'data')

        const data = new FormData();
        data.append("source", source); // input img
        data.append("target", target); // base img
        data.append("id", id);
        data.append("_id", _id);
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


export const gifUploader = (source, target, id, _id) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      data.append("id", id);
      data.append("_id", _id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Gif`, data)
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}


export const videoUploader = (source, target, id, _id) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      data.append("id", id);
      data.append("_id", _id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Video`, data)
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}


export const createDoc = (uid) => async (dispatch) => {
  try {

      const response = await axios.post(`${basePath}/video/create`, uid)
      console.log( response, 'response of create doc, servicessss')
      if (response?.data?.success) {
        return response?.data?.data
      }
  } catch (error) {
      return error
  }
}

export const getImage = (id) => async (dispatch) => {
  try {

      const response = await axios.get(`${basePath}/video/image/${id}`)
      console.log( response, 'response of image get, servicessss')
      if (response?.data?.success) {
        return response?.data?.data
      }
  } catch (error) {
      return error
  }
}