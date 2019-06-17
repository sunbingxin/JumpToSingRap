import axios from "axios";
import { getToken } from "./Cookie";

const service=axios.create({
  baseURL:"http://169.254.12.88:7001/",
  timeout:5000,
})

service.interceptors.request.use(
  config=>{
    if(getToken()){
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  err=>{
    return Promise.reject(err);
  }
)

service.interceptors.response.use(
  response=>response.data,
  err=>{
    return Promise.reject(err);
  }
)

export default service
