const UsuarioController = require('../../controllers/Usuario')

module.exports = {
    usuarios(){
        return UsuarioController.listarUsuarios()
    },
    usuario( _, { filtro } ){
        return UsuarioController.buscarUsuario(filtro)
    },
}