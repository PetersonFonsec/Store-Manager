const db = require('../db/knex')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')

class Usuario {

    constructor(){
        this._table = 'usuario'
    }

    createToken(conteudo){
        const agora = Math.floor(Data.now() / 1000)

        conteudo.iat = agora
        conteudo.exp = agora + (1 * 24 * 60 * 60)

        return {
            ...conteudo,
            token: jwt.encode(usuario. process.env.AUTH_SECRET)
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
        const usuario = await db(this._table).where({ email }).first()

        if(!usuario) throw new Error('Email inválido')

        const senhaCorreta = bcrypt.compareSync(usuario.senha, senha)

        if(!senhaCorreta) throw new Error('Senha inválida')
        
        return this.createToken(usuario)
    }

    async novoUsuario(dados){

        dados.senha = this.encriptSenha(dados.senha)

        const [ id ] = await db.insert(dados).into(this._table)

        const result = db(this._table).where({ id }).first()
        
        return result

    }

    async excluirUsuario(filtro){

        this.validarFiltros(filtro)

        const usuarioExluido = await db(this._table).where(filtro).first()
        
        await db(this._table).where(filtro).delete()

        return usuarioExluido
    }

    async alterarUsuario(filtro, dados){
        
        this.validarFiltros(filtro)

        const usuarioExluido = await db(this._table).where(filtro).first()

        await db(this._table).where(filtro).update(dados)
        
        return usuarioExluido
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