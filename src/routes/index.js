import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Admin from './admin/index'
import Inicio from "../pages/Inicio"
import Login from "../pages/Login.vue"
import Cadastro from "../pages/Cadastro.vue"
import Verificacao from "../pages/Verificacao.vue"

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/verificacao',
      name: 'verificacao',
      component: Verificacao
    }
  ]
})