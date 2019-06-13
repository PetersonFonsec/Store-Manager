export default {
    state :{        
      particleJS: true,
      animate: true,
    },
    mutations: {
      setParticle( state, payload){
        state.particleJS = payload
      },
      setAnimate( state, payload){
        state.animate = payload
      },
    }
}