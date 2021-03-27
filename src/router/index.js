import Vue from 'vue'
import VueRouter from 'vue-router'

import { Common } from '@/utils/common'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '登陆',
      noCache: true,
      requireAuth: false
    },
    component: () => import("@/views/login")
  },
  {
    path: '',
    name: '',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: "home",
        meta: {
          title: '首页',
          noCache: true,
          requireAuth: true
        },
        component: () => import("@/views/home")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  console.log(to, from);
  console.log(Common.menusData)
  if(to.name === 'login'){
    localStorage.clear()
    next();
    return
  }
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (localStorage.getItem('token')) { // 查询本地存储信息是否已经登陆
      
      next();
    } else {
      alert("未登录");
      next({
        path: '/', // 未登录则跳转至login页面
      });
    }
  } else {
    next();
  }
});

export default router
