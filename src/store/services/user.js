import axios from "axios";
import { getCookies, setCookies, setCredits, updateCookie } from "../../utils";

// const baseAiPath = "http://192.168.100.14:5000"; // transworld
// const baseAiPath = "http://192.168.18.30:5000"; // storm
// const baseAiPath = "http://164.90.160.58:5000";
const basePath = "http://localhost:3002"
// const basePath = 'http://164.90.160.58:3002'
const baseAiPath = "https://deepduck.ai/backend"
// const basePath = 'https://deepduck.ai/web-backend'



export const imageUploader = (source, target, token) => async (dispatch) => {
    try {        

        const data = new FormData();
        data.append("source", source); // input img
        data.append("target", target); // base img
        // data.append("id", id);
        // data.append("_id", _id);

        const response = await axios.post(`${baseAiPath}/Generate_Image`, data, { headers: {"Authorization" : token}})
        return response?.data
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
      const response = await axios.post(`${baseAiPath}/Generate_Gif`, data, { headers: {"Authorization" : token}})
      return response?.data
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
      const response = await axios.post(`${baseAiPath}/Generate_Video`, data, { headers: {"Authorization" : token}})
      return response?.data
  } catch (error) {
      
  }
}


export const createDoc = (data) => async (dispatch) => {
  try {
    const {token} = await getCookies('user')


      const response = await axios.post(`${basePath}/video/create`, data, { headers: {"Authorization" : token} })
        setCredits(response?.data?.credits || 0)
        return response?.data
  } catch (error) {
      return error
  }
}

export const getImage = (docToken) => async (dispatch) => {
  try {
    const {token} = await getCookies('user')


      const response = await axios.get(`${basePath}/video/image/${docToken}`,  { headers: {"Authorization" : token}})
      if (response?.data?.success) {
        return response?.data?.data
      }
  } catch (error) {
      return error
  }
}


export const saveContent = (data) => async (dispatch) => {
  try {

      const response = await axios.post(`${basePath}/save/content`, data)

        return response?.data

  } catch (error) {
      return error
  }
}

export const createIntent = (data) => async (dispatch) => {
  try {

      const response = await axios.post(`${basePath}/payment/createIntent`, data)

        return response?.data

  } catch (error) {
      return error
  }
}

export const createSubscriptionIntent = (data) => async (dispatch) => {
  try {

      const response = await axios.post(`${basePath}/payment/subscribeNew`, data)

        return response?.data

  } catch (error) {
      return error
  }
}

export const fetchContent = (data) => async (dispatch) => {
  try {
    const {uid, type} = data

      const response = await axios.get(`${basePath}/save/getContent/${uid}/${type}`)

        return response?.data

  } catch (error) {
      return error
  }
}

export const purchaseCredits = (data) => async (dispatch) => {
  try {
      const response = await axios.post(`${basePath}/payment/purchaseCredits`, data)
      if (response?.data?.status === 200) {
        setCookies('credits',{credits:response?.data?.data.credits}, {
          path:'/'
        })
      }
        return response?.data

  } catch (error) {
      return error
  }
}


export const purchaseSubscription = (data) => async (dispatch) => {
  try {
      const response = await axios.post(`${basePath}/payment/subscribe`, data)
      if (response?.data?.success === true) {
        const saveObj = {
          ...response?.data?.data
        }
        delete saveObj.hash
        delete saveObj.__v
      updateCookie('user',saveObj, {
        path:'/'
      })  
      }
        return response?.data

  } catch (error) {
      return error
  }
}

export const unSubscribe = (data) => async (dispatch) => {
  try {
      const response = await axios.post(`${basePath}/payment/unsubscribe`, data)
      if (response?.data?.success === true) {
        const saveObj = {
          ...response?.data?.data
        }
        delete saveObj.hash
        delete saveObj.__v
      updateCookie('user',saveObj, {
        path:'/'
      })  
      }
        return response?.data

  } catch (error) {
      return error
  }
}


  export const getStatus = (docToken) => async (dispatch) => {
    try {
      const {token} = await getCookies('user')
  
  
        const response = await axios.get(`${basePath}/video/status/${docToken}`,  { headers: {"Authorization" : token}})
        if (response?.data?.success) {
          return response?.data?.data
        }
    } catch (error) {
        return error
    }
  }


  export const returnCredits = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${basePath}/payment/returnCred`, data)
        if (response?.data?.status === 200) {
          setCookies('credits',{credits:response?.data?.data?.credits}, {
            path:'/'
          })
        }
          return response?.data
  
    } catch (error) {
        return error
    }
  }




