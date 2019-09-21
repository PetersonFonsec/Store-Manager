const db = require('../../db/knex')

module.exports = {
    async clientes(){
        return await db('clientes')
    },
    async cliente(_, { filtro }){
        return await db('clientes').where({ ...filtro }).first()
    },
}