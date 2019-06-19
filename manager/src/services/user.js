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
export function allQuestion() {
  return request({
    url:'/exam/exam'
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
    url:"/exam/questions/condition?exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id,
    method:"GET",
  })
}

export function addTextAll(params){
 return request({
   url:"/exam/insertQuestionsType?text="+params.text+"&sort="+params.sort,
   method:"GET",
 })
}

export function ExamDetail(params) {
  return request({
    url:'/exam/exam?exam_exam_id=' + params.exam_exam_id,
  })
}

export function examExams(payload){
 return request({
   url:"/exam/exam",
   data:payload,
 })
}
