const db = require('../../db/knex')

module.exports = {
    async novaCompra(_, { dados }){
        return await db.insert({ ...dados }).into('compras')
    },
    async excluirCompra(_,{ filtro }){
        return await db('compras').where({ ...filtro }).delete()

    },
    async alterarCompra( _, { filtro, dados }){
        return await db('compras').where({ ...filtro }).update({ ...dados })

    }
}