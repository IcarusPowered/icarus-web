import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    redirect: '/home/personal/mock',
    children: [
      {
        path: '/home/personal/mock',
        name: 'Mock',
        key: 1,
        component: () => import('@/views/Mock.vue'),
      },
      {
        path: '/home/personal/interfaces',
        name: 'Interfaces',
        key: 2,
        component: () => import('@/views/Interfaces.vue'),
      }
    ]
  },
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
