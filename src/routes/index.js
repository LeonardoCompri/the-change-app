import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Admin from './admin/index'
import Inicio from "../pages/Inicio"
import Login from "../pages/Login.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    ...Admin,
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/teste',
      name: 'login',
      component: Login
    }
  ]
})