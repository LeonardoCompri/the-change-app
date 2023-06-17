import api from '@/services/Api'

export default {
  async login({commit, getters}, credenciais) {
    try {
      let {data} = await api.post("users/login", credenciais)
      if (data.status) {
        let {user, token} = data
        commit("SET_USER", user)
        commit("SET_TOKEN", token)
      }
      return data
    } catch (e) {
      return { status: false }
    }

  }
}
