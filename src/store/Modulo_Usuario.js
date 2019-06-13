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
        setUpdateUser( state, payload ){
          for( let dado in payload ){
            state[ dado ] = payload[ dado ]
          }
        },
    }
}