const db = require('../../db/knex')

module.exports = {
    async novoFornecedor(_, { dados }){
        return await db.insert({ ...dados }).into('fornecedores')
    },
    async excluirFornecedor(_,{ filtro }){
        return await db('fornecedores').where({ ...filtro }).delete()
    },
    async alterarFornecedor( _, {filtro, dados}){
        return await db('fornecedores').where({ ...filtro }).update({ ...dados })
    }
}