import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tracking',
    name: 'Tracking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TrackingView.vue')
  },
  {
    path: '/visualize',
    name: 'visualize',
    component: () => import(/* webpackChunkName: "about" */ '../views/Visualize.vue')
  },
  {
    path: '/problem',
    name: 'problem',
    component: () => import('../views/Problem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
