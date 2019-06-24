import Cookie  from "js-cookie";
let key = "statusCode" ;

export function setToken(value){
    return Cookie.set(key,value,{expires:7})
}

export function getToken(){
   return Cookie.get(key)
}

export function removeToken(){
    return Cookie.remove(key);
}