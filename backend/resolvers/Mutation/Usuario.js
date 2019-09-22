const UsuarioController = require('../../controllers/Usuario')

module.exports = {
    novoUsuario(_, { dados }){
        return UsuarioController.novoUsuario(dados)
    },
    excluirUsuario(_,{ filtro }){
        return UsuarioController.excluirUsuario(filtro)
    },
    alterarUsuario( _, { filtro, dados }){
        return UsuarioController.alterarUsuario(filtro, dados)
    }
}
