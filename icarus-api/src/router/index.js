import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
    redirect: '/home/personal/mock',
    children: [
      {
        path: '/home/personal/mock',
        name: 'Mock',
        key: 1,
        component: () => import('@/views/Home/Mock.vue'),
      },
      {
        path: '/home/personal/interfaces',
        name: 'Interfaces',
        key: 2,
        component: () => import('@/views/Home/Interfaces.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
