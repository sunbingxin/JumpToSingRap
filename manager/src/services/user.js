import request from "../utils/request"

export function login(params){
  return request({
      url:"/user/login",
      method:"POST",
      data:params,
  })
}
