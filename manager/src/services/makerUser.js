import request from "../utils/request"

export function identity(){
    return request({
        url:"/user/identity",
        method:"GET",
    })
}

export function getUsers(){
    return request({
        url:"/user/user",
        method:"GET",
    })
}

export function addUsers(payload){
    return request({
        url:"/user/identity/edit?identity_text="+payload.identity_text,
        method:"GET",
    })
}

export function getAuthority(payload){
    return request({
        url:"/user/view_authority",
        method:"GET",
    })
}

export function getRelation(payload){
    return request({
        url:"/user/identity_api_authority_relation",
        method:"GET",
    })
}