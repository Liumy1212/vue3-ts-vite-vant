import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login/code',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          code: '123456',
        },
        message: '验证码获取成功'
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }) => {
        return {
            "code": 200,
            "success": "ok",
            "result": {
                "errCode": 200,
                "msg": "登录成功",
                "data": {
                    "user_info": {
                        "accounts": "13321178501",
                        "id": 25,
                        "user_name": "秦升成",
                        "sex": 1,
                        "birthday": "1990-05",
                        "pay_password": null,
                        "email": null,
                        "work_time": "2010-03",
                        "head_img": "http://api.share.zcwytd.com/upload/images/headImg/Uj30UbBBFI1nC4gNC2hFLOOm.png",
                        "idcard": null,
                        "account_price": 0,
                        "is_check": 0,
                        "it_enterprise": 1,
                        "enterprise": 1,
                        "manage": 1
                    },
                    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsInBob25lIjoiMTMzMjExNzg1MDEiLCJleHAiOjE2NjU3MDkwNjExOTZ9._eVOLYP6JMK-PYvdqVcfC34BungmS_0TzkpN2OIMgMc",
                    "exipreTime": 1665709061196
                }
            }
        }
    }
  }
] as MockMethod[]
