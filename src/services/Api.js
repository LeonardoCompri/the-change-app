import axios from "axios"
import config from "../../config"
import VuexStore from "../store"
import router from "../routes";

let $api = axios.create({
  baseURL: config.api
})

$api.interceptors.request.use( async config => {
  config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  return config
}, err => {
  return Promise.reject(err)
})


$api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            // Redirecionar para a página de login
            localStorage.removeItem("usuario")
            localStorage.removeItem("token")
            router.push("/login");
        }
        return Promise.reject(error);
    }
);

export default  $api
