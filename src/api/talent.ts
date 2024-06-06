import request from '../utils/request'
// 获取筛选数据接口
export function getScreenl(data: any) {
    return request({
        url: '/conllect/recuit/getScreenl',
        method: 'get',
        params: data
    })
}
// 获取人才列表数据接口
export function getTalent(data: any) {
    return request({
        url: '/job/resume/list',
        method: 'get',
        params: data
    })
}
// 获取人才详情数据接口
export function getTalentDetail(data: any) {
    return request({
        url: '/admin/resume/getInfoDetailsAPI',
        method: 'get',
        params: data
    })
}
// 设置人才收藏添加接口
export function addResumeCollect(data: any) {
    return request({
        url: '/collect/resume/add',
        method: 'post',
        data: data
    })
}
// 设置人才收藏删除接口
export function deleteResumeCollect(data: any) {
    return request({
        url: '/collect/resume/delete',
        method: 'delete',
        params: data
    })
}
