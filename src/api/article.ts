import request from "../utils/request";

export function add(data:any){
    return request({
        url: '/api/article/add',
        method:'post',
        data
    })
}
export function deleteArticle(params:any){
    return request({
        url: '/api/article/delete',
        method:'delete',
        params
    })
}
export function modify(data: any){
    return request({
        url: '/api/article/modify',
        method:'post',
        data
    })
}
export function query(params){
    return request({
        url: '/api/article/query',
        method:'get',
        params
    })
}