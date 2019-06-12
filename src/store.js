import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store({
  state: {
    empresa:{
      titulo: 'titulo',
      pathPrefixo: '',
      pathLogo: '../assets/logo.png'
    },
    sistema:{
      particleJS: true,
      animate: true,
      corTema: '#111',
    }
  },
  mutations: {

  },
  actions: {

  }
})
