const UsuarioController = require('../../controllers/Usuario')

module.exports = {
    login(_, { email, senha }){
        
        return UsuarioController.login(email, senha)
    },
    usuarios(){
        return UsuarioController.listarUsuarios()
    },
    usuario( _, { filtro } ){
        return UsuarioController.buscarUsuario(filtro)
    },
}