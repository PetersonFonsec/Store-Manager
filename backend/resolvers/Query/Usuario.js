const User = require('../../controllers/Usuario')

module.exports = {
    login(_, { email, senha }){
        
        return User.login(email, senha)
    },
    usuarios(){
        return User.listUsers()
    },
    usuario( _, { filtro } ){
        return User.getUser(filtro)
    },
}