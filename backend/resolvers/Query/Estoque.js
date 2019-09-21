const db = require('../../db/knex')

module.exports = {
    async estoques(){
        return await db('estoque')
    },
    async estoque( _, { filtro }){
        return await db('estoque').where({ ...filtro }).first()
    },
}