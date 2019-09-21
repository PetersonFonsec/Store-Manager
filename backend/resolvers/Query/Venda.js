const db = require('../../db/knex')

module.exports = {
    async vendas(){
        return db('vendas')
    },
    async venda(_,{filtro}){
        return db('vendas').where({ ...filtro }).first()
    },
}