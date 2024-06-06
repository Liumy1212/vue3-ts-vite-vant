import request from '../utils/request'
// 通知消息列表
export function systemList(data: any) {
    return request({
        url: '/user/inform/list',
        method: 'get',
        params: data
    })
}
// 通知消息详情
export function systemDetails(data: any) {
    return request({
        url: '/user/inform/lookover',
        method: 'get',
        params: data
    })
}
// 对话列表
export function chatMessageList(data: any) {
    return request({
        url: '/it_chat/my/message/list',
        method: 'get',
        params: data
    })
}
// 对话消息聊天内容
export function chatMessageContent(data: any) {
    return request({
        url: '/it_chat/message/list',
        method: 'get',
        params: data
    })
}
// 对话消息内容发送
export function chatMessageContentAdd(data: any) {
    return request({
        url: '/it_chat/add_message',
        method: 'post',
        data
    })
}
// 消息常用语列表
export function chatMessageWordsList(data: any) {
    return request({
        url: '/it_chat/message/works/list',
        method: 'get',
        params: data
    })
}
// 消息常用语添加
export function chatMessageWordsAdd(data: any) {
    return request({
        url: '/it_chat/message/works/add',
        method: 'post',
        data
    })
}
// 消息常用语修改
export function chatMessageWordsEdit(data: any) {
    return request({
        url: '/it_chat/message/works/edit',
        method: 'post',
        data
    })
}
// 消息常用语删除
export function chatMessageWordsDelete(data: any) {
    return request({
        url: '/it_chat/message/works/delete',
        method: 'post',
        data
    })
}

