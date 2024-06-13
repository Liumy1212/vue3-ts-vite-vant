import { MockMethod } from "vite-plugin-mock";


export default [
  {
    url: "/api/sys/city/list",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: [
          {
            id: "9a0b7b90af2411ec885c5ba069ef4761",
            key: "9a0b7b90af2411ec885c5ba069ef4761",
            name: "北京",
            pid: "",
            sort: 0,
          },
          {
            id: "bb1b59b0b7dd11ecac2b5d008f82fa5c",
            key: "bb1b59b0b7dd11ecac2b5d008f82fa5c",
            name: "武汉",
            pid: "",
            sort: 0,
          },
          {
            id: "dfcfeba0f2c411ecb575e5b3bc4fd4e5",
            key: "dfcfeba0f2c411ecb575e5b3bc4fd4e5",
            name: "长沙",
            pid: "",
            sort: 2,
          },
          {
            id: "003904903bcb11ed8a83cf002322a4d7",
            key: "003904903bcb11ed8a83cf002322a4d7",
            name: "太原",
            pid: "",
            sort: 50,
          },
          {
            id: "01c3c160f38c11ecb8eae9d50e7721d7",
            key: "01c3c160f38c11ecb8eae9d50e7721d7",
            name: "上海",
            pid: "",
            sort: 50,
          },
          {
            id: "1a1735603bc811ed8a83cf002322a4d7",
            key: "1a1735603bc811ed8a83cf002322a4d7",
            name: "昆明",
            pid: "",
            sort: 50,
          },
          {
            id: "1ab008103bca11ed8a83cf002322a4d7",
            key: "1ab008103bca11ed8a83cf002322a4d7",
            name: "贵阳",
            pid: "",
            sort: 50,
          },
          {
            id: "1ae94930f38c11ecb8eae9d50e7721d7",
            key: "1ae94930f38c11ecb8eae9d50e7721d7",
            name: "郑州",
            pid: "",
            sort: 50,
          },
          {
            id: "2247e0a03bc711ed8a83cf002322a4d7",
            key: "2247e0a03bc711ed8a83cf002322a4d7",
            name: "宁波",
            pid: "",
            sort: 50,
          },
          {
            id: "25871b303bc911ed8a83cf002322a4d7",
            key: "25871b303bc911ed8a83cf002322a4d7",
            name: "厦门",
            pid: "",
            sort: 50,
          },
          {
            id: "3660d750f38c11ecb8eae9d50e7721d7",
            key: "3660d750f38c11ecb8eae9d50e7721d7",
            name: "杭州",
            pid: "",
            sort: 50,
          },
          {
            id: "469d9b403bca11ed8a83cf002322a4d7",
            key: "469d9b403bca11ed8a83cf002322a4d7",
            name: "石家庄",
            pid: "",
            sort: 50,
          },
          {
            id: "52ac92203bc911ed8a83cf002322a4d7",
            key: "52ac92203bc911ed8a83cf002322a4d7",
            name: "福州",
            pid: "",
            sort: 50,
          },
          {
            id: "56ab9860f38c11ecb8eae9d50e7721d7",
            key: "56ab9860f38c11ecb8eae9d50e7721d7",
            name: "南京",
            pid: "",
            sort: 50,
          },
          {
            id: "5a6a57503bc811ed8a83cf002322a4d7",
            key: "5a6a57503bc811ed8a83cf002322a4d7",
            name: "沈阳",
            pid: "",
            sort: 50,
          },
          {
            id: "614e3a703bcb11ed8a83cf002322a4d7",
            key: "614e3a703bcb11ed8a83cf002322a4d7",
            name: "保定",
            pid: "",
            sort: 50,
          },
          {
            id: "65680690f38c11ecb8eae9d50e7721d7",
            key: "65680690f38c11ecb8eae9d50e7721d7",
            name: "天津",
            pid: "",
            sort: 50,
          },
          {
            id: "664bd5903bc711ed8a83cf002322a4d7",
            key: "664bd5903bc711ed8a83cf002322a4d7",
            name: "佛山",
            pid: "",
            sort: 50,
          },
          {
            id: "7bfae9603bc911ed8a83cf002322a4d7",
            key: "7bfae9603bc911ed8a83cf002322a4d7",
            name: "哈尔滨",
            pid: "",
            sort: 50,
          },
          {
            id: "8d261f903bc711ed8a83cf002322a4d7",
            key: "8d261f903bc711ed8a83cf002322a4d7",
            name: "合肥",
            pid: "",
            sort: 50,
          },
          {
            id: "90b5b2203bcb11ed8a83cf002322a4d7",
            key: "90b5b2203bcb11ed8a83cf002322a4d7",
            name: "珠海",
            pid: "",
            sort: 50,
          },
          {
            id: "928bb190ff3911ec86240f73f8f20435",
            key: "928bb190ff3911ec86240f73f8f20435",
            name: "西安",
            pid: "",
            sort: 50,
          },
          {
            id: "93d3a3b03bba11ed8a83cf002322a4d7",
            key: "93d3a3b03bba11ed8a83cf002322a4d7",
            name: "深圳",
            pid: "",
            sort: 50,
          },
          {
            id: "98b53b403bca11ed8a83cf002322a4d7",
            key: "98b53b403bca11ed8a83cf002322a4d7",
            name: "长春",
            pid: "",
            sort: 50,
          },
          {
            id: "9d6553f0f38b11ecb8eae9d50e7721d7",
            key: "9d6553f0f38b11ecb8eae9d50e7721d7",
            name: "重庆",
            pid: "",
            sort: 50,
          },
          {
            id: "9d8cb0c03bc611ed8a83cf002322a4d7",
            key: "9d8cb0c03bc611ed8a83cf002322a4d7",
            name: "苏州",
            pid: "",
            sort: 50,
          },
          {
            id: "aa3fa8703bc811ed8a83cf002322a4d7",
            key: "aa3fa8703bc811ed8a83cf002322a4d7",
            name: "济南",
            pid: "",
            sort: 50,
          },
          {
            id: "ae17f9403bcb11ed8a83cf002322a4d7",
            key: "ae17f9403bcb11ed8a83cf002322a4d7",
            name: "烟台",
            pid: "",
            sort: 50,
          },
          {
            id: "b6b5e360f38b11ecb8eae9d50e7721d7",
            key: "b6b5e360f38b11ecb8eae9d50e7721d7",
            name: "广州",
            pid: "",
            sort: 50,
          },
          {
            id: "d01e42703bca11ed8a83cf002322a4d7",
            key: "d01e42703bca11ed8a83cf002322a4d7",
            name: "南昌",
            pid: "",
            sort: 50,
          },
          {
            id: "d2aecdd03bc911ed8a83cf002322a4d7",
            key: "d2aecdd03bc911ed8a83cf002322a4d7",
            name: "大连",
            pid: "",
            sort: 50,
          },
          {
            id: "d7f742b03bc711ed8a83cf002322a4d7",
            key: "d7f742b03bc711ed8a83cf002322a4d7",
            name: "青岛",
            pid: "",
            sort: 50,
          },
          {
            id: "e1340810f38b11ecb8eae9d50e7721d7",
            key: "e1340810f38b11ecb8eae9d50e7721d7",
            name: "成都",
            pid: "",
            sort: 50,
          },
          {
            id: "e2e364703bc611ed8a83cf002322a4d7",
            key: "e2e364703bc611ed8a83cf002322a4d7",
            name: "东莞",
            pid: "",
            sort: 50,
          },
          {
            id: "f18f6d003bc811ed8a83cf002322a4d7",
            key: "f18f6d003bc811ed8a83cf002322a4d7",
            name: "无锡",
            pid: "",
            sort: 50,
          },
        ],
      };
    },
  },
  {
    url: "/api/course/TaskCollection",
    method: "post",
    response: ({ body }) => {
      return {
        "code": 200,
        "success": "ok",
        "result": {
          "errCode": 200,
          "msg": "已添加收藏",
          "data": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 59,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0,
            "status": 1
          }
        }
      }
    }
  },
  {
    url: "/api/position/positionTypeApi",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: [
          {
            id: 14,
            key: 14,
            name: "技术",
            pid: 0,
            children: [
              {
                id: 22,
                key: 22,
                name: "前端开发",
                pid: 14,
              },
              {
                id: 25,
                key: 25,
                name: "安卓开发",
                pid: 14,
              },
              {
                id: 26,
                key: 26,
                name: "ios开发",
                pid: 14,
              },
              {
                id: 27,
                key: 27,
                name: "测试",
                pid: 14,
              },
              {
                id: 28,
                key: 28,
                name: "运维/技术支持",
                pid: 14,
              },
              {
                id: 29,
                key: 29,
                name: "php开发",
                pid: 14,
              },
              {
                id: 48,
                key: 48,
                name: "java开发",
                pid: 14,
              },
            ],
          },
          {
            id: 16,
            key: 16,
            name: "市场",
            pid: 0,
            children: [
              {
                id: 30,
                key: 30,
                name: "市场调研",
                pid: 16,
              },
              {
                id: 31,
                key: 31,
                name: "网络营销",
                pid: 16,
              },
              {
                id: 32,
                key: 32,
                name: "活动策划",
                pid: 16,
              },
              {
                id: 33,
                key: 33,
                name: "商务渠道",
                pid: 16,
              },
            ],
          },
          {
            id: 17,
            key: 17,
            name: "运营",
            pid: 0,
            children: [
              {
                id: 34,
                key: 34,
                name: "内容运营",
                pid: 17,
              },
              {
                id: 35,
                key: 35,
                name: "活动运营",
                pid: 17,
              },
              {
                id: 36,
                key: 36,
                name: "新媒体运营",
                pid: 17,
              },
              {
                id: 37,
                key: 37,
                name: "视频剪辑",
                pid: 17,
              },
            ],
          },
          {
            id: 18,
            key: 18,
            name: "产品设计",
            pid: 0,
            children: [
              {
                id: 38,
                key: 38,
                name: "UI设计师",
                pid: 18,
              },
              {
                id: 39,
                key: 39,
                name: "视觉设计师",
                pid: 18,
              },
              {
                id: 40,
                key: 40,
                name: "产品经理",
                pid: 18,
              },
              {
                id: 41,
                key: 41,
                name: "项目经理",
                pid: 18,
              },
            ],
          },
          {
            id: 19,
            key: 19,
            name: "人力资源",
            pid: 0,
            children: [
              {
                id: 42,
                key: 42,
                name: "人力资源主管",
                pid: 19,
              },
              {
                id: 43,
                key: 43,
                name: "招聘",
                pid: 19,
              },
              {
                id: 44,
                key: 44,
                name: "HRBP",
                pid: 19,
              },
              {
                id: 45,
                key: 45,
                name: "人事/HR",
                pid: 19,
              },
            ],
          },
        ],
      };
    },
  },
  {
    url: "/api/task/getTaskAll",
    method: "get",
    response: ({ body }) => {
      return {
        "code": 200,
        "success": "ok",
        "result": {
          "code": "200",
          "message": "加载成功",
          "data": {
            "taskCycle": [
              "7天",
              "15天",
              "30天",
              "60天",
              "90天"
            ],
            "serviceMode": [
              "驻场",
              "远程",
              "全职"
            ],
            "positionList": [
              [
                {
                  "id": 14,
                  "pid": 0,
                  "position_name": "技术"
                },
                {
                  "id": 16,
                  "pid": 0,
                  "position_name": "市场"
                },
                {
                  "id": 17,
                  "pid": 0,
                  "position_name": "运营"
                },
                {
                  "id": 18,
                  "pid": 0,
                  "position_name": "产品设计"
                },
                {
                  "id": 19,
                  "pid": 0,
                  "position_name": "人力资源"
                },
                {
                  "id": 22,
                  "pid": 14,
                  "position_name": "前端开发"
                },
                {
                  "id": 25,
                  "pid": 14,
                  "position_name": "安卓开发"
                },
                {
                  "id": 26,
                  "pid": 14,
                  "position_name": "ios开发"
                },
                {
                  "id": 27,
                  "pid": 14,
                  "position_name": "测试"
                },
                {
                  "id": 28,
                  "pid": 14,
                  "position_name": "运维/技术支持"
                },
                {
                  "id": 29,
                  "pid": 14,
                  "position_name": "php开发"
                },
                {
                  "id": 30,
                  "pid": 16,
                  "position_name": "市场调研"
                },
                {
                  "id": 31,
                  "pid": 16,
                  "position_name": "网络营销"
                },
                {
                  "id": 32,
                  "pid": 16,
                  "position_name": "活动策划"
                },
                {
                  "id": 33,
                  "pid": 16,
                  "position_name": "商务渠道"
                },
                {
                  "id": 34,
                  "pid": 17,
                  "position_name": "内容运营"
                },
                {
                  "id": 35,
                  "pid": 17,
                  "position_name": "活动运营"
                },
                {
                  "id": 36,
                  "pid": 17,
                  "position_name": "新媒体运营"
                },
                {
                  "id": 37,
                  "pid": 17,
                  "position_name": "视频剪辑"
                },
                {
                  "id": 38,
                  "pid": 18,
                  "position_name": "UI设计师"
                },
                {
                  "id": 39,
                  "pid": 18,
                  "position_name": "视觉设计师"
                },
                {
                  "id": 40,
                  "pid": 18,
                  "position_name": "产品经理"
                },
                {
                  "id": 41,
                  "pid": 18,
                  "position_name": "项目经理"
                },
                {
                  "id": 42,
                  "pid": 19,
                  "position_name": "人力资源主管"
                },
                {
                  "id": 43,
                  "pid": 19,
                  "position_name": "招聘"
                },
                {
                  "id": 44,
                  "pid": 19,
                  "position_name": "HRBP"
                },
                {
                  "id": 45,
                  "pid": 19,
                  "position_name": "人事/HR"
                },
                {
                  "id": 48,
                  "pid": 14,
                  "position_name": "java开发"
                }
              ]
            ]
          }
        }
      };
    },
  },
  {
    url: "/api/task/taskAllList",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: {
          records: [
            {
              task_id: 33,
              task_name: "拯救喵星人",
              position_name: "前端开发",
              task_budget: 1,
              task_cycle: 60,
              service_mode: "驻场",
              task_ask: "救救孩子吧",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 38,
              task_name: "金融行业app的一个小程序设计",
              position_name: "UI设计师",
              task_budget: 15000,
              task_cycle: 30,
              service_mode: "全职",
              task_ask:
                "金融行业的小程序设计，对ui界面要求很高，有完整的小程序开发者优先，能独立完成一整套小程序设计的流程，跟踪开发落地。",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 39,
              task_name: "app推广运营方案",
              position_name: "新媒体运营",
              task_budget: 10000,
              task_cycle: 15,
              service_mode: "远程",
              task_ask:
                "公司落地一个app项目，金融保险行业，希望运营者有该方面的运营经验，公司希望在一个月内能完成该运营的初步展示成功，公司提供运营支持。",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 47,
              task_name: "指尖星球",
              position_name: "安卓开发",
              task_budget: 10000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "需要对照UI设计图纸完成页面，并接入第三方广告",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 48,
              task_name: "测试APP",
              position_name: "测试",
              task_budget: 10000,
              task_cycle: 90,
              service_mode: "远程",
              task_ask: "暂无",
              task_grade: "高级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 49,
              task_name: "技术支持",
              position_name: "运维/技术支持",
              task_budget: 3000,
              task_cycle: 15,
              service_mode: "驻场",
              task_ask: "暂无",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 50,
              task_name: "完成功能接口",
              position_name: "php开发",
              task_budget: 8000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "完成功能接口",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 51,
              task_name: "完成功能接口",
              position_name: "java开发",
              task_budget: 10000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "完成功能接口",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 52,
              task_name: "市场调研",
              position_name: "市场调研",
              task_budget: 20000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "完成功能接口",
              task_grade: "高级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 53,
              task_name: "网络营销",
              position_name: "网络营销",
              task_budget: 30000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "网络营销",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 54,
              task_name: "活动策划",
              position_name: "活动策划",
              task_budget: 3000,
              task_cycle: 15,
              service_mode: "驻场",
              task_ask: "活动策划",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 55,
              task_name: "商务渠道",
              position_name: "商务渠道",
              task_budget: 10000,
              task_cycle: 15,
              service_mode: "远程",
              task_ask: "商务渠道",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 56,
              task_name: "内容运营",
              position_name: "内容运营",
              task_budget: 6000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "商务渠道",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 57,
              task_name: "活动运营",
              position_name: "活动运营",
              task_budget: 3000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "活动运营",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 58,
              task_name: "视频剪切",
              position_name: "视频剪辑",
              task_budget: 5000,
              task_cycle: 15,
              service_mode: "远程",
              task_ask: "视频剪切",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 59,
              task_name: "视觉设计",
              position_name: "视觉设计师",
              task_budget: 8000,
              task_cycle: 15,
              service_mode: "驻场",
              task_ask: "视觉设计",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 60,
              task_name: "产品经理",
              position_name: "产品经理",
              task_budget: 10000,
              task_cycle: 15,
              service_mode: "远程",
              task_ask: "产品经理",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 61,
              task_name: "项目经理",
              position_name: "项目经理",
              task_budget: 20000,
              task_cycle: 60,
              service_mode: "远程",
              task_ask: "项目经理",
              task_grade: "初级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 62,
              task_name: "人力资源主管",
              position_name: "人力资源主管",
              task_budget: 20000,
              task_cycle: 30,
              service_mode: "全职",
              task_ask: "人力资源主管",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 63,
              task_name: "人力资源",
              position_name: "招聘",
              task_budget: 8000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "人力资源",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 64,
              task_name: "HR",
              position_name: "HRBP",
              task_budget: 10000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "人力资源",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 65,
              task_name: "人力资源",
              position_name: "人事/HR",
              task_budget: 15000,
              task_cycle: 30,
              service_mode: "全职",
              task_ask: "人力资源",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 67,
              task_name: "前端开发兼职",
              position_name: "前端开发",
              task_budget: 8000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "负责页面开发",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "朝阳区",
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 68,
              task_name: "前端助理00",
              position_name: "前端开发",
              task_budget: 1000000,
              task_cycle: 7,
              service_mode: "驻场",
              task_ask: "暂无要求",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: "北京驻场无忧科技有限公司",
              city: "北京",
              area: "大兴区",
              user_name: "李双全",
              it_head:
                "http://api.share.zcwytd.com/upload/images/headImg/gBoqZ9REBY_VhNJuZFt3OkSY.png",
              is_emergency: 0,
            },
            {
              task_id: 35,
              task_name: "拯救世界",
              position_name: "前端开发",
              task_budget: 11,
              task_cycle: 7,
              service_mode: "驻场",
              task_ask: "拯救世界",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 36,
              task_name: "小程序开发",
              position_name: "前端开发",
              task_budget: 1000000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "小程序  打包上线",
              task_grade: "高级",
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 1,
            },
            {
              task_id: 37,
              task_name: "前端小程序功能开发",
              position_name: "前端开发",
              task_budget: 12000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask:
                "目前项目上有一个着急的功能需要有经验的前端工程师进行对接，解决问题并完成上线，具体细节在沟通中详细介绍。",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 40,
              task_name: "教育行业后台系统开发",
              position_name: "java开发",
              task_budget: 20000,
              task_cycle: 60,
              service_mode: "驻场",
              task_ask: "教育行业后台经验优先",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 41,
              task_name: "医疗app设计",
              position_name: "UI设计师",
              task_budget: 111111,
              task_cycle: 7,
              service_mode: "驻场",
              task_ask: "app设计",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
            {
              task_id: 43,
              task_name: "99999",
              position_name: "ios开发",
              task_budget: 99999,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "99999",
              task_grade: null,
              isdelete: 0,
              is_check: 1,
              company_name: null,
              city: null,
              area: null,
              user_name: null,
              it_head: null,
              is_emergency: 0,
            },
          ],
          count: 30,
          page: 1,
          pageSize: 10,
        },
      };
    },
  },
  {
    url: "/api/task/getTaskDetails",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: {
          records: [
            {
              task_id: 33,
              task_name: "拯救喵星人",
              position_name: "前端开发",
              task_budget: 1,
              task_cycle: 60,
              service_mode: "驻场",
              task_ask: "救救孩子吧",
              task_grade: "初级",
              is_check: 1,
              curr_identity: 1,
              user_id: 9,
              user_name: "陈晶",
              head_img:
                "http://test.api.share.eduwys.com:10011/upload/images/ad76ee1004f311eda31d57236c9b1ce8/屏幕截图 2022-07-11 200824.png",
              logo: "http://test.api.share.eduwys.com:10011/upload/images/13b6b1d0f81311ec8fd3f53776edf832/1656552136142_mmexport1656552061991.png",
              company_name: "北京驻场无忧科技有限公司",
              it_head:
                "http://api.share.zcwytd.com/upload/images/headImg/BehIQv2JXCwwjf0suog5qkrp.png",
              status: 0,
            },
          ],
        },
      };
    },
  },
  {
	"code": 200,
	"success": "ok",
	"result": {
		"errCode": 200,
		"msg": "已添加收藏",
		"data": {
			"fieldCount": 0,
			"affectedRows": 1,
			"insertId": 59,
			"serverStatus": 2,
			"warningCount": 0,
			"message": "",
			"protocol41": true,
			"changedRows": 0,
			"status": 1
		}
	}
},
  {
    url: "/api/position/public/getHotSeach",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: {
          errCode: 200,
          data: [
            {
              id: 339,
              title: "前端开发",
              count_title: 1511,
            },
            {
              id: 341,
              title: "后端开发",
              count_title: 107,
            },
            {
              id: 530,
              title: "测试",
              count_title: 46,
            },
            {
              id: 503,
              title: "UI设计师",
              count_title: 43,
            },
            {
              id: 521,
              title: "前端",
              count_title: 8,
            },
            {
              id: 1358,
              title: "人力资源主管",
              count_title: 4,
            },
          ],
        },
      };
    },
  },
  {
    url: "/api/task/myTaskAllList",
    method: "get",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: {
          records: [
            {
              task_id: 35,
              task_name: "后端java驻场1个月",
              position_name: "java开发",
              task_budget: 15000,
              task_cycle: 30,
              service_mode: "驻场",
              task_ask: "朝阳区中级java驻场一个月，熟练spring boot",
              task_grade: "中级",
              isdelete: 0,
              is_check: 1,
              is_check_text: "已开启",
            },
            {
              task_id: 77,
              task_name: "2323",
              position_name: "前端开发",
              task_budget: 22,
              task_cycle: 15,
              service_mode: "远程",
              task_ask: "asdf",
              task_grade: "初级",
              isdelete: 0,
              is_check: 2,
              is_check_text: "已下架",
            },
            {
              task_id: 78,
              task_name: "asfs",
              position_name: "前端开发",
              task_budget: 233,
              task_cycle: 7,
              service_mode: "驻场",
              task_ask: "fadsf",
              task_grade: null,
              isdelete: 0,
              is_check: 3,
              is_check_text: "已关闭",
            },
            {
              task_id: 79,
              task_name: "微信小程序原生开发",
              position_name: "前端开发",
              task_budget: 20000,
              task_cycle: 30,
              service_mode: "远程",
              task_ask: "1、一个月完成小 程序开发并上线",
              task_grade: null,
              isdelete: 0,
              is_check: 0,
              is_check_text: "审核中",
            },
          ],
          count: 4,
          page: 1,
          pageSize: 10,
        },
      };
    },
  },
  {
    url: "/api/task/addtask",
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        success: "ok",
        result: { errCode: 200, msg: "任务发布成功" },
      };
    },
  },
  {
    url: "/api/task/onOrOff",
    method: "put",
    response: ({ body }) => {
      return {
        "code":200,
        "success":"ok",
        "result":{"errCode":200,"msg":"任务发布成功"}
      };
    },
  }
] as MockMethod[];
