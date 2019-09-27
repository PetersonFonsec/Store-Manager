const db = require('../db/knex')

class Client {

    constructor(){
        this._table = 'clientes'
    }

    validData(data){
        const { name, email } = data

        return name && email
    }

    validaFilter(filter){
        const { id, email } = filter

        return id && email
    }

    async clients(){
        return await db(this._table)
    }

    async client( filter ){
        
        try{

            if( this.validaFilter(filter) ) throw new Error('Email ou Id inválidos')

            return await db(this._table).where(filter).first()

        }catch(error){
            throw new Error(error)
        }

    }

    async newClient( data ){

        try {

            if( !this.validData(data) ) throw new Error('Email ou Nome inválidos')

            const exist = await db(this._table).where({ email: data.email }).first()
            
            if( exist ) throw new Error('Email já cadastrado')
            
            const client = await db.insert(data).into(this._table)
            
            return db(this._table).where({ id: client.id }).first()

        }catch(error){
            throw new Error(error)
        }
    }

    async deleteClient( filtro ){
        try {

            if( this.validaFilter(filtro) ) throw new Error('Email ou Id inválidos')

            return await db(this._table).wehre(filtro).delete()

        }catch(error){
            throw new Error(error)
        }
    }

    async updateClient(  filtro, data ){
        return await db(this._table).wehre(filtro).update(data)
    }
}

module.exports = new Client()