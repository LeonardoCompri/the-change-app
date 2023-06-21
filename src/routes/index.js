import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Admin from './admin/index'
import Introducao from "../pages/Introducao.vue"
import Carrossel from "../pages/Carrossel.vue"
import Inicio from "../pages/admin/Inicio.vue"
import Login from "../pages/Login.vue"
import Cadastro from "../pages/Cadastro.vue"
import Verificacao from "../pages/Verificacao.vue"
import AlterarPalavraPasse from "../pages/AlterarPalavraPasse.vue"

import Home from "../pages/Home.vue"
import Donativo from "../pages/Donativo.vue"
import ComoChegar from "../pages/ComoChegar.vue"
import Conta from "../pages/Conta.vue";
import ShowLineup from "../pages/ShowLineup.vue";
import Lineups from "../pages/Lineups.vue";
import Galeria from "../pages/Galeria.vue";
import ShowGaleria from "../pages/ShowGaleria.vue";

import VerifyToken from "../helpers/VerifyToken";
import EditarConta from "../pages/EditarConta.vue";
import EditarSenha from "../pages/EditarSenha.vue";
import Termos from "../pages/Termos.vue";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        ...Admin,
        {
            path: '/introducao',
            name: 'introducao',
            component: Introducao,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('lang')) {
                    next('/login')
                }
                next()
            }
        },
        {
            path: '/carrossel',
            name: 'carrossel',
            component: Carrossel
        },
        {
            path: '/',
            name: 'introducao',
            component: Introducao,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('lang')) {
                    next('/login')
                }
                next()
            }
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
            component: Home,
            // beforeEnter: VerifyToken
        },
        {
            path: '/donativo',
            name: 'donativo',
            component: Donativo,
            // beforeEnter: VerifyToken
        },
        {
            path: '/lineup/:id',
            name: 'lineup',
            component: ShowLineup,
            // beforeEnter: VerifyToken
        },
        {
            path: '/lineup',
            name: 'Lineup',
            component: Lineups,
            // beforeEnter: VerifyToken
        },

        {
            path: '/galeria',
            name: 'Galeria',
            component: Galeria,
            // beforeEnter: VerifyToken
        },
        {
            path: '/galeria/:id',
            name: 'galeria',
            component: ShowGaleria,
            // beforeEnter: VerifyToken
        },
        {
            path: '/como-chegar',
            name: 'como-chegar',
            component: ComoChegar,
            // beforeEnter: VerifyToken
        },
        {
            path: '/profile',
            name: 'profile',
            component: Conta,
            // beforeEnter: VerifyToken
        },
        {
            path: '/profile-update',
            name: 'profile-update',
            component: EditarConta,
            // beforeEnter: VerifyToken
        },

        {
            path: '/profile-update-pass',
            name: 'profile-update-pass',
            component: EditarSenha,
            // beforeEnter: VerifyToken
        },
        {
            path: '/termos',
            name: 'termos',
            component: Termos,
            // beforeEnter: VerifyToken
        },
    ]
})