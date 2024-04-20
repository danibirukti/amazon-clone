import axios from "axios"
const axiosInstance = axios.create({
    // local instance of firebase function
    // baseURL:"http://127.0.0.1:5001/clone-b7365/us-central1/api",
  
    // deployed version of amazon server on render.com
    baseURL: "http://127.0.0.1:5001/clone-531b0/us-central1/api",
  });
  export { axiosInstance };