export default {
  'SET_USER' (state, u) {
    state.usuario = u
    localStorage.setItem("usuario", JSON.stringify(u) || null)
  },
  'SET_TOKEN' (state, token) {
    state.token = token
      localStorage.setItem("token", state.token || null)

  },
  'LOGOUT'(state){
      localStorage.removeItem("usuario")
      localStorage.removeItem("token")
    state.usuario  = {}
    state.token = ''
  }
}