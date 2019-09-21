const db = require('../../db/knex')

module.exports = {
    async usuarios(){
        return db('usuario')
    },
    async usuario( _, { filtro } ){
        return db('usuario').where({ ...filtro }).first()
    },
}