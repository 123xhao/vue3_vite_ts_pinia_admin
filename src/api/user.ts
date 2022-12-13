import request from "../utils/request";

export function loginUser(data:any){
    return request({
        url: '/user/login',
        method:'post',
        data
    })
}