import request from "../utils/request";

export function loginUser(data:any){
    return request({
        url: '/api/login',
        method:'post',
        data
    })
}
export function userInfo(){
    return request({
        url: '/api/user/userInfo',
        method:'get',
    })
}
export function modify(data: any){
    return request({
        url: '/api/user/modify',
        method:'post',
        data
    })
}