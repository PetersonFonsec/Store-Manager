import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import Mask from 'vue-the-mask'
import Money from 'v-money'
// import Axios from 'axios'

Vue.config.productionTip = false

// Vue.use( Axios )
Vue.use( Mask )
Vue.use( Money, { precision: 4 } )

new Vue({
  store,
  router,
  render: h => h( App )
}).$mount('#app')
