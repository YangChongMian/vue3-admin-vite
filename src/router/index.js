import * as VueRouter from "vue-router"
import Layout from "@/components/Navbar.vue"


const publicRouter = [
  {
    path:'/login',
    component: () => import('@/views/login.vue')
  },
  {
    path:'/register',
    component: () => import('@/views/register.vue')
  },
  {
    path:'/404',
    component: () => import('@/views/404.vue')
  }
]
export const routes = [
  {
    path:'/',
    component:Layout,
    meta:{
      name:'企业管理'
    },
    children:[
      {
          path:'/crm',
          component:() => import('@/views/index.vue'),
          meta:{
            name:'首页'
          }
      },
      {
        path:'/index',
        component:() => import('@/views/index.vue'),
        meta:{
          name:'首页'
        }
      },
      {
        path:'/hello',
        component:() => import('@/components/HelloWorld.vue'),
        meta:{
          name:'介绍'
        }
      }
    ]
  },
  {
    path:'/',
    component:Layout,
    meta:{
      name:'日志'
    },
    children:[
      {
        path:'/journal',
        component:() => import('@/components/HelloWorld.vue'),
        meta:{
          name:'日志1'
        }
      }
    ]
  }
]

const routers = [...publicRouter, ...routes]

const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes:routers
})

export default router