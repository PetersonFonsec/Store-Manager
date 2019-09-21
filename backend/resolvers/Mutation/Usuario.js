const db = require('../../db/knex')

module.exports = {
    async novoUsuario(_, { dados }){
        return await db.insert({ ...dados }).into('usuario')
    },
    async excluirUsuario(_,{ filtro }){
        return await db('usuario').where({ ...filtro }).delete()
    },
    async alterarUsuario( _, { filtro, dados }){
        return await db('usuario').where({ ...filtro }).update({ ...dados })

    }
}
