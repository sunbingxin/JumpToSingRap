import axios from 'axios'
import {getTooken,setTooken} from '../utils/cookie'

const service = axios.create({
  baseURL: 'http://169.254.78.156:7001/',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getTooken()) {
      // 让每个请求携带authorization
      config.headers['loginTooken'] = getTooken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service
