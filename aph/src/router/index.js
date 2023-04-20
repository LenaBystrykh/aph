import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/MatveyPortfolio.vue')
  },
  {
    path: '/matvey',
    name: 'matvey',
    component: () => import('@/views/MatveyPortfolio.vue')
  },
  {
    path: '/alena',
    name: 'alena',
    component: () => import('@/views/AlenaPortfolio.vue')
  },
  {
    path: '/katya',
    name: 'katya',
    component: () => import('@/views/KatyaPortfolio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
