import axios from "axios";
import { getCookies } from "../../utils";

// const baseAiPath = "http://192.168.100.14:5000"; // transworld
// const baseAiPath = "http://192.168.18.30:5000"; // storm
// const baseAiPath = "http://164.90.160.58:5000";
const basePath = "http://localhost:3002"
// const basePath = 'http://164.90.160.58:3002'
const baseAiPath = "https://deepduck.ai/backend"
// const basePath = 'https://deepduck.ai/web-backend'



export const imageUploader = (source, target, token) => async (dispatch) => {
    try {
        console.log(source, target, token, 'data')
        

        const data = new FormData();
        data.append("source", source); // input img
        data.append("target", target); // base img
        // data.append("id", id);
        // data.append("_id", _id);
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(data, 'formdata')
        const response = await axios.post(`${baseAiPath}/Generate_Image`, data, { headers: {"Authorization" : token}})
        console.log(await response, 'response of image uploader, servicessss')
        return response
    } catch (error) {
        
    }
}


export const gifUploader = (source, target, token) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      // data.append("id", id);
      // data.append("_id", _id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Gif`, data, { headers: {"Authorization" : token}})
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}


export const videoUploader = (source, target, token) => async (dispatch) => {
  try {

      const data = new FormData();
      data.append("source", source); // input img
      data.append("target", target); // base img
      // data.append("id", id);
      // data.append("_id", _id);
      for (var pair of data.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      const response = await axios.post(`${baseAiPath}/Generate_Video`, data, { headers: {"Authorization" : token}})
      console.log(await response, 'response of gif uploader, servicessss')
      return response
  } catch (error) {
      
  }
}


export const createDoc = (uid) => async (dispatch) => {
  try {
    const {token} = await getCookies('user')


      const response = await axios.post(`${basePath}/video/create`, {uid}, { headers: {"Authorization" : token} })
      console.log( response, 'response of create doc, servicessss')
      if (response?.data?.success) {
        return response?.data?.data
      }
  } catch (error) {
      return error
  }
}

export const getImage = (docToken) => async (dispatch) => {
  try {
    const {token} = await getCookies('user')


      const response = await axios.get(`${basePath}/video/image/${docToken}`,  { headers: {"Authorization" : token}})
      console.log( response, 'response of image get, servicessss')
      if (response?.data?.success) {
        return response?.data?.data
      }
  } catch (error) {
      return error
  }
}


export const saveContent = (data) => async (dispatch) => {
  try {
    console.log(data)

      const response = await axios.post(`${basePath}/save/content`, data)
      console.log( response, 'response of save image, servicessss')

        return response?.data

  } catch (error) {
      return error
  }
}

export const createIntent = (data) => async (dispatch) => {
  try {

      const response = await axios.post(`${basePath}/payment/createIntent`, data)
      console.log( response, 'response of payment intent, servicessss')

        return response?.data

  } catch (error) {
      return error
  }
}

export const fetchContent = (data) => async (dispatch) => {
  try {
    const {uid, type} = data

      const response = await axios.get(`${basePath}/save/getContent/${uid}/${type}`)
      console.log( response, 'response of save image, servicessss')

        return response?.data

  } catch (error) {
      return error
  }
}


// export const yarooq = () => async (dispatch) => {
//   try {
//     const data={
//       abc:'xyz'
//     }
//       const response = await axios.post(`http://192.168.0.129:8001/getchat/`, data)

//       console.log( response, 'response of save image, servicessss')

//         return response?.data

//   } catch (error) {
//       return error
//   }
// }