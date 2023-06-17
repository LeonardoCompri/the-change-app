export default {
  'SET_USER' (state, u) {
    state.usuario = u
    sessionStorage.setItem("usuario", JSON.stringify(u) || null)
  },
  'SET_TOKEN' (state, token) {
    state.token = token
    sessionStorage.setItem("token", state.token || null)

  },
  'LOGOUT'(state){
    sessionStorage.removeItem("usuario")
    sessionStorage.removeItem("token")
    state.usuario  = {}
    state.token = ''
  }
}