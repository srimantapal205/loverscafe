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
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../components/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/add_restaurant',
    name: 'AddRestaurant',
    component: () => import(/* webpackChunkName: "addrestaurant" */ '../components/AddResto.vue')
  },
  {
    path: '/update_restaurant/:id',
    name: 'UpdateRestaurant',
    component: () => import(/* webpackChunkName: "updaterestaurant" */ '../components/UpdateResto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
