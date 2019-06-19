import request from "../utils/request"

export function getGtade(){
    return request({
        url:"/manger/grade",
        method:"GET",
    })
}

export function getSubject(){
    return request({
        url:"/exam/subject",
        method:"GET",
    }) 
}

export function getRoom(){
    return request({
        url:"/manger/room",
        method:"GET",
    }) 
}

export function delrooms(payload){
    return request({
        url:"/manger/room/delete",
        method:"DELETE",
        data:payload
    })
}

export function addGtade(payload){
    return request({
        url:"/manger/grade",
        method:"POST",
        data:payload,
    })
}

export function delClass(payload){
  return request({
      url:"/manger/grade/delete",
      method:"DELETE",
      data:payload,
  })
}

export function addRoom(payload){
    return request({
        url:"/manger/room",
        method:"POST",
        data:payload,
    })
}

export function gradUpdata(payload){
    return request({
        url:"/manger/grade/update",
        method:"PUT",
        data:payload,
    })
}