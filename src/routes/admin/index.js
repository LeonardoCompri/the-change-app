import VerifyToken from "../../helpers/VerifyToken";

import Index from '@/pages/admin/Index'

export default [
  {
    path: '/admin',
    component: Index,
    name: 'Início admin',
    beforeEnter: VerifyToken
  }
]
