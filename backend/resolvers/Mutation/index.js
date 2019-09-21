const Fornecedor = require('./Fornecedor')
const Venda   = require('./Venda')
const Produto = require('./Produto')
const Cliente = require('./Cliente')
const Usuario = require('./Usuario')
const Compra  = require('./Compra')
const Estoque = require('./Estoque')

module.exports = {
    ...Venda,
    ...Produto,
    ...Cliente,
    ...Usuario,
    ...Fornecedor,
    ...Compra,
    ...Estoque
}