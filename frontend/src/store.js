import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioLogado: false
  },
  mutations: {
    
    login(state, token){
      localStorage.setItem( 'token', `Bearer ${token}` )

      state.usuarioLogado = true
    },

    logout(state){
      localStorage.removeItem( 'token' )

      state.usuarioLogado = false
    }

  },
  actions: {

  }
})
