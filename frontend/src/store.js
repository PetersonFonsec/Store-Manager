import Vue from 'vue'
import Vuex from 'vuex'
import Sistema from '@/store/Modulo_Sistema'
import Usuario from '@/store/Modulo_Usuario'
import Empresa from '@/store/Modulo_Empresa'

Vue.use( Vuex )

export default new Vuex.Store({
  modules : { 
      Sistema,
      Usuario,
      Empresa
    }
})
