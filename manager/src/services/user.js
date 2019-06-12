import request from '../utils/request';
import { getTooken } from '../utils/cookie';

export function login(data) {
  console.log(data)
  return request({
    url:'/user/login',
    method:'POST',
    data:data
  });
}
export function classify(){
  return request({
    url:'/exam/getQuestionsType'
  })
}
