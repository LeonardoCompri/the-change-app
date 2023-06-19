import api from '@/services/Api'

export default {
    async listVideos({commit, getters}, params) {
        try {
            let {data} = await api.get("videos", { params })
            return data
        } catch (e) {
            return null
        }
    },

    async showVideo({commit, getters}, id) {
        try {
            let {data} = await api.get("videos/" + id)
            return data
        } catch (e) {
            return null
        }
    },


    async storeVideo ({}, form) {
        try {
            const { data } = await api.post('/videos', form, {
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
