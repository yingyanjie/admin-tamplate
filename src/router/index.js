import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta:{
      title:'登陆',
      noCache: true,
    },
    component: ()=>import("@/views/login")
  },
  {
    path: '',
    name: '',
    component: () => import('@/layout'),
    children:[
      {
        path:'/home',
        name:"home",
        component: ()=>import("@/views/home")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
