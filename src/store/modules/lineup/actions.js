import api from '@/services/Api'

export default {
    async lisLineup({commit, getters}, params) {
        try {
            let {data} = await api.get("lineups", { params })
            return data
        } catch (e) {
            return null
        }
    },

    async showLineup({commit, getters}, id) {
        try {
            let {data} = await api.get("lineups/" + id)
            return data
        } catch (e) {
            return null
        }
    },


    async storeLineup ({}, form) {
        try {
            const { data } = await api.post('/lineup', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return data
        } catch (e) {
            return false
        }
    },
}
