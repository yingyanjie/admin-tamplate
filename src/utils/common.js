var Common = {};
Common.menusData = [
  {
    "code": "app26583",
    "title": null,
    "parentId": 2,
    "name": "应用管理",
    "menuType": "MENU",
    "menuId": 3,
    "tabs": [],
    "permission": [
      "ADD",
      "DELETE",
      "EDIT",
      "START/STOP"
    ]
  },
  {
    "code": "menu19010",
    "title": null,
    "parentId": 2,
    "name": "菜单配置",
    "menuType": "MENU",
    "menuId": 4,
    "tabs": [],
    "permission": [
      "ADD",
      "DELETE",
      "EDIT",
      "START/STOP"
    ]
  },
  // {
  //   "code": "DeviceInfo34722",
  //   "title": null,
  //   "parentId": 5,
  //   "name": "设备信息",
  //   "menuType": "MENU",
  //   "menuId": 6,
  //   "tabs": [],
  //   "permission": [
  //     "F_ADD",
  //     "F_DELETE",
  //     "F_EDIT",
  //     "ADD",
  //     "DELETE",
  //     "EDIT",
  //     "LOOK"
  //   ]
  // },
  // {
  //   "code": "orderManage35281",
  //   "title": null,
  //   "parentId": 14,
  //   "name": "订单管理",
  //   "menuType": "MENU",
  //   "menuId": 18,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "EDIT",
  //     "INPORT",
  //     "DELETE",
  //     "SEND"
  //   ]
  // },
  // {
  //   "code": "intentionOrder77092",
  //   "title": null,
  //   "parentId": 14,
  //   "name": "意向订单",
  //   "menuType": "MENU",
  //   "menuId": 19,
  //   "tabs": [],
  //   "permission": [
  //     "DEAL"
  //   ]
  // },
  // {
  //   "code": "MenuAdministration71684",
  //   "title": null,
  //   "parentId": 22,
  //   "name": "菜单管理",
  //   "menuType": "MENU",
  //   "menuId": 23,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "MODIFY",
  //     "DELETE"
  //   ]
  // },
  // {
  //   "code": "ContentAdministration10456",
  //   "title": null,
  //   "parentId": 22,
  //   "name": "内容管理",
  //   "menuType": "MENU",
  //   "menuId": 24,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "MODIFY",
  //     "DELETE"
  //   ]
  // },
  // {
  //   "code": "BannerAdministration21349",
  //   "title": null,
  //   "parentId": 22,
  //   "name": "banner管理",
  //   "menuType": "MENU",
  //   "menuId": 25,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "MODIFY",
  //     "DELETE"
  //   ]
  // },
  // {
  //   "code": "organi22164",
  //   "title": null,
  //   "parentId": 26,
  //   "name": "组织架构",
  //   "menuType": "MENU",
  //   "menuId": 27,
  //   "tabs": [],
  //   "permission": [
  //     "ADD_ORGANIZA",
  //     "EDIT_ORGANIZA",
  //     "DETELE_ORGANIZA",
  //     "ADD",
  //     "EDIT",
  //     "DELETE",
  //     "START/STOP"
  //   ]
  // },
  // {
  //   "code": "role12446",
  //   "title": null,
  //   "parentId": 26,
  //   "name": "角色管理",
  //   "menuType": "MENU",
  //   "menuId": 28,
  //   "tabs": [],
  //   "permission": [
  //     "ADD_ROLE",
  //     "EDIT_ROLE",
  //     "DETELE_ROLE",
  //     "ADD_STAFF",
  //     "DETELE_STAFF",
  //     "BATCH_DETELE_STAFF"
  //   ]
  // },
  // {
  //   "code": "juris92875",
  //   "title": null,
  //   "parentId": 26,
  //   "name": "权限管理",
  //   "menuType": "MENU",
  //   "menuId": 29,
  //   "tabs": [],
  //   "permission": [
  //     "PRESERVATION"
  //   ]
  // },
  // {
  //   "code": "DataDictionary30044",
  //   "title": null,
  //   "parentId": 26,
  //   "name": "数据字典",
  //   "menuType": "MENU",
  //   "menuId": 30,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "EDIT",
  //     "CONFIGURE"
  //   ]
  // },
  // {
  //   "code": "CodeingRules5795",
  //   "title": null,
  //   "parentId": 26,
  //   "name": "编码规则配置",
  //   "menuType": "MENU",
  //   "menuId": 31,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "EDIT",
  //     "DELETE"
  //   ]
  // },
  // {
  //   "code": "tenantMng99675",
  //   "title": null,
  //   "parentId": 32,
  //   "name": "租户管理",
  //   "menuType": "MENU",
  //   "menuId": 33,
  //   "tabs": [],
  //   "permission": [
  //     "ADD_TENANT",
  //     "ADD_CUSTOMER",
  //     "EDIT",
  //     "ACTIVATION"
  //   ]
  // },
  // {
  //   "code": "appConfig23274",
  //   "title": null,
  //   "parentId": 32,
  //   "name": "应用配置",
  //   "menuType": "MENU",
  //   "menuId": 34,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "EDIT",
  //     "DELETE"
  //   ]
  // },
  // {
  //   "code": "templateManage94244",
  //   "title": null,
  //   "parentId": 9,
  //   "name": "模版管理",
  //   "menuType": "MENU",
  //   "menuId": 10,
  //   "tabs": [],
  //   "permission": [
  //     "ADD",
  //     "EDIT_TEM",
  //     "EDIT_MES",
  //     "DELETE",
  //     "LOOK"
  //   ]
  // },
  // {
  //   "code": "mgeSending81222",
  //   "title": null,
  //   "parentId": 9,
  //   "name": "消息发送",
  //   "menuType": "MENU",
  //   "menuId": 11,
  //   "tabs": [],
  //   "permission": [
  //     "ADD"
  //   ]
  // },
  // {
  //   "code": "waitSend43667",
  //   "title": null,
  //   "parentId": 9,
  //   "name": "待发送消息",
  //   "menuType": "MENU",
  //   "menuId": 12,
  //   "tabs": [
  //     {
  //       "name": "业务消息",
  //       "tcode": "CUSTOMER",
  //       "permission": [
  //         "SEND",
  //         "MODIFY"
  //       ]
  //     },
  //     {
  //       "name": "一般消息",
  //       "tcode": "NAOMAL_MES",
  //       "permission": [
  //         "SEND",
  //         "MODIFY"
  //       ]
  //     }
  //   ],
  //   "permission": []
  // },
  // {
  //   "code": "sendHistory14634",
  //   "title": null,
  //   "parentId": 9,
  //   "name": "已发送记录",
  //   "menuType": "MENU",
  //   "menuId": 13,
  //   "tabs": [
  //     {
  //       "name": "业务消息",
  //       "tcode": "CUSTOMER",
  //       "permission": [
  //         "SEND",
  //         "MODIFY"
  //       ]
  //     },
  //     {
  //       "name": "一般消息",
  //       "tcode": "NAOMAL_MES",
  //       "permission": [
  //         "SEND",
  //         "MODIFY"
  //       ]
  //     }
  //   ],
  //   "permission": []
  // }
]

export {
  Common
}