import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import Mask from 'vue-the-mask'
import Money from 'v-money'
import Axios from 'axios';
// import Axios from 'axios'

Vue.config.productionTip = false

// Vue.use( Axios )
Vue.use( Mask )
Vue.use( Money, { precision: 4 } );

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth) {
    try {
      const token = localStorage.getItem("token");
      const _id = localStorage.getItem("_id");

      const resp = await Axios.get(`http://localhost:3000/user/${_id}`, {
        headers: {
          access: token,
        }
      });


      if (resp.data.length) {
        next();
      } else {
        router.push({ path: "/"});
      }
    } catch (err)  {
      router.push({ path: "/" });
    }
  }

  next();
});

new Vue({
  store,
  router,
  render: h => h( App )
}).$mount('#app')
