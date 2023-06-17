import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import Vuex from 'vuex'
import EventHub from 'vue-event-hub'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuex)
Vue.use(EventHub)
import VuexStore from './store'
const store = new Vuex.Store(VuexStore)

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VuetifyMoney from "vuetify-money"
Vue.use(VuetifyMoney)

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router
}).$mount('#app')
