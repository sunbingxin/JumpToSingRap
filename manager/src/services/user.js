import request from "../utils/request"

export function login(params){
  return request({
      url:"/user/login",
      method:"POST",
      data:params,
  })
}

export function exam(){ // 获取试题类型2
  return request({
    url:"/exam/getQuestionsType",
    method:"GET"
  })
}

export function examStyle(){  //获取考试类型3
  return request({
     url:"/exam/examType",
     method:"GET",
  })
}

export function classStyle(){ //获取所有的课程
  return request({
    url:"/exam/subject",
    method:"GET",
  })
}

export function uerId(){
  return request({
    url:"/user/userInfo",
    method:"GET",
  })
}

export function setExamId(params){
   return request({
     url:"/exam/questions",
     method:"POST",
     data:params,
   })
}

export function getExamTitle(){
  return request({
    url:"/exam/questions/new",
    method:"GET",
  })
}

export function searChget(params){
  return request({
    url:"/exam/questions/condition?exam_id="+params.exam_id,
    method:"GET",
  })
}