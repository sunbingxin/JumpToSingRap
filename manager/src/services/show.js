
import request from '../utils/request'
export function userAll1(){
    return request({
        url:'/user/user',
    })
}
export function userAll2(){
    return request({
        url:'/user/identity',
    })
}
export function userAll3(){
    return request({
        url:'/user/api_authority',
    })
}
export function userAll4(){
    return request({
        url:'/user/identity_api_authority_relation',
    })
}
export function userAll5(){
    return request({
        url:'/user/user',
    })
}
export function userAll6(){
    return request({
        url:'/user/identity_view_authority_relation',
    })
}
export function Allstudents(){
    return request({
        url:'/manger/student',
    })
}
export function Deletestu(payload){
    console.log(payload)
    return request({
        url:'/manger/student/:id=>student_id',
        method:'DELETE',
        data:{
            id:payload
        }
    })
}
export function WaitClass(){
    return request({
      url:"/manger/grade",
      method:"GET"
    })
  }
  export function Classmate(payload){
    return request({
      url:`/exam/student?grade_id=${payload}`,
      method:"GET"
    })
  }
