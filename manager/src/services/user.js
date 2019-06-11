import request from '../utils/request';

export function login(data) {
  console.log(data)
  return request({
    url:'/user/login',
    method:'POST',
    data:data
  });
}
