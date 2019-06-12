import Cookie from 'js-cookie'
let key = 'loginTooken'
export function getTooken(){
    return Cookie.get(key)
}
export function setTooken(value){
    Cookie.set(key,value,{expires:7})
}