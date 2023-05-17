import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import LoginPage from '../views/LoginPage.vue'
import Completati from '../views/Completati.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'To-Do',
    component: Todo
  },
  {
    path: '/albo',
    name: 'albo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Albo.vue')
  },
  {
    path:'/Login',
    name:'LoginPage',
    component: LoginPage
  },
  {
    path:'/completati',
    name:'Completati',
    component: Completati
  }

]

const router = new VueRouter({
  routes
})

export default router
