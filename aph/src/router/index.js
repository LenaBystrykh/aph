import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
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
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
