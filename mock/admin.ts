import { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: "/api/admin/home/contract/list",
        method: "get",
        response: ({ body }) => {
            return {
                "code": 200,
                "success": "ok",
                "result": {
                    "records": [
                        {
                            "contract_id": 149,
                            "contract_name": "恒星Project",
                            "contract_type": "技术服务",
                            "phone": null,
                            "task_salary": 22000,
                            "start_cycle_time": "2023-5-10",
                            "end_cycle_time": "2023-6-6",
                            "settle_salary": null,
                            "signing_time": null,
                            "is_contract_type": 3,
                            "user_id": 25,
                            "check_out": "按月结算",
                            "task_ask": "尽快到岗",
                            "create_time": "2024-05-10 14:15:20",
                            "create_user_id": 25,
                            "user_name": "小哈",
                            "accounts": "13321178501",
                            "sex": 2,
                            "duties": null,
                            "work_time": "2020-01",
                            "birthday": "1990-01-01",
                            "it_head": "blob:http://localhost:8002/61c5e104-8661-45f7-933c-2d099d44d0cb",
                            "highest_education": "硕士/研究生",
                            "inside_type": "优秀",
                            "company_name": "江财汪汪队",
                            "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png",
                            "contract_I_state": 1,
                            "contract_I_stage": "不错",
                            "contract_II_state": -1,
                            "contract_II_stage": null,
                            "contract_III_stage": null,
                            "contract_III_state": -1,
                            "contract_IIII_state": -1,
                            "contract_IIII_stage": null,
                            "update_I_time": "2024-05-11 17:26:42",
                            "update_II_time": null,
                            "update_III_time": null,
                            "update_IIII_time": null,
                            "work_year": "4年",
                            "age": "34岁",
                            "is_contract_type_text": "履约中"
                        },
                        {
                            "contract_id": 151,
                            "contract_name": "前端界面设计与实现",
                            "contract_type": "技术服务",
                            "phone": null,
                            "task_salary": 15000,
                            "start_cycle_time": "2024-5-19",
                            "end_cycle_time": "2024-6-18",
                            "settle_salary": null,
                            "signing_time": null,
                            "is_contract_type": 3,
                            "user_id": 25,
                            "check_out": "按任务结算",
                            "task_ask": "认真完成",
                            "create_time": "2024-05-19 11:23:03",
                            "create_user_id": 25,
                            "user_name": "小哈",
                            "accounts": "13321178501",
                            "sex": 2,
                            "duties": null,
                            "work_time": "2020-01",
                            "birthday": "1990-01-01",
                            "it_head": "blob:http://localhost:8002/61c5e104-8661-45f7-933c-2d099d44d0cb",
                            "highest_education": "硕士/研究生",
                            "inside_type": "优秀",
                            "company_name": "江财汪汪队",
                            "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png",
                            "contract_I_state": -1,
                            "contract_I_stage": null,
                            "contract_II_state": -1,
                            "contract_II_stage": null,
                            "contract_III_stage": null,
                            "contract_III_state": -1,
                            "contract_IIII_state": -1,
                            "contract_IIII_stage": null,
                            "update_I_time": null,
                            "update_II_time": null,
                            "update_III_time": null,
                            "update_IIII_time": null,
                            "work_year": "4年",
                            "age": "34岁",
                            "is_contract_type_text": "履约中"
                        },
                        {
                            "contract_id": 153,
                            "contract_name": "test",
                            "contract_type": "技术服务",
                            "phone": null,
                            "task_salary": 11,
                            "start_cycle_time": "2023-6-7",
                            "end_cycle_time": "2024-1-1",
                            "settle_salary": null,
                            "signing_time": null,
                            "is_contract_type": 3,
                            "user_id": 15,
                            "check_out": "按任务结算",
                            "task_ask": "123",
                            "create_time": "2024-06-07 12:00:44",
                            "create_user_id": 1809,
                            "user_name": "吴志佳",
                            "accounts": "13146590119",
                            "sex": 0,
                            "duties": "技术总监",
                            "work_time": "2014-07",
                            "birthday": "1992-10",
                            "it_head": "http://api.share.zcwytd.com/upload/images/headImg/2ID3GE25U6eH8kEgsa5TxbNL.png",
                            "highest_education": "本科",
                            "inside_type": "0",
                            "company_name": "北京旺石科技有限公司",
                            "logo": "https://img5.tianyancha.com/logo/lll/356ba620e9aee1972a4d0f9522acb94e.png@!f_200x200",
                            "contract_I_state": -1,
                            "contract_I_stage": null,
                            "contract_II_state": -1,
                            "contract_II_stage": null,
                            "contract_III_stage": null,
                            "contract_III_state": -1,
                            "contract_IIII_state": -1,
                            "contract_IIII_stage": null,
                            "update_I_time": null,
                            "update_II_time": null,
                            "update_III_time": null,
                            "update_IIII_time": null,
                            "work_year": "9年",
                            "age": "31岁",
                            "is_contract_type_text": "履约中"
                        },
                        {
                            "contract_id": 141,
                            "contract_name": "小程序",
                            "contract_type": "技术服务",
                            "phone": null,
                            "task_salary": 10000,
                            "start_cycle_time": "2023-03-18",
                            "end_cycle_time": "2023-04-18",
                            "settle_salary": null,
                            "signing_time": null,
                            "is_contract_type": 3,
                            "user_id": 9,
                            "check_out": "按月结算",
                            "task_ask": "1,2,3",
                            "create_time": "2024-03-18 22:48:41",
                            "create_user_id": 25,
                            "user_name": "陈晶",
                            "accounts": "18201042491",
                            "sex": 0,
                            "duties": null,
                            "work_time": "2022-07",
                            "birthday": "2022-07-16",
                            "it_head": "http://api.share.zcwytd.com/upload/images/headImg/BehIQv2JXCwwjf0suog5qkrp.png",
                            "highest_education": "大专",
                            "inside_type": "0",
                            "company_name": null,
                            "logo": null,
                            "contract_I_state": 1,
                            "contract_I_stage": "不错哦",
                            "contract_II_state": -1,
                            "contract_II_stage": null,
                            "contract_III_stage": null,
                            "contract_III_state": -1,
                            "contract_IIII_state": -1,
                            "contract_IIII_stage": null,
                            "update_I_time": "2024-05-10 21:16:13",
                            "update_II_time": null,
                            "update_III_time": null,
                            "update_IIII_time": null,
                            "work_year": "1年",
                            "age": "1岁",
                            "is_contract_type_text": "履约中"
                        }
                    ],
                    "count": 4,
                    "page": 1,
                    "pageSize": 10
                }
            };
        },
    },
    {
        url: "/api/admin/home/contract/confirm",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/contract/pay/confirm",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/task/list",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/task/detail",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/task/edit",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/talent/list",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/talent/detail",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/talent/edit",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/company/list",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/company/detail",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/company/edit",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/auditor/company/edit",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/user/user/list",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/user/user/confirm",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/user/company/list",
        method: "get",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/user/company/confirm",
        method: "post",
        response: ({ body }) => {
            return { "code": 200, "success": "ok", "result": { "data": { "id": 1, "company_name": "江财汪汪队", "contacts": "刘明宇", "phone": "13321178501", "address": "汇龙森三园C座", "province": null, "city": "北京", "area": "朝阳区", "organization_code": "91110105MA00CURD2G", "permit": "http://api.share.zcwytd.com/upload/images/6d93c3c0e8f711ed82f8fd97666ab235/腾讯会议图片_20230425000149.png", "introduce": "lmy", "logo": "http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png", "photos": null, "industry_name": "技术服务", "financing_stage": "天使轮", "is_check": 1, "isdelete": "0", "create_time": "2022-06-29 19:51:34", "update_time": "2022-07-08 13:47:02", "welfare": null, "welfare_pic": null, "company_picture": "", "company_nums_text": "20-99人", "on_job_pic": null } } };
        },
    },
    {
        url: "/api/admin/home/chart",
        method: "get",
        response: ({ body }) => {
            return {
                "code": 200,
                "success": "ok",
                "result": {
                    "line": {
                        "title": [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ],
                        "lastWeek": {
                            "name": "上周",
                            "data": [
                                10,
                                12,
                                15,
                                13,
                                14,
                                8,
                                6
                            ]
                        },
                        "theWeek": {
                            "name": "本周",
                            "data": [
                                8,
                                12,
                                15,
                                13,
                                14
                            ]
                        }
                    },
                    "bar": {
                        "title": [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ],
                        "talent": {
                            "name": "人才",
                            "data": [
                                12,
                                10,
                                15,
                                20,
                                12,
                                8,
                                10
                            ]
                        },
                        "company": {
                            "name": "企业",
                            "data": [
                                8,
                                10,
                                11,
                                15,
                                12,
                                10,
                                8
                            ]
                        }
                    },
                    "pie": [
                        {
                            "value": 10,
                            "name": "18-20"
                        },
                        {
                            "value": 15,
                            "name": "20-22"
                        },
                        {
                            "value": 20,
                            "name": "22-24"
                        },
                        {
                            "value": 30,
                            "name": "24-26"
                        },
                        {
                            "value": 20,
                            "name": "26以上"
                        }
                    ]
                }
            }
        }
    }
] as MockMethod[]