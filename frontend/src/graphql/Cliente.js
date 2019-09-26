import graphql from 'graphql-tag'

export const novoCliente = graphql`
    mutation novoCliente( $dados: ClienteInput! ){
        novoCliente( dados: $dados ){
            id nome email
        }
    }`

export const todosClientes = graphql`
    query clientes{
        clientes{ id nome email telefone celular }
    }`