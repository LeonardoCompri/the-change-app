import store from '../store/index.js'

function VerifyToken (to, from, next)
{
    let jwt  = sessionStorage.getItem("token")
    let user = JSON.parse( sessionStorage.getItem("user") )
    store.modules.users.state.usuario  = user
    store.modules.users.state.token = jwt

    return ( !sessionStorage.getItem("token") ) ? next('/admin/login') : next()
}
export default VerifyToken
