export default {
    state:{
        nome: '',
        sobrenome: '',
        telefone: '',
        celular: '',
        email: '',
        dataNacimento: '',
        cpf: '',
        rg: '',
    },
    mutations: {
        setProp( state, payload){
            state[ payload.prop ] = payload.value
        },
        setNome( state, payload){
          state.nome = payload
        },
        setSobreNome( state, payload){
          state.sobrenome = payload
        },
        setTelefone( state, payload){
          state.telefone = payload
        },
        setCelular( state, payload){
          state.celular = payload
        },
        setEmail( state, payload){
          state.email = payload
        },
        setDataNacimento( state, payload){
          state.dataNacimento = payload
        },
        setCpf( state, payload){
          state.cpf = payload
        },
        setRg( state, payload){
          state.rg = payload
        },
    }
}