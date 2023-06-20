import api from '@/services/Api'

export default {
    async login({commit, getters}, credenciais) {
        try {
            let {data} = await api.post("users/login", credenciais)
            if (data.status) {
                let {usuario, token} = data
                commit("SET_USER", usuario)
                commit("SET_TOKEN", token)
            }
            return data
        } catch (e) {
            return {status: false}
        }
    },


    async register({commit, getters}, user) {
        try {
            let {data} = await api.post("users/register", user)
            return data
        } catch (e) {
            return false
        }
    },


    async lisUsers({commit, getters}, params) {
        try {
            let {data} = await api.get("users", { params })
            return data
        } catch (e) {
            return null
        }
    },


    async updateProfile ({commit, getters}, form) {
        try {
            const { data } = await api.post('/profile', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            commit("SET_USER", data)
            return data
        } catch (e) {
            return false
        }
    }
}
