import request from "../utils/request"

export function login(params){
  return request({
      url:"/user/login",
      method:"POST",
      data:params,
  })
}

export function userExam(){ //获取用户信息
   return request({
     url:"/user/userInfo"
   })
}
 
export function newUser(user){  //获取用户权限
  return request({
   url:"/user/new?user_id="+user
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
export function base(payload){
  return request({
    method: 'POST',
    url: 'http://123.206.55.50:11000/upload_base64',
    data: payload
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
    url:"/exam/questions/condition?exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id+"&subject_id="+params.subject_id,
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
   method:"POST",
   data:payload,
 })
}
export function appendImg(payload){
  console.log(payload)
  return request({
    url: 'http://123.206.55.50:11000/upload',
    method: 'POST',
    data: payload
  })
}
/**
 * avatar: null
description: null
end_time: "1553740200000"
exam_exam_id: "gh1ye3-0i6opd"
exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i"
exam_name: "周考1"
exam_type: "8sc5d7-7p5f9e-cb2zii-ahe5i"
grade_id: ["we0eya-r2td2b-2h4yhg-ggxp1vf"]
grade_name: ["1612A"]
identity_id: "63no9p-8y0k4"
number: 3
question_ids: "["4t0rar-39c33-wq098t-phh5ht","4vu7t9-t9vv08-chvz3r-n8i3nq","npcnawn-0apvx-qbofy-ms3t4p"]"
room_id: ["fantrl-x3hsdf-hfryfr-ixa9fb"]
room_text: ["34302"]
start_time: "1553733000000"
status: 0
subject_id: "fqtktr-1lq5u"
subject_text: "javaScript上"
title: "测试2019.03.28"
user_id: "w6l6n-cbvl6s"
user_name: "chenmanjie"
 */

export function updataParpers(payload){
  return request({
    url:"/exam/exam/1buzgr-imze5s",
    method:"PUT",
    data:payload,
  })
}

export function changeImgs(payload){
  return request({
        method: 'POST',
        url: 'http://123.206.55.50:11000/upload_base64',
        data: payload
  })
}
