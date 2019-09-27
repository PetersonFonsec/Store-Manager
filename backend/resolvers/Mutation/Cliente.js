const Client = require('../../controllers/Cliente')

module.exports = {
    novoCliente(_, { dados }){
        return Client.newClient(dados)
    },
    excluirCliente(_, { filtro }){
        return Client.deleteClient(filtro)
    },
    alterarCliente( _, { filtro, dados }){
        return Client.updateClient(filtro, dados)
    }
}