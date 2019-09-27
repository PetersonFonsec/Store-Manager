const User = require('../../controllers/Usuario')

module.exports = {
    novoUsuario(_, { dados }){
        return User.newClient(dados)
    },
    excluirUsuario(_,{ filtro }){
        return User.deleteClient(filtro)
    },
    alterarUsuario( _, { filtro, dados }){
        return User.updateClient(filtro, dados)
    }
}
