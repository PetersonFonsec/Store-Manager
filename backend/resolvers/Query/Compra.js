const db = require('../../db/knex')

module.exports = {
    async compras(){
        return await db('compras')
    },
    async compra(_, { filtro }){
        return await db('compras').where({ ...filtro }).first()
    },
}