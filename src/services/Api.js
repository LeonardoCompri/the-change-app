import axios from "axios"
import config from "../../config"
import VuexStore from "../store"

let $api = axios.create({
  baseURL: config.api
})

$api.interceptors.request.use( async config => {
  config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  return config
}, err => {
  return Promise.reject(err)
})
export default  $api
