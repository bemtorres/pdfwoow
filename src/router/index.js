import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
// import PageDetail from '../views/PageDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  // {
  //   path: '/page/:id',
  //   name: 'page-detail',
  //   component: PageDetail,
  //   props: true,
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
