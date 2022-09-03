import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../components/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/add-restaurant',
    name: 'AddRestaurant',
    component: () => import(/* webpackChunkName: "addrestaurant" */ '../components/AddResto.vue')
  },
  {
    path: '/update-restaurant',
    name: 'UpdateRestaurant',
    component: () => import(/* webpackChunkName: "updaterestaurant" */ '../components/UpdateResto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
