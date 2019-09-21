const db = require('../../db/knex')

module.exports = {
    async fornecedores(){
        return await db('fornecedores')
    },
    async fornecedor(_,{ filtro }){
        return await db('fornecedores').where({ ...filtro }).first()
    },
}