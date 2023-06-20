import store from '../store/index.js'

function VerifyToken (to, from, next)
{
    let jwt  = localStorage.getItem("token")
    let user = JSON.parse( localStorage.getItem("usuario") )
    store.modules.users.state.user  = user
    store.modules.users.state.token = jwt

    return ( !localStorage.getItem("token") ) ? next('/login') : next()
}
export default VerifyToken
