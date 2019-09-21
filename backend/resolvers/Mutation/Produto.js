const db = require('../../db/knex')

module.exports = {
    async novoProdutos(_, { dados }){
        return await db.insert({ ...dados }).into('produtos')
    },
    async excluirProdutos(_,{ filtro }){
        return await db('produtos').where({ ...filtro  }).delete()
    },
    async alterarProdutos( _, {filtro, dados}){
        return await db('produtos').where({ ...filtro }).update({ ...dados })
    }
}
