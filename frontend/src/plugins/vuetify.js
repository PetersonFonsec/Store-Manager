import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: 'md',
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
