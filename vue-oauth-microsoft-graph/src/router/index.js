import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/HomePage',
    name: 'Conversations',
    component: () => import('../components/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router