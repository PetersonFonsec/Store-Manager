const clienteController = require('../../controllers/Cliente')

module.exports = {
    novoCliente(_, { dados }){
        return clienteController.novoCliente(dados)
    },
    excluirCliente(_, { filtro }){
        return clienteController.excluirCliente(filtro)
    },
    alterarCliente( _, { filtro, dados }){
        return clienteController.alterarCliente(filtro, dados)
    }
}