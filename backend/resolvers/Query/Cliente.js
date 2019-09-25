const clienteController = require('../../controllers/Cliente')

module.exports = {
    clientes(){
        return clienteController.clientes()
    },
    cliente(_, { filtro }){
        return clienteController.cliente(filtro)
    },
}