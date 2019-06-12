import axios from "axios";

const service=axios.create({
  baseURL:"http://127.0.0.1:7001/",
  timeout:5000,
})

service.interceptors.request.use(
  config=>{
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
