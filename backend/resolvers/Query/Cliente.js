const Client = require('../../controllers/Cliente')

module.exports = {
    clientes(){
        return Client.clients()
    },
    cliente(_, { filtro }){
        return Client.client(filtro)
    },
}