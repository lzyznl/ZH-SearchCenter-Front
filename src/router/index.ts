import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import indexPage from '../page/indexPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: indexPage
  },{
    path: '/:category',
    component: indexPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
