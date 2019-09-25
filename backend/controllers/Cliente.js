const db = require('../db/knex')

class Cliente {

    constructor(){
        this._table = 'clientes'
    }

    validarDados(dados){
        const { name, email } = dados

        return name && email
    }

    validarFiltro(filtro){
        const { id, email } = filtro

        return id && email
    }

    async clientes(){
        return await db(this._table)
    }

    async cliente(_, { filtro }){
        
        try{

            if( this.validarFiltro(filtro) ) throw new Error('Email ou Id inválidos')
            
            return await db(this._table).where(filtro).first()

        }catch(error){
            throw new Error(error)
        }

    }

    async novoCliente( dados ){

        try {

            if( !this.validarDados(dados) ) throw new Error('Email ou Nome inválidos')

            const jaExistente = await db(this._table).where({ email: dados.email }).first()
            
            if( jaExistente ) throw new Error('Email já cadastrado')
            
            const cliente = await db.insert(dados).into(this._table)
            
            return db(this._table).where({ id: cliente.id }).first()

        }catch(error){
            throw new Error(error)
        }
    }

    async excluirCliente( filtro ){
        try {

            if( this.validarFiltro(filtro) ) throw new Error('Email ou Id inválidos')

            return await db(this._table).wehre(filtro).delete()

        }catch(error){
            throw new Error(error)
        }
    }

    async alterarCliente(  filtro, dados ){
        return await db(this._table).wehre(filtro).update(dados)
    }
}

return new Cliente()