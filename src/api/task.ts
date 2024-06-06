import request from '../utils/request'
// 收藏接口
export function taskCollection(data: any) {
    return request({
        url: '/course/TaskCollection',
        method: 'post',
        data
    })
}
// 城市列表接口
export function cityList(data: any) {
    return request({
        url: '/sys/city/list',
        method: 'get',
        params: data
    })
}
// banner列表接口
export function bannerList(data: any) {
    return request({
        url: '/home/banner/list',
        method: 'get',
        params: data
    })
}
// 职位类型列表接口
export function positionTypeList(data: any) {
    return request({
        url: '/position/positionTypeApi',
        method: 'get',
        params: data
    })
}
// 筛选列表接口
export function screenList(data: any) {
    return request({
        url: '/task/getTaskAll',
        method: 'get',
        params: data
    })
}
// 任务列表接口
export function taskAllList(data: any) {
    return request({
        url: '/task/taskAllList',
        method: 'get',
        params: data
    })
}
// 任务详情接口
export function taskDetails(data: any) {
    return request({
        url: '/task/getTaskDetails',
        method: 'get',
        params: data
    })
}
// 热门搜索接口
export function hotSearch(data: any) {
    return request({
        url: '/position/public/getHotSeach',
        method: 'get',
        params: data
    })
}
// 企业端任务管理列表接口
export function myTaskAllList(data: any) {
    return request({
        url: '/task/myTaskAllList',
        method: 'get',
        params: data
    })
}
// 企业端任务添加接口
export function addTask(data: any) {
    return request({
        url: '/task/addtask',
        method: 'post',
        data
    })
}
// 企业端关闭和启动任务
export function onOrOff(data: any) {
    return request({
        url: '/task/onOrOff',
        method: 'put',
        data
    })
}