import request from "../utils/request";

export function query(params:any){
    return request({
        url: '/api/leaveMessage/query',
        method:'get',
        params
    })
}
// 删除留言
export function deleteLeaveMessage(params:any){
    return request({
        url: '/api/leaveMessage/delete',
        method:'delete',
        params
    })
}