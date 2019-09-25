const db = require('../db/knex')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')

class Usuario {

    constructor(){
        this._table = 'usuario'
    }

    createToken(conteudo){
        const agora = Math.floor(Date.now() / 1000)
        
        conteudo.iat = agora
        conteudo.exp = agora + (1 * 24 * 60 * 60)

        return {
            ...conteudo,
            token: jwt.encode(conteudo, process.env.AUTH_SECRET)
        }
    }
    
    encriptSenha(senha){
        const salt = bcrypt.genSaltSync()

        return bcrypt.hashSync(senha,salt)
    }
    
    validarFiltros(dados){
        const { id, email } = dados

        if(!id && !email) throw new Error('novo Erro')

        return true
    }

    async login(email, senha){
        try{
            const usuario = await db(this._table).where({ email }).first()

            if(!usuario) throw new Error('Email inválido')

            const senhaCorreta = bcrypt.compareSync(senha, usuario.senha)

            if(!senhaCorreta) throw new Error('Senha inválida')
            
            return this.createToken(usuario)
            
        }catch(e){
            throw new Error(e)
        }
    }

    async novoUsuario(dados){

        try{
            dados.senha = this.encriptSenha(dados.senha)
            
            const [ id ] = await db.insert(dados).into(this._table)
            
            return db(this._table).where({ id }).first()

        }catch(e){
            throw new Error(e)
        }

    }

    async excluirUsuario(filtro){

        try {

            this.validarFiltros(filtro)

            const usuarioExluido = await db(this._table).where(filtro).first()
            
            await db(this._table).where(filtro).delete()

            return usuarioExluido

        }catch(e){
            throw new Error(e)
        }
    }

    async alterarUsuario(filtro, dados){
        
        try{

            this.validarFiltros(filtro)
            
            return await db(this._table).where(filtro).update(dados)

        }catch(e){
            throw new Error(e)
        }
    }

    async listarUsuarios(){
        return db(this._table)
    }

    async buscarUsuario(filtro){

        this.validarFiltros(filtro)

        return await db(this._table).where(filtro).first()
       
    }
}

module.exports = new Usuario()