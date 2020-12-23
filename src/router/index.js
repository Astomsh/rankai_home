import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: "/homePage",
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: "/ai",
    name: "AIView",
    component: () => import('../views/AIProducts.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
