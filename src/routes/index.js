import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Admin from './admin/index'
import Introducao from "../pages/Introducao.vue"
import Carrossel from "../pages/Carrossel.vue"
import Inicio from "../pages/Inicio"
import Login from "../pages/Login.vue"
import Cadastro from "../pages/Cadastro.vue"
import Verificacao from "../pages/Verificacao.vue"
import AlterarPalavraPasse from "../pages/AlterarPalavraPasse.vue"

import Home from "../pages/Home.vue"
import Donativo from "../pages/Donativo.vue"
import ComoChegar from "../pages/ComoChegar.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    ...Admin,
    {
      path: '/introducao',
      name: 'introducao',
      component: Introducao
    },
    {
      path: '/carrossel',
      name: 'carrossel',
      component: Carrossel
    },
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
    },
    {
      path: '/alterar-palavra-passe',
      name: 'alterar-palavra-passe',
      component: AlterarPalavraPasse
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/donativo',
      name: 'donativo',
      component: Donativo
    },
    {
      path: '/como-chegar',
      name: 'como-chegar',
      component: ComoChegar
    },
  ]
})