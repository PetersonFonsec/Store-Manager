const db = require('../../db/knex')

module.exports = {
    async novaVenda(_, { dados }){
        return await db.insert({ ...dados }).into('vendas')
    },
    async excluirVenda(_,{ filtro }){
        return await db('vendas').where({ ...filtro }).delete()
    },
    async alterarVenda( _, { filtro, dados }){
        return await db('vendas').where({ ...filtro }).update({ ...dados })
    }
}
