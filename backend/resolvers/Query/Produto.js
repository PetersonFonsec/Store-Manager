const db = require('../../db/knex')

module.exports = {
    async produtos(){
        return db('produtos')
    },
    async produto(_,{ filtro }){
        return db('produtos').where({ ...filtro}).first()
    },
}