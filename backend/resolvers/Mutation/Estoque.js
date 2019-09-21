const db = require('../../db/knex')

module.exports = {
    async novoEstoque(_, { dados }){
        return await db.insert({ ...dados }).into('estoque')
    },
    async excluirEstoque(_, { filtro }){
        return await db('estoque').where({ ...filtro }).update({ ...dados })
    },
    async alterarEstoque( _, { filtro, dados }){
        return await db('estoque').where({ ...filtro }).update({ ...dados })
    }
}