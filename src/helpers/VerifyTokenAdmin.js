import store from '../store/index.js'

function VerifyTokenAdmin (to, from, next)
{
    let jwt  = localStorage.getItem("token")
    let user = JSON.parse( localStorage.getItem("usuario") )
    store.modules.users.state.usuario  = user
    store.modules.users.state.token = jwt

    console.log(user)

    if (!user) {
        return next('/admin/login')
    }

    return ( !localStorage.getItem("token") || !user.is_master ) ? next('/admin/login') : next()
}
export default VerifyTokenAdmin
