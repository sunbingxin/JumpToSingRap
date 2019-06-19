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
export function addYonHu(payload){
    return request({
        url:"/user",
        method:"POST",
        data:payload,
    })
}

export function genYons(payload){
    return request({
        url:"/user/user",
        method:"PUT",
        data:payload,
    })
}

export function setQuanxians(payload){
    return request({
        url:"/user/authorityApi/edit?api_authority_text="+payload.api_authority_text+"&api_authority_url="+payload.api_authority_url+"&api_authority_method="+payload.api_authority_method,
        method:"GET",
    })
}

export function addauthorityViewes(payload){
    return request({
        url:"/user/authorityView/edit?view_authority_text="+payload.view_authority_text+"&view_id="+payload.view_id,
        method:"GET",
    })
}

export function setIdentityApi(payload){
    return request({
        url:"/user/setIdentityApi",
        method:"POST",
        data:payload
    })
}

export function setIdentityViews(payload){
    return request({
        url:"/user/setIdentityView",
        method:"POST",
        data:payload
    })
}