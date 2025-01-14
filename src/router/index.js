import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router