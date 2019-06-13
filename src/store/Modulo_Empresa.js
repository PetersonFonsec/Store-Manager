export default {
    state:{
        titulo: 'titulo',
        pathPrefixo: '',
        pathLogo: '@/assets/logo.png'
    },
    mutations: {
        setTitulo( state, payload){
          state.titulo = payload
        },
        setPathLogo( state, payload){
          state.pathLogo = payload
        },
    }
}