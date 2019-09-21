const db = require('../../db/knex')

module.exports = {
    async novoCliente(_, { dados }){

        await db.insert({ ...dados }).into('clientes')

        return { ...dados }
    },
    async excluirCliente(_, { filtro }){

        return await db('clientes').wehre({ ...filtro }).delete()

    },
    async alterarCliente( _, { filtro, dados }){
        return await db('clientes').wehre({ ...filtro }).update({ ...dados })
    }
}