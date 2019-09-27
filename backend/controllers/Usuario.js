const db = require('../db/knex')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')

class User {

    constructor(){
        this._table = 'usuario'
    }

    createToken(content){
        const agora = Math.floor(Date.now() / 1000)
        
        content.iat = agora
        content.exp = agora + (1 * 24 * 60 * 60)

        return {
            ...content,
            token: jwt.encode(content, process.env.AUTH_SECRET)
        }
    }
    
    encriptPassword(password){
        const salt = bcrypt.genSaltSync()

        return bcrypt.hashSync(password,salt)
    }
    
    validFilter(data){
        const { id, email } = data

        if(!id && !email) throw new Error('novo Erro')

        return true
    }

    async login(email, password){
        try{
            const user = await db(this._table).where({ email }).first()

            if(!user) throw new Error('Email inválido')

            const passwordCorreta = bcrypt.compareSync(password, user.senha)

            if(!passwordCorreta) throw new Error('Senha inválida')
            
            return this.createToken(user)
            
        }catch(e){
            throw new Error(e)
        }
    }

    async newUser(data){

        try{
            data.senha = this.encriptPassword(data.senha)
            
            const [ id ] = await db.insert(data).into(this._table)
            
            return db(this._table).where({ id }).first()

        }catch(e){
            throw new Error(e)
        }

    }

    async deleteUser(filter){

        try {

            this.validFilter(filter)

            const userDeleted = await db(this._table).where(filter).first()
            
            await db(this._table).where(filtro).delete()

            return userDeleted

        }catch(e){
            throw new Error(e)
        }
    }

    async updateUser(filter, data){
        
        try{

            this.validFilter(filter)
            
            return await db(this._table).where(filter).update(data)

        }catch(e){
            throw new Error(e)
        }
    }

    async listUsers(){
        return db(this._table)
    }

    async getUser(filter){

        this.validFilter(filter)

        return await db(this._table).where(filter).first()
       
    }
}

module.exports = new User()