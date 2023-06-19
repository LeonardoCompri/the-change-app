import VerifyToken from "../../helpers/VerifyToken";

import Index from '@/pages/admin/Index'
import Inicio from "../../pages/admin/Inicio.vue";
import VerifyTokenAdmin from "../../helpers/VerifyTokenAdmin";

import IndexUsers from "../../pages/admin/users/Index.vue";

import IndexLineUp from "../../pages/admin/lineup/Index.vue";

export default [
  {
    path: '/admin/home',
    component: Index,
    name: 'Início admin',
    beforeEnter: VerifyTokenAdmin
  },

    {
        path: '/admin/login',
        component: Inicio,
        name: 'LoginAdmin'
    },

    {
        path: '/admin/users',
        component: IndexUsers,
        name: 'Início admin',
        beforeEnter: VerifyTokenAdmin
    },

    {
        path: '/admin/lineup',
        component: IndexLineUp,
        name: 'Lineup admin',
        beforeEnter: VerifyTokenAdmin
    }
]
